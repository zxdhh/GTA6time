export const TZ = "America/Sao_Paulo";

export const LAUNCH = new Date("2026-11-19T00:00:00-03:00");
export const PRELOAD = new Date("2026-11-12T00:00:00-03:00");
export const BONUS_END = new Date("2026-11-20T00:00:00-03:00");
export const FIRST_TRAILER = new Date("2023-12-04T00:00:00-03:00");

const DAY = 86_400_000;
const HOUR = 3_600_000;
const MIN = 60_000;

export type Parts = {
  ms: number;
  done: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function partsBetween(from: Date, to: Date): Parts {
  const ms = to.getTime() - from.getTime();
  const abs = Math.abs(ms);
  const total = Math.floor(abs / 1000);
  return {
    ms,
    done: ms <= 0,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export function pad(n: number) {
  return String(n).padStart(2, "0");
}

export type Alert = {
  id: string;
  kicker: string;
  title: string;
  detail: string;
  hot: boolean;
};

export function liveAlert(now: Date): Alert {
  const r = partsBetween(now, LAUNCH);
  if (r.done) {
    return {
      id: "live",
      kicker: "Lançou",
      title: "Vice City está no ar.",
      detail:
        "Passou da meia-noite de 19 de novembro em Brasília. Se a sua loja libera no fuso local, este é o instante do Brasil.",
      hot: true,
    };
  }

  const { days, hours, minutes } = r;

  if (days > 14) {
    return {
      id: `d${days}`,
      kicker: `Faltam ${days} dias`,
      title: "Ainda não é semana. Já é reta final.",
      detail:
        "Menos de três semanas para o lançamento. O próximo aviso grande dispara quando bater duas semanas.",
      hot: false,
    };
  }
  if (days === 14) {
    return {
      id: "14d",
      kicker: "Faltam duas semanas",
      title: "Duas semanas. Marca isso.",
      detail: "Quinzena final de Leonida. O aviso de uma semana vem em seguida.",
      hot: false,
    };
  }
  if (days > 7) {
    return {
      id: `d${days}`,
      kicker: `Faltam ${days} dias`,
      title: "Menos de duas semanas.",
      detail: "Quando o relógio cair para 7 dias, o aviso vira: falta uma semana.",
      hot: false,
    };
  }
  if (days === 7) {
    return {
      id: "7d",
      kicker: "Falta uma semana",
      title: "Uma semana. E a pré-carga abre neste dia.",
      detail:
        "Sete dias até a meia-noite de Brasília. A pré-carga digital da Rockstar começa em 12 de novembro — o mesmo dia em que a contagem entra na última semana.",
      hot: true,
    };
  }
  if (days > 3) {
    return {
      id: `d${days}`,
      kicker: `Faltam ${days} dias`,
      title: "Última semana.",
      detail: "A pré-carga, se você comprou digital, já deve estar disponível desde o dia 12.",
      hot: false,
    };
  }
  if (days === 3) {
    return {
      id: "3d",
      kicker: "Faltam três dias",
      title: "Três dias. O fim de semana de Vice City.",
      detail: "Quinta-feira, 19, meia-noite. Não é mais mês que vem.",
      hot: true,
    };
  }
  if (days === 2) {
    return {
      id: "2d",
      kicker: "Faltam dois dias",
      title: "Dois dias.",
      detail: "Depois de amanhã, no horário de Brasília.",
      hot: true,
    };
  }
  if (days === 1) {
    return {
      id: "1d",
      kicker: "Falta um dia",
      title: "Falta um dia.",
      detail: "Amanhã, 00:00, horário de Brasília. O Vintage Vice City Pack ainda entra em pedido feito antes do dia 20.",
      hot: true,
    };
  }
  if (hours > 12) {
    return {
      id: `h${hours}`,
      kicker: `Faltam ${hours} horas`,
      title: "O contador de dias zerou.",
      detail: "Menos de 24 horas para a meia-noite de Brasília.",
      hot: true,
    };
  }
  if (hours === 12) {
    return {
      id: "12h",
      kicker: "Faltam 12 horas",
      title: "Meio dia de distância.",
      detail: "Doze horas para a meia-noite de Brasília.",
      hot: true,
    };
  }
  if (hours > 1) {
    return {
      id: `h${hours}`,
      kicker: `Faltam ${hours} horas`,
      title: "Últimas horas.",
      detail: "Quando cair para 60 minutos, o aviso troca para: falta uma hora.",
      hot: true,
    };
  }
  if (hours === 1) {
    return {
      id: "1h",
      kicker: "Falta uma hora",
      title: "Falta uma hora.",
      detail: "Sessenta minutos, no relógio de Brasília. Deixa o console acordado.",
      hot: true,
    };
  }
  if (minutes >= 10) {
    return {
      id: "mins",
      kicker: `Faltam ${minutes} minutos`,
      title: "Menos de uma hora.",
      detail: "A contagem já está em minutos.",
      hot: true,
    };
  }
  if (minutes >= 2) {
    return {
      id: "10m",
      kicker: `Faltam ${minutes} minutos`,
      title: "Faltam minutos.",
      detail: "Menos de dez. O próximo aviso é o do último minuto.",
      hot: true,
    };
  }
  if (minutes === 1) {
    return {
      id: "1m",
      kicker: "Falta um minuto",
      title: "Falta um minuto.",
      detail: "Sessenta segundos para a meia-noite de Brasília.",
      hot: true,
    };
  }
  return {
    id: "sec",
    kicker: `Faltam ${r.seconds} segundos`,
    title: "Agora.",
    detail: "A meia-noite de Brasília está em segundos.",
    hot: true,
  };
}

export const AVISOS: { id: string; ms: number; label: string; shout: string }[] = [
  { id: "14d", ms: 14 * DAY, label: "2 semanas", shout: "Faltam duas semanas" },
  { id: "7d", ms: 7 * DAY, label: "1 semana", shout: "Falta uma semana" },
  { id: "3d", ms: 3 * DAY, label: "3 dias", shout: "Faltam três dias" },
  { id: "1d", ms: DAY, label: "1 dia", shout: "Falta um dia" },
  { id: "12h", ms: 12 * HOUR, label: "12 horas", shout: "Faltam 12 horas" },
  { id: "1h", ms: HOUR, label: "1 hora", shout: "Falta uma hora" },
  { id: "10m", ms: 10 * MIN, label: "10 min", shout: "Faltam 10 minutos" },
  { id: "1m", ms: MIN, label: "1 min", shout: "Falta um minuto" },
  { id: "go", ms: 0, label: "Lançamento", shout: "Lançou" },
];

export function nextAviso(msLeft: number) {
  return AVISOS.find((a) => msLeft > a.ms) ?? null;
}

export function progressToLaunch(now: Date) {
  const a = FIRST_TRAILER.getTime();
  const b = LAUNCH.getTime();
  return Math.min(1, Math.max(0, (now.getTime() - a) / (b - a)));
}

export function formatWhen(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone,
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatClock(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export const ZONES: { city: string; zone: string }[] = [
  { city: "Brasília", zone: "America/Sao_Paulo" },
  { city: "Nova York", zone: "America/New_York" },
  { city: "Los Angeles", zone: "America/Los_Angeles" },
  { city: "Londres", zone: "Europe/London" },
  { city: "Tóquio", zone: "Asia/Tokyo" },
];

export type Shot = {
  src: string;
  alt: string;
  title: string;
  kind: "arte" | "jogo" | "lugar";
  caption: string;
};

export const SHOTS: Shot[] = [
  {
    src: "/gta/beach.jpg",
    alt: "Arte oficial de Lucia Caminos e Jason Duval na praia de Vice City ao pôr do sol",
    title: "Jason e Lucia",
    kind: "arte",
    caption: "Arte oficial. Lucia Caminos e Jason Duval.",
  },
  {
    src: "/gta/duo.jpg",
    alt: "Arte oficial de Jason e Lucia sentados no capô de um carro em Vice City",
    title: "No capô",
    kind: "arte",
    caption: "Arte oficial de lançamento. Placa de Leonida.",
  },
  {
    src: "/gta/lock.jpg",
    alt: "Arte oficial de Jason em pé e Lucia sentada num carro vermelho ao pôr do sol",
    title: "Pôr do sol",
    kind: "arte",
    caption: "Arte oficial. O pôr do sol de Leonida.",
  },
  {
    src: "/gta/robbery.jpg",
    alt: "Arte oficial de Jason e Lucia num assalto",
    title: "O golpe",
    kind: "arte",
    caption: "Arte oficial — o golpe que desanda.",
  },
  {
    src: "/gta/hero.jpg",
    alt: "Capa oficial de Grand Theft Auto VI com o logo VI e personagens",
    title: "Capa oficial",
    kind: "arte",
    caption: "Capa oficial de Grand Theft Auto VI.",
  },
  {
    src: "/gta/extended.jpg",
    alt: "Pôster oficial An Extended Look de GTA VI",
    title: "Extended Look",
    kind: "arte",
    caption: "Pôster oficial do Extended Look.",
  },
  {
    src: "/gta/album.jpg",
    alt: "Capa oficial de The Album, trilha de GTA VI",
    title: "The Album",
    kind: "arte",
    caption: "Capa oficial de The Album.",
  },
  {
    src: "/gta/shot-jason.jpg",
    alt: "Screenshot oficial de Jason Duval atrás de uma grade, com luz de viatura",
    title: "Jason Duval",
    kind: "jogo",
    caption: "Screenshot oficial. Jason Duval.",
  },
  {
    src: "/gta/shot-lucia.jpg",
    alt: "Screenshot oficial de Lucia Caminos ao lado de um carro, em frente a uma casa de câmbio",
    title: "Lucia Caminos",
    kind: "jogo",
    caption: "Screenshot oficial. Lucia Caminos.",
  },
  {
    src: "/gta/shot-duo.jpg",
    alt: "Screenshot oficial de Jason e Lucia juntos",
    title: "Os dois",
    kind: "jogo",
    caption: "Screenshot oficial. Jason e Lucia.",
  },
  {
    src: "/gta/shot-boobie.jpg",
    alt: "Screenshot oficial de Boobie Ike",
    title: "Boobie Ike",
    kind: "jogo",
    caption: "Screenshot oficial. Boobie Ike.",
  },
  {
    src: "/gta/shot-vice.jpg",
    alt: "Screenshot oficial do skyline de Vice City, com o Hotel Valetta e uma quadra",
    title: "Vice City",
    kind: "jogo",
    caption: "Screenshot oficial. Vice City, Hotel Valetta.",
  },
  {
    src: "/gta/shot-vice-2.jpg",
    alt: "Screenshot oficial de Vice City",
    title: "Outra Vice City",
    kind: "jogo",
    caption: "Screenshot oficial. Vice City.",
  },
  {
    src: "/gta/shot-keys.jpg",
    alt: "Screenshot oficial de Leonida Keys",
    title: "Leonida Keys",
    kind: "jogo",
    caption: "Screenshot oficial. Leonida Keys.",
  },
  {
    src: "/gta/shot-port.jpg",
    alt: "Screenshot oficial de Port Gellhorn",
    title: "Port Gellhorn",
    kind: "jogo",
    caption: "Screenshot oficial. Port Gellhorn.",
  },
  {
    src: "/gta/shot-grass.jpg",
    alt: "Screenshot oficial de Grassrivers",
    title: "Grassrivers",
    kind: "jogo",
    caption: "Screenshot oficial. Grassrivers.",
  },
  {
    src: "/gta/vice.jpg",
    alt: "Cartão postal oficial Visit Leonida de Vice City",
    title: "Vice City",
    kind: "lugar",
    caption: "Cartão oficial do kit da Rockstar. Vice City.",
  },
  {
    src: "/gta/keys.jpg",
    alt: "Cartão postal oficial de Leonida Keys",
    title: "Leonida Keys",
    kind: "lugar",
    caption: "Cartão oficial. Leonida Keys.",
  },
  {
    src: "/gta/grass.jpg",
    alt: "Cartão postal oficial de Grassrivers",
    title: "Grassrivers",
    kind: "lugar",
    caption: "Cartão oficial. Grassrivers.",
  },
  {
    src: "/gta/port.jpg",
    alt: "Cartão postal oficial de Port Gellhorn",
    title: "Port Gellhorn",
    kind: "lugar",
    caption: "Cartão oficial. Port Gellhorn.",
  },
  {
    src: "/gta/kalaga.jpg",
    alt: "Cartão postal oficial de Mount Kalaga National Park",
    title: "Mount Kalaga",
    kind: "lugar",
    caption: "Cartão oficial. Mount Kalaga National Park.",
  },
  {
    src: "/gta/ambrosia.jpg",
    alt: "Cartão postal oficial de Ambrosia",
    title: "Ambrosia",
    kind: "lugar",
    caption: "Cartão oficial. Ambrosia.",
  },
];

export const CAST = [
  "Jason Duval",
  "Lucia Caminos",
  "Boobie Ike",
  "Brian Heder",
  "Cal Hampton",
  "Dre'Quan Priest",
  "Raul Bautista",
  "Real Dimez",
];

export const TIMELINE: { when: string; title: string; body: string }[] = [
  {
    when: "4 dez 2023",
    title: "Trailer 1",
    body: "Primeiro trailer. Vice City de volta, com Lucia e Jason.",
  },
  {
    when: "2 mai 2025",
    title: "Primeiro adiamento",
    body: "Sai do outono de 2025 e vai para 26 de maio de 2026.",
  },
  {
    when: "6 nov 2025",
    title: "Data que vale agora",
    body: "Rockstar tira de 26 de maio de 2026 e crava 19 de novembro de 2026.",
  },
  {
    when: "27 ago 2026",
    title: "Extended Look",
    body: "Novo olhar no jogo. Mais Leonida, mais os dois.",
  },
  {
    when: "15 out 2026",
    title: "Launch Trailer",
    body: "Trailer de lançamento. A data segue 19 de novembro.",
  },
  {
    when: "12 nov 2026",
    title: "Pré-carga e caixa",
    body: "Pré-carga digital para quem reservou. Caixa à venda — só o código, sem disco.",
  },
  {
    when: "19 nov 2026",
    title: "Lançamento",
    body: "00:00 no horário de Brasília. PS5 e Xbox Series X|S.",
  },
  {
    when: "Antes de 20 nov",
    title: "Vintage Vice City Pack",
    body: "Pedido feito antes do dia 20 leva o pack sem custo extra. Pré-venda digital ainda inclui um mês de GTA+.",
  },
];
