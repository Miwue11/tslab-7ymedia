import {partida} from "./model";


export const puntos =()=> {
    const puntos =
    document.getElementById("puntuacion");
    if (puntos instanceof HTMLDivElement&&puntos!==null) {
    puntos.innerText = `Puntuación: ${partida.puntuacion}`.toString();
    } else{
    console.error("no se encuentra puntuacion")
    }
}


const ponerBotonPedir=()=> {
    const ponerBotonPedir =
    document.getElementById("btnPedir");
        if (ponerBotonPedir instanceof HTMLButtonElement&&ponerBotonPedir!==null) {
            ponerBotonPedir.disabled = false;
        }else{
        console.error("no se encuentra botonPedir")
        }
}

const ponerBotonPlantar=()=> {
    const ponerBotonPlantar =
    document.getElementById("btnPlantar");
        if (ponerBotonPlantar instanceof HTMLButtonElement&&ponerBotonPlantar!==null) {
            ponerBotonPlantar.disabled = false;
        }else{
        console.error("no se encuentra botonPlantar")
        }
}

const quitarBotonPedir=()=> {
    const quitarBotonPedir =
    document.getElementById("btnPedir");
        if (quitarBotonPedir instanceof HTMLButtonElement&&quitarBotonPedir!==null) {
            quitarBotonPedir.disabled = true;
        }else{
        console.error("no se encuentra botonPedir")
        }
}

const quitarBotonPlantar=()=> {
    const quitarBotonPlantar =
    document.getElementById("btnPlantar");
        if (quitarBotonPlantar instanceof HTMLButtonElement&&quitarBotonPlantar!==null) {
            quitarBotonPlantar.disabled = true;
        }else{
        console.error("no se encuentra botonPlantar")
        }
}



export const resultadoOpcional=()=>{ 
    const resultado= document.getElementById("resultadoOpcional");
        if (resultado instanceof HTMLDivElement&&resultado!==null) {
        resultado.innerText = "";
        }else{
            console.error("no se encuentra resultadoOpcional")
        }
}

export const mensaje =()=> {
    const mensaje= document.getElementById("mensaje");
        if (mensaje instanceof HTMLDivElement&&mensaje!==null) {
        mensaje.innerText = "";
        }else{
            console.error("no se encuentra mensaje")
        }
}

export const ocultarQueHubieraPasado=()=> {
    const btn= document.getElementById("btnVerQueHubieraPasado");
        if (btn instanceof HTMLButtonElement&&btn!==null) {
            btn.style.display = "none";
        }else{
            console.error("no se encuentra btnVerQueHubieraPasado")
        }
}

export const mensajeDiv =(mensaje:string):void=> {
    const msj= document.getElementById("mensaje");
        if (msj instanceof HTMLDivElement&&msj!==null) {
            msj.innerText = mensaje;
        }else{
            console.error("no se encuentra mensajeDiv")
        }
}

export const ocultarBtnNueva=()=> {
    const btn= document.getElementById("btnNueva");
        if (btn instanceof HTMLButtonElement&&btn!==null) {
            btn.style.display = "none";
        }else{
            console.error("no se encuentra btnNueva")
        }
}

export const queHubieraPasado=()=> {
    const btn= document.getElementById("btnVerQueHubieraPasado");
        if (btn instanceof HTMLButtonElement&&btn!==null) {
            btn.style.display = "inline-block";
        }else{
            console.error("no se encuentra btnVerQueHubieraPasado")
        }
}

export const btnNueva=()=> {
    const btn= document.getElementById("btnNueva");
        if (btn instanceof HTMLButtonElement&&btn!==null) {
            btn.style.display = "inline-block";
        }else{
            console.error("no se encuentra btnNueva")
        }
}

export const opcional =()=>{ 
    const opcion= document.getElementById("opcional");
        if (opcion instanceof HTMLDivElement&&opcion!==null) {
            opcion.style.display = "block";
        }else{
            console.error("no se encuentra opcional")
        }
}

export const mostrarResultadoOpcional = (puntuacion: number, cartas: number[]): void => {
    const resultadoOpcional = document.getElementById("resultadoOpcional");
        if (resultadoOpcional instanceof HTMLDivElement&&resultadoOpcional!==null) {
        let mensaje = `Si hubieras seguido, habrías obtenido: ${puntuacion.toFixed(1)} puntos con las siguientes cartas: ${cartas.join(", ")}`;
        if (puntuacion === 7.5) {
            mensaje += ". ¡Que pena!, habrías clavado la puntuación.";
        }
        resultadoOpcional.innerText = mensaje;
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

    export const deshabilitarBotones=():void=> {
        quitarBotonPedir();
        quitarBotonPlantar();
    }
    
    export const habilitarBotones=():void=> {
        ponerBotonPedir();
        ponerBotonPlantar();  
    }