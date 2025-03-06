import { partida } from "./model";
import {
  dameUrlCarta,
  dameCarta,
  dameMensaje,
  obtenerMensajeResultadoOpcional,
  incrementar,
} from "./motor";

export const puntos = () => {
  const puntos = document.getElementById("puntuacion");
  if (puntos instanceof HTMLDivElement && puntos !== null) {
    puntos.innerText = `Puntuación: ${partida.puntuacion}`.toString();
  } else {
    console.error("no se encuentra puntuacion");
  }
};

const ponerBotonPedir = () => {
  const ponerBotonPedir = document.getElementById("btnPedir");
  if (
    ponerBotonPedir instanceof HTMLButtonElement &&
    ponerBotonPedir !== null
  ) {
    ponerBotonPedir.disabled = false;
  } else {
    console.error("no se encuentra botonPedir");
  }
};

const ponerBotonPlantar = () => {
  const ponerBotonPlantar = document.getElementById("btnPlantar");
  if (
    ponerBotonPlantar instanceof HTMLButtonElement &&
    ponerBotonPlantar !== null
  ) {
    ponerBotonPlantar.disabled = false;
  } else {
    console.error("no se encuentra botonPlantar");
  }
};

const quitarBotonPedir = () => {
  const quitarBotonPedir = document.getElementById("btnPedir");
  if (
    quitarBotonPedir instanceof HTMLButtonElement &&
    quitarBotonPedir !== null
  ) {
    quitarBotonPedir.disabled = true;
  } else {
    console.error("no se encuentra botonPedir");
  }
};

const quitarBotonPlantar = () => {
  const quitarBotonPlantar = document.getElementById("btnPlantar");
  if (
    quitarBotonPlantar instanceof HTMLButtonElement &&
    quitarBotonPlantar !== null
  ) {
    quitarBotonPlantar.disabled = true;
  } else {
    console.error("no se encuentra botonPlantar");
  }
};

export const resultadoOpcional = () => {
  const resultado = document.getElementById("resultadoOpcional");
  if (resultado instanceof HTMLDivElement && resultado !== null) {
    resultado.innerText = "";
  } else {
    console.error("no se encuentra resultadoOpcional");
  }
};

export const mensaje = () => {
  const mensaje = document.getElementById("mensaje");
  if (mensaje instanceof HTMLDivElement && mensaje !== null) {
    mensaje.innerText = "";
  } else {
    console.error("no se encuentra mensaje");
  }
};

export const ocultarQueHubieraPasado = () => {
  const btn = document.getElementById("btnVerQueHubieraPasado");
  if (btn instanceof HTMLButtonElement && btn !== null) {
    btn.style.display = "none";
  } else {
    console.error("no se encuentra btnVerQueHubieraPasado");
  }
};

export const mensajeDiv = (mensaje: string): void => {
  const msj = document.getElementById("mensaje");
  if (msj instanceof HTMLDivElement && msj !== null) {
    msj.innerText = mensaje;
  } else {
    console.error("no se encuentra mensajeDiv");
  }
};

export const ocultarBtnNueva = () => {
  const btn = document.getElementById("btnNueva");
  if (btn instanceof HTMLButtonElement && btn !== null) {
    btn.style.display = "none";
  } else {
    console.error("no se encuentra btnNueva");
  }
};

export const queHubieraPasado = () => {
  const btn = document.getElementById("btnVerQueHubieraPasado");
  if (btn instanceof HTMLButtonElement && btn !== null) {
    btn.style.display = "inline-block";
  } else {
    console.error("no se encuentra btnVerQueHubieraPasado");
  }
};

export const btnNueva = () => {
  const btn = document.getElementById("btnNueva");
  if (btn instanceof HTMLButtonElement && btn !== null) {
    btn.style.display = "inline-block";
  } else {
    console.error("no se encuentra btnNueva");
  }
};

export const opcional = () => {
  const opcion = document.getElementById("opcional");
  if (opcion instanceof HTMLDivElement && opcion !== null) {
    opcion.style.display = "block";
  } else {
    console.error("no se encuentra opcional");
  }
};

export const mostrarResultadoOpcional = (
  puntuacion: number,
  cartas: number[]
): void => {
  const resultadoOpcional = document.getElementById("resultadoOpcional");
  if (
    resultadoOpcional instanceof HTMLDivElement &&
    resultadoOpcional !== null
  ) {
    resultadoOpcional.innerText = obtenerMensajeResultadoOpcional(
      puntuacion,
      cartas
    );
  } else {
    console.error("No se encuentra el elemento resultadoOpcional");
  }
};

export const mostrarCarta = (carta: number): void => {
  const urlCarta = dameUrlCarta(carta);
  const img = document.getElementById("imagen");

  if (img instanceof HTMLImageElement && img !== null) {
    img.src = urlCarta;
  } else {
    console.error("No se encuentra el elemento de imagen");
  }
};

export const deshabilitarBotones = (): void => {
  quitarBotonPedir();
  quitarBotonPlantar();
};

export const habilitarBotones = (): void => {
  ponerBotonPedir();
  ponerBotonPlantar();
};

const seteodePartida = () => {
  partida.puntuacion = 0;
  partida.gameOver = false;
};

export const nuevaPartida = (): void => {
  seteodePartida();
  puntos();
  habilitarBotones();
  mostrarCarta(0);
  resultadoOpcional();
  mensaje();
  ocultarBtnNueva();
  opcional();
  ocultarQueHubieraPasado();
};

export const pedirCarta = (): void => {
  if (partida.gameOver) return;
  const carta = dameCarta();
  mostrarCarta(carta);
  actualizarPuntos(carta);
  puntos();
};

const mostrarMensaje = () => dameMensaje(partida.puntuacion);

export const perder = () => {
  ocultarQueHubieraPasado();
  deshabilitarBotones();
  puntos();
  mostrarMensaje();
  mensajeDiv(mostrarMensaje());
  btnNueva();
  opcional();
  dameUrlCarta(0);
};

export const ganar = () => {
  ocultarQueHubieraPasado();
  deshabilitarBotones();
  puntos();
  mostrarMensaje();
  mensajeDiv(mostrarMensaje());
  btnNueva();
  opcional();
  dameUrlCarta(0);
};

export const ganarOrPerder = (): void => {
  if (partida.puntuacion > 7.5) {
    perder();
  } else if (partida.puntuacion === 7.5) {
    ganar();
  }
};

export const actualizarPuntos = (
  carta: number,
  simulada = false
): number | void => {
  const incremento = incrementar(carta);
  if (simulada) {
    return partida.puntuacion + incremento;
  }
  partida.puntuacion += incremento;
  ganarOrPerder();
};

export const simularJuego = (
  puntuacionInicial: number
): {
  puntuacionFinal: number;
  cartasSimuladas: number[];
} => {
  let puntuacionSimulada = puntuacionInicial;
  let cartasSimuladas: number[] = [];

  while (puntuacionSimulada < 7.5) {
    const carta = dameCarta();
    cartasSimuladas.push(carta);
    puntuacionSimulada = actualizarPuntos(carta, true) as number;
    if (puntuacionSimulada > 7.5) break;
  }
  return { puntuacionFinal: puntuacionSimulada, cartasSimuladas };
};

export const verQueHubieraPasado = (): void => {
  const { puntuacionFinal, cartasSimuladas } = simularJuego(partida.puntuacion);
  mostrarResultadoOpcional(puntuacionFinal, cartasSimuladas);
};

export const plantar = (): void => {
  if (partida.gameOver) return;
  deshabilitarBotones();
  partida.gameOver = true;
  puntos();
  mostrarMensaje();
  mensajeDiv(mostrarMensaje());
  btnNueva();
  opcional();
  queHubieraPasado();
};
