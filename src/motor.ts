

export const numeroAleatorio = (): number => Math.floor(Math.random() * 10) + 1;

export const calcularCarta = (numero: number):number =>{
    if (numero > 7) {
        return numero +2; 
    }
    return numero;
}
export const dameCarta = (): number => calcularCarta(numeroAleatorio());


export const asignarEvento = (id: string, evento: string, handler: EventListener): void => {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.addEventListener(evento, handler);
    } else {
        console.error(`No se encontró el elemento con id ${id}`);
    }
};


export const dameUrlCarta = (carta: number): string => {
    const cartas: { [key: number]: string } = {
        0: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
        1: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
        2: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
        3: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
        4: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
        5: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
        6: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
        7: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
        10: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
        11: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
        12: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
    };
    return cartas[carta] || cartas[0];
};


export const dameMensaje=(puntuacion:number):string=> {
    let mensaje: string = "";
        if (puntuacion < 4) {
            mensaje = "Has sido muy conservador";
        } else if (puntuacion >=4 && puntuacion < 6.5) {
            mensaje = "Te ha entrado el canguelo eh?";
        } else if (puntuacion >= 6.5 && puntuacion < 7) {
            mensaje = "Casi casi...";
        } else if(puntuacion===7){
            mensaje="no hombre... lo tenias ya hecho y te has acobardado."
        } else if (puntuacion === 7.5) {
            mensaje = "¡Lo has clavado! ¡Enhorabuena!";
        } else {
            mensaje = ` Oh.. te has pasado de puntos, perdiste. Esta es tu puntuación final: ${puntuacion}`;
        }
        return mensaje;
    }