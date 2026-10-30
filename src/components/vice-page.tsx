import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, Volume2, VolumeX, X } from "lucide-react";
import {
  AVISOS,
  BONUS_END,
  CAST,
  FIRST_TRAILER,
  LAUNCH,
  PRELOAD,
  SHOTS,
  TIMELINE,
  TZ,
  ZONES,
  formatClock,
  formatWhen,
  liveAlert,
  nextAviso,
  pad,
  partsBetween,
  progressToLaunch,
  type Shot,
} from "@/lib/launch";

const FILTERS: { id: "todos" | Shot["kind"]; label: string }[] = [
  { id: "todos", label: "Tudo" },
  { id: "arte", label: "Arte oficial" },
  { id: "jogo", label: "Screenshots" },
  { id: "lugar", label: "Cartões" },
];

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

function beep(ctx: AudioContext) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "square";
  o.frequency.setValueAtTime(660, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.28);
  g.gain.setValueAtTime(0.045, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.32);
  o.connect(g);
  g.connect(ctx.destination);
  o.start();
  o.stop(ctx.currentTime + 0.34);
}

export function VicePage() {
  const now = useNow();
  const alert = now ? liveAlert(now) : null;
  const launchParts = now ? partsBetween(now, LAUNCH) : null;
  const shown =
    now && launchParts ? (launchParts.done ? partsBetween(LAUNCH, now) : launchParts) : null;
  const upcoming = launchParts && !launchParts.done ? nextAviso(launchParts.ms) : null;
  const untilNext =
    now && upcoming ? partsBetween(now, new Date(LAUNCH.getTime() - upcoming.ms)) : null;

  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("todos");
  const [open, setOpen] = useState<number | null>(null);
  const [sound, setSound] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const seenAlert = useRef<string | null>(null);

  const shots = useMemo(
    () => (filter === "todos" ? SHOTS : SHOTS.filter((s) => s.kind === filter)),
    [filter],
  );

  useEffect(() => {
    if (!alert || !shown) return;
    const label = shown.done
      ? "no ar"
      : `${shown.days}d ${pad(shown.hours)}h ${pad(shown.minutes)}m ${pad(shown.seconds)}s`;
    document.title = `${label} · GTA VI`;
  }, [alert, shown]);

  useEffect(() => {
    if (!alert) return;
    if (seenAlert.current === null) {
      seenAlert.current = alert.id;
      return;
    }
    if (seenAlert.current === alert.id) return;
    seenAlert.current = alert.id;
    setToast(alert.kicker);
    if (sound && audioRef.current) beep(audioRef.current);
  }, [alert, sound]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 8000);
    return () => window.clearTimeout(id);
  }, [toast]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % shots.length));
      if (e.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, shots.length]);

  function toggleSound() {
    setSound((on) => {
      const next = !on;
      if (next) {
        const ctx = audioRef.current ?? new AudioContext();
        audioRef.current = ctx;
        void ctx.resume();
      }
      return next;
    });
  }

  const digits = shown
    ? [pad(shown.days), pad(shown.hours), pad(shown.minutes), pad(shown.seconds)]
    : ["--", "--", "--", "--"];
  const digitLabels = shown?.done
    ? ["Dias no ar", "Horas", "Min", "Seg"]
    : ["Dias", "Horas", "Min", "Seg"];

  const progress = now ? progressToLaunch(now) : 0;

  return (
    <div className="min-h-screen bg-night text-cream">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-line/70 bg-night/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6">
          <a href="#contagem" className="flex items-center gap-2.5">
            <img
              src="/gta/rockstar-wordmark.svg"
              alt="Rockstar Games"
              className="h-9 w-auto"
            />
            <span className="hidden font-display text-sm tracking-widest text-cream uppercase sm:block">
              Rockstar Games
            </span>
          </a>
          <nav className="ml-auto hidden items-center gap-5 text-sm text-mist md:flex">
            <a href="#marcos" className="hover:text-cream">Marcos</a>
            <a href="#galeria" className="hover:text-cream">Imagens</a>
            <a href="#jogo" className="hover:text-cream">O jogo</a>
            <a href="#edicoes" className="hover:text-cream">Edições</a>
          </nav>
          <time
            className="ml-auto font-display text-sm tracking-widest text-gold tabular-nums md:ml-0"
            dateTime={now?.toISOString()}
          >
            {now ? formatClock(now) : "--:--:--"} BRT
          </time>
          <button
            type="button"
            aria-pressed={sound}
            onClick={toggleSound}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-ink px-3 text-sm text-cream"
          >
            {sound ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
            <span className="hidden sm:inline">{sound ? "Som ligado" : "Avisar com som"}</span>
          </button>
        </div>
      </header>

      {toast ? (
        <div
          role="status"
          className="alert-in fixed top-20 left-1/2 z-40 flex w-[min(92vw,28rem)] -translate-x-1/2 items-center justify-between gap-3 rounded-2xl border border-gold bg-ink px-4 py-3 shadow-lg"
        >
          <p>
            <span className="block font-display text-xs tracking-widest text-gold uppercase">Aviso</span>
            <span className="font-display text-2xl tracking-wide text-cream uppercase">{toast}</span>
          </p>
          <button type="button" onClick={() => setToast(null)} className="grid h-11 w-11 place-items-center rounded-full border border-line" aria-label="Fechar aviso">
            <X className="size-4" />
          </button>
        </div>
      ) : null}

      <main>
        <section id="contagem" className="relative bg-night pt-16 lg:min-h-[100svh] lg:overflow-hidden lg:pt-0">
          <img
            src="/gta/beach.jpg"
            alt=""
            className="h-[42vh] w-full object-cover object-[68%_center] lg:absolute lg:inset-0 lg:h-full lg:object-[74%_center]"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-night via-night/88 to-night/10 lg:block" />
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pt-6 pb-8 sm:px-6 lg:min-h-[100svh] lg:justify-center lg:pt-28 lg:pb-16">
            <div className="max-w-xl">
              <p className="font-display text-sm tracking-widest text-gold uppercase">
                Horário de Brasília · GMT−3
              </p>
              <h1 className="mt-2 font-display text-5xl leading-none tracking-tight text-cream uppercase sm:text-7xl">
                GTA VI
              </h1>
              <p className="mt-2 max-w-md text-base text-cream/90 sm:text-lg">
                Grand Theft Auto VI. 19 de novembro de 2026, meia-noite em Brasília.
              </p>

              {alert ? (
                <div
                  key={alert.id}
                  className={`alert-in mt-6 rounded-card border px-4 py-4 sm:px-5 ${
                    alert.hot ? "border-coral bg-coral/20" : "border-line bg-ink/80"
                  }`}
                >
                  <p className="font-display text-sm tracking-widest text-gold uppercase">{alert.kicker}</p>
                  <p className="mt-1 font-display text-3xl leading-none tracking-tight text-cream uppercase sm:text-4xl">
                    {alert.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist sm:text-base">{alert.detail}</p>
                </div>
              ) : (
                <div className="mt-6 h-28 rounded-card border border-line bg-ink/80" />
              )}

              <div className="mt-5 grid grid-cols-4 gap-2">
                {digits.map((value, i) => (
                  <div key={digitLabels[i]} className="rounded-2xl border border-line bg-ink/80 px-1 py-3 text-center sm:py-4">
                    <div className="font-display text-4xl leading-none text-cream tabular-nums sm:text-6xl">
                      {value}
                    </div>
                    <div className="mt-2 font-display text-xs tracking-widest text-mist uppercase">
                      {digitLabels[i]}
                    </div>
                  </div>
                ))}
              </div>

              {upcoming && untilNext && !untilNext.done ? (
                <p className="mt-4 text-sm text-mist">
                  Próximo aviso: <span className="text-cream">{upcoming.shout}</span>
                  {" · "}
                  em {untilNext.days > 0 ? `${untilNext.days}d ` : ""}
                  {pad(untilNext.hours)}h {pad(untilNext.minutes)}m
                </p>
              ) : null}

              <div className="mt-6">
                <div className="flex items-baseline justify-between gap-3 text-xs tracking-wide text-mist uppercase">
                  <span>Desde o trailer 1 · 4 dez 2023</span>
                  <span className="font-display text-base text-cream tabular-nums">
                    {Math.round(progress * 100)}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line" role="meter" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100} aria-label="Caminho do primeiro trailer até o lançamento">
                  <div className="h-full bg-coral" style={{ width: `${progress * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="marcos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead
            kicker="Avisos"
            title="O que esta página vai gritar"
            body="O banner lá em cima troca sozinho. Uma semana, um dia, uma hora, dez minutos, um minuto. Se ligar o som, toca um bip quando o aviso muda — com a aba aberta."
          />
          <ol className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {AVISOS.map((item) => {
              const at = LAUNCH.getTime() - item.ms;
              const passed = now ? now.getTime() >= at : false;
              const current = alert?.id === item.id || (item.id === "go" && alert?.id === "live");
              const isNext = !passed && !current && item.id === upcoming?.id;
              return (
                <li
                  key={item.id}
                  className={`min-w-36 shrink-0 rounded-2xl border px-3 py-3 ${
                    current
                      ? "border-coral bg-coral/15"
                      : isNext
                        ? "border-gold bg-ink"
                        : passed
                          ? "border-line bg-ink text-mist"
                          : "border-line bg-panel"
                  }`}
                >
                  <p className="font-display text-xs tracking-widest text-gold uppercase">
                    {current ? "Agora" : passed ? "Já passou" : isNext ? "Próximo" : "Vem aí"}
                  </p>
                  <p className="mt-1 font-display text-xl text-cream uppercase">{item.label}</p>
                  <p className="mt-1 text-sm text-mist">{item.shout}</p>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <DateCard
              label="Pré-carga digital"
              when="12 nov 2026 · 00:00 BRT"
              target={PRELOAD}
              now={now}
              doneLabel="Aberta"
              note="Quem reservou a cópia digital. A caixa também chega às lojas neste dia — com código, sem disco."
            />
            <DateCard
              label="Lançamento"
              when="19 nov 2026 · 00:00 BRT"
              target={LAUNCH}
              now={now}
              doneLabel="No ar"
              note="PS5 e Xbox Series X|S. Esta contagem é a meia-noite da loja brasileira."
              featured
            />
            <DateCard
              label="Fim do pack de reserva"
              when="Antes de 20 nov 2026"
              target={BONUS_END}
              now={now}
              doneLabel="Encerrou"
              note="Vintage Vice City Pack em qualquer compra feita antes do dia 20. Pré-venda digital: um mês de GTA+."
            />
          </div>

          <div className="mt-8 rounded-card border border-line bg-panel p-4 sm:p-5">
            <h3 className="font-display text-xl tracking-wide text-cream uppercase">
              A mesma meia-noite, em outros fusos
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-mist">
              O alvo daqui é um instante só: 19 de novembro de 2026, 00:00, America/Sao_Paulo.
              A PlayStation Store tem publicado meia-noite no fuso de cada loja — então, no Brasil, bate com este relógio.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {ZONES.map((z) => (
                <li key={z.zone} className="rounded-2xl border border-line bg-ink px-3 py-3">
                  <p className="text-sm text-mist">{z.city}</p>
                  <p className="mt-1 font-display text-lg leading-tight text-cream uppercase">
                    {formatWhen(LAUNCH, z.zone)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="galeria" className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-8">
          <SectionHead
            kicker="Kit oficial"
            title="Imagem da Rockstar. Não de gerador."
            body="Arte, screenshots e cartões saíram do pacote de imprensa de Grand Theft Auto VI no site da Rockstar. Nada aqui foi desenhado por inteligência artificial."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => {
                  setFilter(f.id);
                  setOpen(null);
                }}
                className={`h-11 rounded-full border px-4 text-sm ${
                  filter === f.id
                    ? "border-coral bg-coral text-night"
                    : "border-line bg-ink text-cream"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {shots.map((shot, index) => (
              <li key={shot.src}>
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  className="block w-full overflow-hidden rounded-card border border-line bg-ink text-left"
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                  <span className="block px-3 py-3">
                    <span className="block font-display text-lg tracking-wide text-cream uppercase">
                      {shot.title}
                    </span>
                    <span className="block text-sm text-mist">{shot.caption}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section id="jogo" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHead
              kicker="Leonida"
              title="O lado escuro do lugar mais ensolarado da América."
              body="Jason e Lucia sempre souberam que o jogo está contra eles. Quando um golpe fácil dá errado, os dois caem no meio de uma conspiração que atravessa o estado de Leonida — e vão precisar um do outro se quiserem sair vivos."
            />
            <blockquote className="mt-5 border-l-2 border-coral pl-4 text-sm leading-relaxed text-mist">
              “Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America.”
              <footer className="mt-2 text-cream">Rockstar Games, página oficial de GTA VI</footer>
            </blockquote>
            <dl className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              <Fact k="Lançamento" v="19 nov 2026" />
              <Fact k="Relógio" v="00:00 BRT" />
              <Fact k="Plataformas" v="PS5 · Xbox Series" />
              <Fact k="Pré-carga" v="12 nov 2026" />
              <Fact k="Padrão" v="US$ 79,99" />
              <Fact k="Ultimate" v="US$ 99,99" />
              <Fact k="Classificação" v="ESRB M · 17+" />
              <Fact k="Estado" v="Leonida" />
              <Fact k="Cidade" v="Vice City" />
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Preço de tabela publicado nos EUA. A loja brasileira pode cobrar outro valor.
              Classificação indica sangue e violência intensa, humor adulto, nudez, linguagem forte, conteúdo sexual, drogas, álcool e compras no jogo.
            </p>
          </div>
          <figure className="overflow-hidden rounded-card border border-line bg-ink">
            <img src="/gta/poster.jpg" alt="Capa oficial vertical de Grand Theft Auto VI" className="w-full" />
            <figcaption className="px-4 py-3 text-sm text-mist">
              Capa oficial, do kit de arte da Rockstar.
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <SectionHead
            kicker="Quem aparece no material oficial"
            title="Nomes que a Rockstar já mostrou."
            body="Sem biografia inventada. Estes são os nomes das pastas do kit de screenshots."
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Portrait src="/gta/shot-jason.jpg" alt="Jason Duval" name="Jason Duval" role="Protagonista" />
            <Portrait src="/gta/shot-lucia.jpg" alt="Lucia Caminos" name="Lucia Caminos" role="Protagonista" />
            <Portrait src="/gta/shot-boobie.jpg" alt="Boobie Ike" name="Boobie Ike" role="No material oficial" />
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CAST.map((name) => (
              <li key={name} className="rounded-full border border-line bg-ink px-3 py-2 text-sm text-cream">
                {name}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Vice City", "A cidade. É o nome que a Rockstar põe na frente de tudo."],
              ["Leonida Keys", "Região publicada no kit oficial, junto com Vice City."],
              ["Grassrivers", "Região publicada no kit oficial, com screenshot próprio."],
              ["Port Gellhorn", "Porto que já aparece nas screenshots oficiais."],
              ["Mount Kalaga", "Parque nacional no kit de lugares da Rockstar."],
              ["Ambrosia", "Também está nas pastas oficiais de Leonida."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-card border border-line bg-panel p-4">
                <h3 className="font-display text-2xl tracking-wide text-cream uppercase">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-mist">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="edicoes" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <SectionHead
            kicker="Loja da Rockstar"
            title="Padrão, Ultimate e o pack de antes do dia 20."
            body="Lista curta do que a Rockstar Store publica. Não é a vitrine inteira — o resto está no link oficial."
          />
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            <article className="rounded-card border border-line bg-panel p-5">
              <p className="font-display text-sm tracking-widest text-gold uppercase">Padrão</p>
              <h3 className="mt-1 font-display text-4xl text-cream uppercase">US$ 79,99</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mist">
                <li>Jogo digital para PS5 ou Xbox Series X|S.</li>
                <li>Pré-carga a partir de 12 de novembro para quem reservou.</li>
                <li>Caixa física no mesmo dia: só o código de download, sem disco.</li>
              </ul>
            </article>
            <article className="rounded-card border border-coral bg-ink p-5">
              <p className="font-display text-sm tracking-widest text-coral uppercase">Ultimate</p>
              <h3 className="mt-1 font-display text-4xl text-cream uppercase">US$ 99,99</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mist">
                <li>Tudo do padrão, mais o que a loja lista por cima.</li>
                <li>Grotti Cheetah ’95, revolvers Hawk and Little Morgan, variantes de arma.</li>
                <li>Estilos Vice City, veículos do safehouse do Jason, coleção de clássicos.</li>
                <li>Mod shops e lojas: Rideout Customs, Sara’s, Electric Fang, Stock 305, e outras da página oficial.</li>
              </ul>
            </article>
          </div>
          <article className="mt-3 rounded-card border border-line bg-panel p-5">
            <p className="font-display text-sm tracking-widest text-gold uppercase">Vintage Vice City Pack</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-mist">
              Qualquer compra feita antes de 20 de novembro. Inclui o Vapid Stanier Sedan ’55 com garagem, roupas, penteados e uma estampa exclusiva de arma. Reserva digital ainda leva um mês de GTA+.
            </p>
            <a
              href="https://www.rockstargames.com/VI/"
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-coral px-4 text-sm font-medium text-night"
            >
              Página oficial
              <ExternalLink className="size-4" />
            </a>
          </article>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <SectionHead kicker="Até aqui" title="Como a data chegou em 19 de novembro." />
          <ol className="mt-6 border-l border-line">
            {TIMELINE.map((item) => (
              <li key={item.title} className="relative pb-6 pl-6">
                <span className="absolute top-1.5 -left-1.5 size-3 rounded-full bg-coral" />
                <p className="font-display text-sm tracking-widest text-gold uppercase">{item.when}</p>
                <h3 className="font-display text-2xl text-cream uppercase">{item.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-mist">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-2 text-xs text-mist">
            Trailer 1 em 4 de dezembro de 2023. A data de 19 de novembro de 2026 foi anunciada pela Rockstar em 6 de novembro de 2025.
            Primeiro trailer usado só como marco do caminho: {formatWhen(FIRST_TRAILER, TZ)}.
          </p>
        </section>
      </main>

      <footer className="border-t border-line px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/gta/rockstar-wordmark.svg" alt="" className="h-8 w-auto" />
            <p className="max-w-md text-sm leading-relaxed text-mist">
              Contagem de fã. Não é site da Rockstar nem da Take-Two. Imagens: kit oficial de Grand Theft Auto VI. Logo R*: marca da Rockstar Games.
            </p>
          </div>
          <p className="text-sm text-mist">
            Fuso fixo: {TZ}. Sem horário de verão.
          </p>
        </div>
      </footer>

      {open !== null && shots[open] ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={shots[open].title}
        >
          <button type="button" className="absolute inset-0" aria-label="Fechar imagem" onClick={() => setOpen(null)} />
          <figure className="relative z-10 w-full max-w-5xl">
            <img src={shots[open].src} alt={shots[open].alt} className="max-h-[80svh] w-full rounded-card object-contain" />
            <figcaption className="mt-3 flex items-end justify-between gap-3">
              <span>
                <span className="block font-display text-2xl text-cream uppercase">{shots[open].title}</span>
                <span className="text-sm text-mist">{shots[open].caption}</span>
              </span>
              <button type="button" onClick={() => setOpen(null)} className="inline-flex h-11 items-center rounded-full border border-line px-4 text-sm">
                Fechar
              </button>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}

function SectionHead({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="font-display text-sm tracking-widest text-gold uppercase">{kicker}</p>
      <h2 className="mt-1 font-display text-4xl leading-none tracking-tight text-cream uppercase sm:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-3 text-base leading-relaxed text-mist">{body}</p> : null}
    </div>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-line bg-panel px-3 py-3">
      <dt className="text-xs tracking-wide text-mist uppercase">{k}</dt>
      <dd className="mt-1 font-display text-lg leading-tight text-cream uppercase">{v}</dd>
    </div>
  );
}

function Portrait({ src, alt, name, role }: { src: string; alt: string; name: string; role: string }) {
  return (
    <figure className="overflow-hidden rounded-card border border-line bg-ink">
      <img src={src} alt={alt} loading="lazy" className="aspect-video w-full object-cover object-top" />
      <figcaption className="px-3 py-3">
        <span className="block font-display text-2xl text-cream uppercase">{name}</span>
        <span className="text-sm text-mist">{role}</span>
      </figcaption>
    </figure>
  );
}

function DateCard({
  label,
  when,
  target,
  now,
  note,
  featured,
  doneLabel,
}: {
  label: string;
  when: string;
  target: Date;
  now: Date | null;
  note: string;
  featured?: boolean;
  doneLabel: string;
}) {
  const p = now ? partsBetween(now, target) : null;
  const status = !p ? "—" : p.done ? doneLabel : `${p.days}d ${pad(p.hours)}h ${pad(p.minutes)}m`;
  return (
    <article className={`rounded-card border p-4 ${featured ? "border-coral bg-ink" : "border-line bg-panel"}`}>
      <p className="font-display text-sm tracking-widest text-gold uppercase">{label}</p>
      <p className="mt-2 font-display text-3xl leading-none text-cream tabular-nums">{status}</p>
      <p className="mt-2 text-sm text-cream">{when}</p>
      <p className="mt-2 text-sm leading-relaxed text-mist">{note}</p>
    </article>
  );
}
