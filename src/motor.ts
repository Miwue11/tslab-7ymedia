import { puntos,
    resultadoOpcional,
    ocultarQueHubieraPasado,
    mensajeDiv,
    btnNueva,
    opcional,
    ocultarBtnNueva,
    queHubieraPasado,
    mostrarResultadoOpcional,
    dameUrlCarta,
    dameMensaje,
    deshabilitarBotones,
    habilitarBotones,
    mostrarCarta,
} from "./UI";

import {partida} from "./model";

export const numeroAleatorio = (): number => Math.floor(Math.random() * 10) + 1;

export const calcularCarta = (numero: number):number =>{
    if (numero > 7) {
        return numero +2; 
    }
    return numero;
}
export const dameCarta = (): number => calcularCarta(numeroAleatorio());

export const nuevaPartida = (): void => {
    partida.puntuacion = 0;
    partida.gameOver = false;
    puntos();
    habilitarBotones();
    mostrarCarta(0);
    resultadoOpcional();
    mensajeDiv("");
    ocultarBtnNueva();
    opcional();
    ocultarQueHubieraPasado();
};


export const pedirCarta=():void=> {
    if (partida.gameOver) return;
    const carta = dameCarta();
    mostrarCarta(carta);
    actualizarPuntos(carta);
    puntos();
}

export const perder=()=>{
    ocultarQueHubieraPasado();
    deshabilitarBotones();
    puntos();
    const mensaje = dameMensaje(partida.puntuacion);
    mensajeDiv(mensaje);
    btnNueva();
    opcional();
    dameUrlCarta(0);
}

export const ganar=()=>{
    ocultarQueHubieraPasado();
    deshabilitarBotones();
    puntos();
    const mensaje = dameMensaje(partida.puntuacion);
    mensajeDiv(mensaje);
    btnNueva();
    opcional();
    dameUrlCarta(0);
}


export const ganarOrPerder=():void=> {
    if (partida.puntuacion > 7.5) {
        perder();
    } else if (partida.puntuacion === 7.5) {
        ganar();
    }
}


export const plantar=():void => {
    if (partida.gameOver) return;
    deshabilitarBotones();
    partida.gameOver = true;
    puntos();
    const mensaje:string = dameMensaje(partida.puntuacion);
    mensajeDiv(mensaje);   
    btnNueva();
    opcional();
    queHubieraPasado();
}

export const actualizarPuntos = (carta: number, simulada = false): number | void => {
    const incremento = (carta === 10 || carta === 11 || carta === 12) ? 0.5 : carta;
    if (simulada) {
        return partida.puntuacion + incremento;
    }
    partida.puntuacion += incremento;
    ganarOrPerder();
};



export const verQueHubieraPasado = (): void => {
    const { puntuacionFinal, cartasSimuladas } = simularJuego(partida.puntuacion);
    mostrarResultadoOpcional(puntuacionFinal, cartasSimuladas);
};

export const simularJuego = (puntuacionInicial: number): { 
    puntuacionFinal: number, 
    cartasSimuladas: number[] 
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



export const asignarEvento = (id: string, evento: string, handler: EventListener): void => {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.addEventListener(evento, handler);
    } else {
        console.error(`No se encontró el elemento con id ${id}`);
    }
};

export const inicializarEventos = (): void => {
    asignarEvento("btnNueva", "click", nuevaPartida);
    asignarEvento("btnPedir", "click", pedirCarta);
    asignarEvento("btnPlantar", "click", plantar);
    asignarEvento("btnVerQueHubieraPasado", "click", verQueHubieraPasado);
};

