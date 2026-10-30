import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ExternalLink, n as VolumeX, r as Volume2, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dy4GXhMb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TZ = "America/Sao_Paulo";
var LAUNCH = /* @__PURE__ */ new Date("2026-11-19T00:00:00-03:00");
var PRELOAD = /* @__PURE__ */ new Date("2026-11-12T00:00:00-03:00");
var BONUS_END = /* @__PURE__ */ new Date("2026-11-20T00:00:00-03:00");
var FIRST_TRAILER = /* @__PURE__ */ new Date("2023-12-04T00:00:00-03:00");
var DAY = 864e5;
var HOUR = 36e5;
var MIN = 6e4;
function partsBetween(from, to) {
	const ms = to.getTime() - from.getTime();
	const total = Math.floor(Math.abs(ms) / 1e3);
	return {
		ms,
		done: ms <= 0,
		days: Math.floor(total / 86400),
		hours: Math.floor(total % 86400 / 3600),
		minutes: Math.floor(total % 3600 / 60),
		seconds: total % 60
	};
}
function pad(n) {
	return String(n).padStart(2, "0");
}
function liveAlert(now) {
	const r = partsBetween(now, LAUNCH);
	if (r.done) return {
		id: "live",
		kicker: "Lançou",
		title: "Vice City está no ar.",
		detail: "Passou da meia-noite de 19 de novembro em Brasília. Se a sua loja libera no fuso local, este é o instante do Brasil.",
		hot: true
	};
	const { days, hours, minutes } = r;
	if (days > 14) return {
		id: `d${days}`,
		kicker: `Faltam ${days} dias`,
		title: "Ainda não é semana. Já é reta final.",
		detail: "Menos de três semanas para o lançamento. O próximo aviso grande dispara quando bater duas semanas.",
		hot: false
	};
	if (days === 14) return {
		id: "14d",
		kicker: "Faltam duas semanas",
		title: "Duas semanas. Marca isso.",
		detail: "Quinzena final de Leonida. O aviso de uma semana vem em seguida.",
		hot: false
	};
	if (days > 7) return {
		id: `d${days}`,
		kicker: `Faltam ${days} dias`,
		title: "Menos de duas semanas.",
		detail: "Quando o relógio cair para 7 dias, o aviso vira: falta uma semana.",
		hot: false
	};
	if (days === 7) return {
		id: "7d",
		kicker: "Falta uma semana",
		title: "Uma semana. E a pré-carga abre neste dia.",
		detail: "Sete dias até a meia-noite de Brasília. A pré-carga digital da Rockstar começa em 12 de novembro — o mesmo dia em que a contagem entra na última semana.",
		hot: true
	};
	if (days > 3) return {
		id: `d${days}`,
		kicker: `Faltam ${days} dias`,
		title: "Última semana.",
		detail: "A pré-carga, se você comprou digital, já deve estar disponível desde o dia 12.",
		hot: false
	};
	if (days === 3) return {
		id: "3d",
		kicker: "Faltam três dias",
		title: "Três dias. O fim de semana de Vice City.",
		detail: "Quinta-feira, 19, meia-noite. Não é mais mês que vem.",
		hot: true
	};
	if (days === 2) return {
		id: "2d",
		kicker: "Faltam dois dias",
		title: "Dois dias.",
		detail: "Depois de amanhã, no horário de Brasília.",
		hot: true
	};
	if (days === 1) return {
		id: "1d",
		kicker: "Falta um dia",
		title: "Falta um dia.",
		detail: "Amanhã, 00:00, horário de Brasília. O Vintage Vice City Pack ainda entra em pedido feito antes do dia 20.",
		hot: true
	};
	if (hours > 12) return {
		id: `h${hours}`,
		kicker: `Faltam ${hours} horas`,
		title: "O contador de dias zerou.",
		detail: "Menos de 24 horas para a meia-noite de Brasília.",
		hot: true
	};
	if (hours === 12) return {
		id: "12h",
		kicker: "Faltam 12 horas",
		title: "Meio dia de distância.",
		detail: "Doze horas para a meia-noite de Brasília.",
		hot: true
	};
	if (hours > 1) return {
		id: `h${hours}`,
		kicker: `Faltam ${hours} horas`,
		title: "Últimas horas.",
		detail: "Quando cair para 60 minutos, o aviso troca para: falta uma hora.",
		hot: true
	};
	if (hours === 1) return {
		id: "1h",
		kicker: "Falta uma hora",
		title: "Falta uma hora.",
		detail: "Sessenta minutos, no relógio de Brasília. Deixa o console acordado.",
		hot: true
	};
	if (minutes >= 10) return {
		id: "mins",
		kicker: `Faltam ${minutes} minutos`,
		title: "Menos de uma hora.",
		detail: "A contagem já está em minutos.",
		hot: true
	};
	if (minutes >= 2) return {
		id: "10m",
		kicker: `Faltam ${minutes} minutos`,
		title: "Faltam minutos.",
		detail: "Menos de dez. O próximo aviso é o do último minuto.",
		hot: true
	};
	if (minutes === 1) return {
		id: "1m",
		kicker: "Falta um minuto",
		title: "Falta um minuto.",
		detail: "Sessenta segundos para a meia-noite de Brasília.",
		hot: true
	};
	return {
		id: "sec",
		kicker: `Faltam ${r.seconds} segundos`,
		title: "Agora.",
		detail: "A meia-noite de Brasília está em segundos.",
		hot: true
	};
}
var AVISOS = [
	{
		id: "14d",
		ms: 14 * DAY,
		label: "2 semanas",
		shout: "Faltam duas semanas"
	},
	{
		id: "7d",
		ms: 7 * DAY,
		label: "1 semana",
		shout: "Falta uma semana"
	},
	{
		id: "3d",
		ms: 3 * DAY,
		label: "3 dias",
		shout: "Faltam três dias"
	},
	{
		id: "1d",
		ms: DAY,
		label: "1 dia",
		shout: "Falta um dia"
	},
	{
		id: "12h",
		ms: 12 * HOUR,
		label: "12 horas",
		shout: "Faltam 12 horas"
	},
	{
		id: "1h",
		ms: HOUR,
		label: "1 hora",
		shout: "Falta uma hora"
	},
	{
		id: "10m",
		ms: 10 * MIN,
		label: "10 min",
		shout: "Faltam 10 minutos"
	},
	{
		id: "1m",
		ms: MIN,
		label: "1 min",
		shout: "Falta um minuto"
	},
	{
		id: "go",
		ms: 0,
		label: "Lançamento",
		shout: "Lançou"
	}
];
function nextAviso(msLeft) {
	return AVISOS.find((a) => msLeft > a.ms) ?? null;
}
function progressToLaunch(now) {
	const a = FIRST_TRAILER.getTime();
	const b = LAUNCH.getTime();
	return Math.min(1, Math.max(0, (now.getTime() - a) / (b - a)));
}
function formatWhen(date, timeZone) {
	return new Intl.DateTimeFormat("pt-BR", {
		timeZone,
		weekday: "short",
		day: "2-digit",
		month: "short",
		hour: "2-digit",
		minute: "2-digit"
	}).format(date);
}
function formatClock(date) {
	return new Intl.DateTimeFormat("pt-BR", {
		timeZone: TZ,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}).format(date);
}
var ZONES = [
	{
		city: "Brasília",
		zone: "America/Sao_Paulo"
	},
	{
		city: "Nova York",
		zone: "America/New_York"
	},
	{
		city: "Los Angeles",
		zone: "America/Los_Angeles"
	},
	{
		city: "Londres",
		zone: "Europe/London"
	},
	{
		city: "Tóquio",
		zone: "Asia/Tokyo"
	}
];
var SHOTS = [
	{
		src: "/gta/beach.jpg",
		alt: "Arte oficial de Lucia Caminos e Jason Duval na praia de Vice City ao pôr do sol",
		title: "Jason e Lucia",
		kind: "arte",
		caption: "Arte oficial. Lucia Caminos e Jason Duval."
	},
	{
		src: "/gta/duo.jpg",
		alt: "Arte oficial de Jason e Lucia sentados no capô de um carro em Vice City",
		title: "No capô",
		kind: "arte",
		caption: "Arte oficial de lançamento. Placa de Leonida."
	},
	{
		src: "/gta/lock.jpg",
		alt: "Arte oficial de Jason em pé e Lucia sentada num carro vermelho ao pôr do sol",
		title: "Pôr do sol",
		kind: "arte",
		caption: "Arte oficial. O pôr do sol de Leonida."
	},
	{
		src: "/gta/robbery.jpg",
		alt: "Arte oficial de Jason e Lucia num assalto",
		title: "O golpe",
		kind: "arte",
		caption: "Arte oficial — o golpe que desanda."
	},
	{
		src: "/gta/hero.jpg",
		alt: "Capa oficial de Grand Theft Auto VI com o logo VI e personagens",
		title: "Capa oficial",
		kind: "arte",
		caption: "Capa oficial de Grand Theft Auto VI."
	},
	{
		src: "/gta/extended.jpg",
		alt: "Pôster oficial An Extended Look de GTA VI",
		title: "Extended Look",
		kind: "arte",
		caption: "Pôster oficial do Extended Look."
	},
	{
		src: "/gta/album.jpg",
		alt: "Capa oficial de The Album, trilha de GTA VI",
		title: "The Album",
		kind: "arte",
		caption: "Capa oficial de The Album."
	},
	{
		src: "/gta/shot-jason.jpg",
		alt: "Screenshot oficial de Jason Duval atrás de uma grade, com luz de viatura",
		title: "Jason Duval",
		kind: "jogo",
		caption: "Screenshot oficial. Jason Duval."
	},
	{
		src: "/gta/shot-lucia.jpg",
		alt: "Screenshot oficial de Lucia Caminos ao lado de um carro, em frente a uma casa de câmbio",
		title: "Lucia Caminos",
		kind: "jogo",
		caption: "Screenshot oficial. Lucia Caminos."
	},
	{
		src: "/gta/shot-duo.jpg",
		alt: "Screenshot oficial de Jason e Lucia juntos",
		title: "Os dois",
		kind: "jogo",
		caption: "Screenshot oficial. Jason e Lucia."
	},
	{
		src: "/gta/shot-boobie.jpg",
		alt: "Screenshot oficial de Boobie Ike",
		title: "Boobie Ike",
		kind: "jogo",
		caption: "Screenshot oficial. Boobie Ike."
	},
	{
		src: "/gta/shot-vice.jpg",
		alt: "Screenshot oficial do skyline de Vice City, com o Hotel Valetta e uma quadra",
		title: "Vice City",
		kind: "jogo",
		caption: "Screenshot oficial. Vice City, Hotel Valetta."
	},
	{
		src: "/gta/shot-vice-2.jpg",
		alt: "Screenshot oficial de Vice City",
		title: "Outra Vice City",
		kind: "jogo",
		caption: "Screenshot oficial. Vice City."
	},
	{
		src: "/gta/shot-keys.jpg",
		alt: "Screenshot oficial de Leonida Keys",
		title: "Leonida Keys",
		kind: "jogo",
		caption: "Screenshot oficial. Leonida Keys."
	},
	{
		src: "/gta/shot-port.jpg",
		alt: "Screenshot oficial de Port Gellhorn",
		title: "Port Gellhorn",
		kind: "jogo",
		caption: "Screenshot oficial. Port Gellhorn."
	},
	{
		src: "/gta/shot-grass.jpg",
		alt: "Screenshot oficial de Grassrivers",
		title: "Grassrivers",
		kind: "jogo",
		caption: "Screenshot oficial. Grassrivers."
	},
	{
		src: "/gta/vice.jpg",
		alt: "Cartão postal oficial Visit Leonida de Vice City",
		title: "Vice City",
		kind: "lugar",
		caption: "Cartão oficial do kit da Rockstar. Vice City."
	},
	{
		src: "/gta/keys.jpg",
		alt: "Cartão postal oficial de Leonida Keys",
		title: "Leonida Keys",
		kind: "lugar",
		caption: "Cartão oficial. Leonida Keys."
	},
	{
		src: "/gta/grass.jpg",
		alt: "Cartão postal oficial de Grassrivers",
		title: "Grassrivers",
		kind: "lugar",
		caption: "Cartão oficial. Grassrivers."
	},
	{
		src: "/gta/port.jpg",
		alt: "Cartão postal oficial de Port Gellhorn",
		title: "Port Gellhorn",
		kind: "lugar",
		caption: "Cartão oficial. Port Gellhorn."
	},
	{
		src: "/gta/kalaga.jpg",
		alt: "Cartão postal oficial de Mount Kalaga National Park",
		title: "Mount Kalaga",
		kind: "lugar",
		caption: "Cartão oficial. Mount Kalaga National Park."
	},
	{
		src: "/gta/ambrosia.jpg",
		alt: "Cartão postal oficial de Ambrosia",
		title: "Ambrosia",
		kind: "lugar",
		caption: "Cartão oficial. Ambrosia."
	}
];
var CAST = [
	"Jason Duval",
	"Lucia Caminos",
	"Boobie Ike",
	"Brian Heder",
	"Cal Hampton",
	"Dre'Quan Priest",
	"Raul Bautista",
	"Real Dimez"
];
var TIMELINE = [
	{
		when: "4 dez 2023",
		title: "Trailer 1",
		body: "Primeiro trailer. Vice City de volta, com Lucia e Jason."
	},
	{
		when: "2 mai 2025",
		title: "Primeiro adiamento",
		body: "Sai do outono de 2025 e vai para 26 de maio de 2026."
	},
	{
		when: "6 nov 2025",
		title: "Data que vale agora",
		body: "Rockstar tira de 26 de maio de 2026 e crava 19 de novembro de 2026."
	},
	{
		when: "27 ago 2026",
		title: "Extended Look",
		body: "Novo olhar no jogo. Mais Leonida, mais os dois."
	},
	{
		when: "15 out 2026",
		title: "Launch Trailer",
		body: "Trailer de lançamento. A data segue 19 de novembro."
	},
	{
		when: "12 nov 2026",
		title: "Pré-carga e caixa",
		body: "Pré-carga digital para quem reservou. Caixa à venda — só o código, sem disco."
	},
	{
		when: "19 nov 2026",
		title: "Lançamento",
		body: "00:00 no horário de Brasília. PS5 e Xbox Series X|S."
	},
	{
		when: "Antes de 20 nov",
		title: "Vintage Vice City Pack",
		body: "Pedido feito antes do dia 20 leva o pack sem custo extra. Pré-venda digital ainda inclui um mês de GTA+."
	}
];
var FILTERS = [
	{
		id: "todos",
		label: "Tudo"
	},
	{
		id: "arte",
		label: "Arte oficial"
	},
	{
		id: "jogo",
		label: "Screenshots"
	},
	{
		id: "lugar",
		label: "Cartões"
	}
];
function useNow() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setNow(/* @__PURE__ */ new Date());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return now;
}
function beep(ctx) {
	const o = ctx.createOscillator();
	const g = ctx.createGain();
	o.type = "square";
	o.frequency.setValueAtTime(660, ctx.currentTime);
	o.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + .28);
	g.gain.setValueAtTime(.045, ctx.currentTime);
	g.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + .32);
	o.connect(g);
	g.connect(ctx.destination);
	o.start();
	o.stop(ctx.currentTime + .34);
}
function VicePage() {
	const now = useNow();
	const alert = now ? liveAlert(now) : null;
	const launchParts = now ? partsBetween(now, LAUNCH) : null;
	const shown = now && launchParts ? launchParts.done ? partsBetween(LAUNCH, now) : launchParts : null;
	const upcoming = launchParts && !launchParts.done ? nextAviso(launchParts.ms) : null;
	const untilNext = now && upcoming ? partsBetween(now, new Date(LAUNCH.getTime() - upcoming.ms)) : null;
	const [filter, setFilter] = (0, import_react.useState)("todos");
	const [open, setOpen] = (0, import_react.useState)(null);
	const [sound, setSound] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)(null);
	const audioRef = (0, import_react.useRef)(null);
	const seenAlert = (0, import_react.useRef)(null);
	const shots = (0, import_react.useMemo)(() => filter === "todos" ? SHOTS : SHOTS.filter((s) => s.kind === filter), [filter]);
	(0, import_react.useEffect)(() => {
		if (!alert || !shown) return;
		const label = shown.done ? "no ar" : `${shown.days}d ${pad(shown.hours)}h ${pad(shown.minutes)}m ${pad(shown.seconds)}s`;
		document.title = `${label} · GTA VI`;
	}, [alert, shown]);
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const id = window.setTimeout(() => setToast(null), 8e3);
		return () => window.clearTimeout(id);
	}, [toast]);
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(null);
			if (e.key === "ArrowRight") setOpen((i) => i === null ? i : (i + 1) % shots.length);
			if (e.key === "ArrowLeft") setOpen((i) => i === null ? i : (i - 1 + shots.length) % shots.length);
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
				ctx.resume();
			}
			return next;
		});
	}
	const digits = shown ? [
		pad(shown.days),
		pad(shown.hours),
		pad(shown.minutes),
		pad(shown.seconds)
	] : [
		"--",
		"--",
		"--",
		"--"
	];
	const digitLabels = shown?.done ? [
		"Dias no ar",
		"Horas",
		"Min",
		"Seg"
	] : [
		"Dias",
		"Horas",
		"Min",
		"Seg"
	];
	const progress = now ? progressToLaunch(now) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-night text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-30 border-b border-line/70 bg-night/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contagem",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/gta/rockstar-wordmark.svg",
								alt: "Rockstar Games",
								className: "h-9 w-auto"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden font-display text-sm tracking-widest text-cream uppercase sm:block",
								children: "Rockstar Games"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "ml-auto hidden items-center gap-5 text-sm text-mist md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#marcos",
									className: "hover:text-cream",
									children: "Marcos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#galeria",
									className: "hover:text-cream",
									children: "Imagens"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#jogo",
									className: "hover:text-cream",
									children: "O jogo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#edicoes",
									className: "hover:text-cream",
									children: "Edições"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("time", {
							className: "ml-auto font-display text-sm tracking-widest text-gold tabular-nums md:ml-0",
							dateTime: now?.toISOString(),
							children: [now ? formatClock(now) : "--:--:--", " BRT"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": sound,
							onClick: toggleSound,
							className: "inline-flex h-11 items-center gap-2 rounded-full border border-line bg-ink px-3 text-sm text-cream",
							children: [sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: sound ? "Som ligado" : "Avisar com som"
							})]
						})
					]
				})
			}),
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "status",
				className: "alert-in fixed top-20 left-1/2 z-40 flex w-[min(92vw,28rem)] -translate-x-1/2 items-center justify-between gap-3 rounded-2xl border border-gold bg-ink px-4 py-3 shadow-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-display text-xs tracking-widest text-gold uppercase",
					children: "Aviso"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl tracking-wide text-cream uppercase",
					children: toast
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setToast(null),
					className: "grid h-11 w-11 place-items-center rounded-full border border-line",
					"aria-label": "Fechar aviso",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "contagem",
					className: "relative bg-night pt-16 lg:min-h-[100svh] lg:overflow-hidden lg:pt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/gta/beach.jpg",
							alt: "",
							className: "h-[42vh] w-full object-cover object-[68%_center] lg:absolute lg:inset-0 lg:h-full lg:object-[74%_center]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-night via-night/88 to-night/10 lg:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 mx-auto flex max-w-6xl flex-col px-4 pt-6 pb-8 sm:px-6 lg:min-h-[100svh] lg:justify-center lg:pt-28 lg:pb-16",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm tracking-widest text-gold uppercase",
										children: "Horário de Brasília · GMT−3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 font-display text-5xl leading-none tracking-tight text-cream uppercase sm:text-7xl",
										children: "GTA VI"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-md text-base text-cream/90 sm:text-lg",
										children: "Grand Theft Auto VI. 19 de novembro de 2026, meia-noite em Brasília."
									}),
									alert ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `alert-in mt-6 rounded-card border px-4 py-4 sm:px-5 ${alert.hot ? "border-coral bg-coral/20" : "border-line bg-ink/80"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-sm tracking-widest text-gold uppercase",
												children: alert.kicker
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-display text-3xl leading-none tracking-tight text-cream uppercase sm:text-4xl",
												children: alert.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-mist sm:text-base",
												children: alert.detail
											})
										]
									}, alert.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-28 rounded-card border border-line bg-ink/80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 grid grid-cols-4 gap-2",
										children: digits.map((value, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-line bg-ink/80 px-1 py-3 text-center sm:py-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-4xl leading-none text-cream tabular-nums sm:text-6xl",
												children: value
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 font-display text-xs tracking-widest text-mist uppercase",
												children: digitLabels[i]
											})]
										}, digitLabels[i]))
									}),
									upcoming && untilNext && !untilNext.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-sm text-mist",
										children: [
											"Próximo aviso: ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-cream",
												children: upcoming.shout
											}),
											" · ",
											"em ",
											untilNext.days > 0 ? `${untilNext.days}d ` : "",
											pad(untilNext.hours),
											"h ",
											pad(untilNext.minutes),
											"m"
										]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-3 text-xs tracking-wide text-mist uppercase",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Desde o trailer 1 · 4 dez 2023" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-display text-base text-cream tabular-nums",
												children: [Math.round(progress * 100), "%"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 h-1.5 overflow-hidden rounded-full bg-line",
											role: "meter",
											"aria-valuenow": Math.round(progress * 100),
											"aria-valuemin": 0,
											"aria-valuemax": 100,
											"aria-label": "Caminho do primeiro trailer até o lançamento",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full bg-coral",
												style: { width: `${progress * 100}%` }
											})
										})]
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "marcos",
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "Avisos",
							title: "O que esta página vai gritar",
							body: "O banner lá em cima troca sozinho. Uma semana, um dia, uma hora, dez minutos, um minuto. Se ligar o som, toca um bip quando o aviso muda — com a aba aberta."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 flex gap-2 overflow-x-auto pb-2",
							children: AVISOS.map((item) => {
								const at = LAUNCH.getTime() - item.ms;
								const passed = now ? now.getTime() >= at : false;
								const current = alert?.id === item.id || item.id === "go" && alert?.id === "live";
								const isNext = !passed && !current && item.id === upcoming?.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: `min-w-36 shrink-0 rounded-2xl border px-3 py-3 ${current ? "border-coral bg-coral/15" : isNext ? "border-gold bg-ink" : passed ? "border-line bg-ink text-mist" : "border-line bg-panel"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xs tracking-widest text-gold uppercase",
											children: current ? "Agora" : passed ? "Já passou" : isNext ? "Próximo" : "Vem aí"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-display text-xl text-cream uppercase",
											children: item.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-mist",
											children: item.shout
										})
									]
								}, item.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-3 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateCard, {
									label: "Pré-carga digital",
									when: "12 nov 2026 · 00:00 BRT",
									target: PRELOAD,
									now,
									doneLabel: "Aberta",
									note: "Quem reservou a cópia digital. A caixa também chega às lojas neste dia — com código, sem disco."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateCard, {
									label: "Lançamento",
									when: "19 nov 2026 · 00:00 BRT",
									target: LAUNCH,
									now,
									doneLabel: "No ar",
									note: "PS5 e Xbox Series X|S. Esta contagem é a meia-noite da loja brasileira.",
									featured: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateCard, {
									label: "Fim do pack de reserva",
									when: "Antes de 20 nov 2026",
									target: BONUS_END,
									now,
									doneLabel: "Encerrou",
									note: "Vintage Vice City Pack em qualquer compra feita antes do dia 20. Pré-venda digital: um mês de GTA+."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-card border border-line bg-panel p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl tracking-wide text-cream uppercase",
									children: "A mesma meia-noite, em outros fusos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-2xl text-sm leading-relaxed text-mist",
									children: "O alvo daqui é um instante só: 19 de novembro de 2026, 00:00, America/Sao_Paulo. A PlayStation Store tem publicado meia-noite no fuso de cada loja — então, no Brasil, bate com este relógio."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5",
									children: ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "rounded-2xl border border-line bg-ink px-3 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-mist",
											children: z.city
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-display text-lg leading-tight text-cream uppercase",
											children: formatWhen(LAUNCH, z.zone)
										})]
									}, z.zone))
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "galeria",
					className: "mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "Kit oficial",
							title: "Imagem da Rockstar. Não de gerador.",
							body: "Arte, screenshots e cartões saíram do pacote de imprensa de Grand Theft Auto VI no site da Rockstar. Nada aqui foi desenhado por inteligência artificial."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": filter === f.id,
								onClick: () => {
									setFilter(f.id);
									setOpen(null);
								},
								className: `h-11 rounded-full border px-4 text-sm ${filter === f.id ? "border-coral bg-coral text-night" : "border-line bg-ink text-cream"}`,
								children: f.label
							}, f.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: shots.map((shot, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen(index),
								className: "block w-full overflow-hidden rounded-card border border-line bg-ink text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: shot.src,
									alt: shot.alt,
									loading: "lazy",
									className: "aspect-video w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block px-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-lg tracking-wide text-cream uppercase",
										children: shot.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm text-mist",
										children: shot.caption
									})]
								})]
							}) }, shot.src))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "jogo",
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "Leonida",
							title: "O lado escuro do lugar mais ensolarado da América.",
							body: "Jason e Lucia sempre souberam que o jogo está contra eles. Quando um golpe fácil dá errado, os dois caem no meio de uma conspiração que atravessa o estado de Leonida — e vão precisar um do outro se quiserem sair vivos."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-5 border-l-2 border-coral pl-4 text-sm leading-relaxed text-mist",
							children: ["“Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America.”", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-2 text-cream",
								children: "Rockstar Games, página oficial de GTA VI"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									k: "Lançamento",
									v: "19 nov 2026"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									k: "Relógio",
									v: "00:00 BRT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									k: "Plataformas",
									v: "PS5 · Xbox Series"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									k: "Pré-carga",
									v: "12 nov 2026"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									k: "Padrão",
									v: "US$ 79,99"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									k: "Ultimate",
									v: "US$ 99,99"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									k: "Classificação",
									v: "ESRB M · 17+"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									k: "Estado",
									v: "Leonida"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									k: "Cidade",
									v: "Vice City"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-mist",
							children: "Preço de tabela publicado nos EUA. A loja brasileira pode cobrar outro valor. Classificação indica sangue e violência intensa, humor adulto, nudez, linguagem forte, conteúdo sexual, drogas, álcool e compras no jogo."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-card border border-line bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/gta/poster.jpg",
							alt: "Capa oficial vertical de Grand Theft Auto VI",
							className: "w-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-4 py-3 text-sm text-mist",
							children: "Capa oficial, do kit de arte da Rockstar."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "Quem aparece no material oficial",
							title: "Nomes que a Rockstar já mostrou.",
							body: "Sem biografia inventada. Estes são os nomes das pastas do kit de screenshots."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
									src: "/gta/shot-jason.jpg",
									alt: "Jason Duval",
									name: "Jason Duval",
									role: "Protagonista"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
									src: "/gta/shot-lucia.jpg",
									alt: "Lucia Caminos",
									name: "Lucia Caminos",
									role: "Protagonista"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
									src: "/gta/shot-boobie.jpg",
									alt: "Boobie Ike",
									name: "Boobie Ike",
									role: "No material oficial"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: CAST.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-line bg-ink px-3 py-2 text-sm text-cream",
								children: name
							}, name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: [
								["Vice City", "A cidade. É o nome que a Rockstar põe na frente de tudo."],
								["Leonida Keys", "Região publicada no kit oficial, junto com Vice City."],
								["Grassrivers", "Região publicada no kit oficial, com screenshot próprio."],
								["Port Gellhorn", "Porto que já aparece nas screenshots oficiais."],
								["Mount Kalaga", "Parque nacional no kit de lugares da Rockstar."],
								["Ambrosia", "Também está nas pastas oficiais de Leonida."]
							].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-line bg-panel p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl tracking-wide text-cream uppercase",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-mist",
									children: body
								})]
							}, title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "edicoes",
					className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "Loja da Rockstar",
							title: "Padrão, Ultimate e o pack de antes do dia 20.",
							body: "Lista curta do que a Rockstar Store publica. Não é a vitrine inteira — o resto está no link oficial."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-line bg-panel p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm tracking-widest text-gold uppercase",
										children: "Padrão"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-4xl text-cream uppercase",
										children: "US$ 79,99"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 space-y-2 text-sm leading-relaxed text-mist",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Jogo digital para PS5 ou Xbox Series X|S." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Pré-carga a partir de 12 de novembro para quem reservou." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Caixa física no mesmo dia: só o código de download, sem disco." })
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-coral bg-ink p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm tracking-widest text-coral uppercase",
										children: "Ultimate"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-4xl text-cream uppercase",
										children: "US$ 99,99"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 space-y-2 text-sm leading-relaxed text-mist",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tudo do padrão, mais o que a loja lista por cima." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Grotti Cheetah ’95, revolvers Hawk and Little Morgan, variantes de arma." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Estilos Vice City, veículos do safehouse do Jason, coleção de clássicos." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mod shops e lojas: Rideout Customs, Sara’s, Electric Fang, Stock 305, e outras da página oficial." })
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mt-3 rounded-card border border-line bg-panel p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm tracking-widest text-gold uppercase",
									children: "Vintage Vice City Pack"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-3xl text-sm leading-relaxed text-mist",
									children: "Qualquer compra feita antes de 20 de novembro. Inclui o Vapid Stanier Sedan ’55 com garagem, roupas, penteados e uma estampa exclusiva de arma. Reserva digital ainda leva um mês de GTA+."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.rockstargames.com/VI/",
									className: "mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-coral px-4 text-sm font-medium text-night",
									children: ["Página oficial", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pb-20 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "Até aqui",
							title: "Como a data chegou em 19 de novembro."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-6 border-l border-line",
							children: TIMELINE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative pb-6 pl-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 -left-1.5 size-3 rounded-full bg-coral" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm tracking-widest text-gold uppercase",
										children: item.when
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl text-cream uppercase",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 max-w-2xl text-sm leading-relaxed text-mist",
										children: item.body
									})
								]
							}, item.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-mist",
							children: [
								"Trailer 1 em 4 de dezembro de 2023. A data de 19 de novembro de 2026 foi anunciada pela Rockstar em 6 de novembro de 2025. Primeiro trailer usado só como marco do caminho: ",
								formatWhen(FIRST_TRAILER, TZ),
								"."
							]
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line px-4 py-8 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/gta/rockstar-wordmark.svg",
							alt: "",
							className: "h-8 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm leading-relaxed text-mist",
							children: "Contagem de fã. Não é site da Rockstar nem da Take-Two. Imagens: kit oficial de Grand Theft Auto VI. Logo R*: marca da Rockstar Games."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-mist",
						children: [
							"Fuso fixo: ",
							TZ,
							". Sem horário de verão."
						]
					})]
				})
			}),
			open !== null && shots[open] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-night/95 p-4",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": shots[open].title,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0",
					"aria-label": "Fechar imagem",
					onClick: () => setOpen(null)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "relative z-10 w-full max-w-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: shots[open].src,
						alt: shots[open].alt,
						className: "max-h-[80svh] w-full rounded-card object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-3 flex items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl text-cream uppercase",
							children: shots[open].title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-mist",
							children: shots[open].caption
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(null),
							className: "inline-flex h-11 items-center rounded-full border border-line px-4 text-sm",
							children: "Fechar"
						})]
					})]
				})]
			}) : null
		]
	});
}
function SectionHead({ kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm tracking-widest text-gold uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-4xl leading-none tracking-tight text-cream uppercase sm:text-5xl",
				children: title
			}),
			body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-mist",
				children: body
			}) : null
		]
	});
}
function Fact({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-line bg-panel px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-wide text-mist uppercase",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-lg leading-tight text-cream uppercase",
			children: v
		})]
	});
}
function Portrait({ src, alt, name, role }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-hidden rounded-card border border-line bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			loading: "lazy",
			className: "aspect-video w-full object-cover object-top"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "px-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-2xl text-cream uppercase",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-mist",
				children: role
			})]
		})]
	});
}
function DateCard({ label, when, target, now, note, featured, doneLabel }) {
	const p = now ? partsBetween(now, target) : null;
	const status = !p ? "—" : p.done ? doneLabel : `${p.days}d ${pad(p.hours)}h ${pad(p.minutes)}m`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `rounded-card border p-4 ${featured ? "border-coral bg-ink" : "border-line bg-panel"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm tracking-widest text-gold uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-3xl leading-none text-cream tabular-nums",
				children: status
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-cream",
				children: when
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-mist",
				children: note
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VicePage, {});
}
//#endregion
export { Home as component };
