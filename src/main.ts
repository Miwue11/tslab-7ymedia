
let puntuacion: number = 0;
let gameOver: boolean = false;

const muestraPuntuacion=():void=> {
    const scoreDiv = document.getElementById("puntuacion");
    if (scoreDiv) {
    scoreDiv.innerText = `Puntuación: ${puntuacion}`;
    } else{
    console.error("no se encuentra puntuacion")}
}


const dameCarta=():number=> {
    const randomNum: number = Math.floor(Math.random() * 10) + 1;
    if (randomNum > 7) {
    return randomNum + 2;
    }
    return randomNum;
}

const  mostrarCarta=(carta: number):void=> {
    let url: string;
    switch (carta) {
    case 1:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        break;
    case 2:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        break;
    case 3:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        break;
    case 4:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        break;
    case 5:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        break;
    case 6:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        break;
    case 7:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        break;
    case 10:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        break;
    case 11:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        break;
    case 12:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        break;
    default:
        url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        break;
    }
    const img = document.getElementById("imagen");
    if (img instanceof HTMLImageElement) {
    img.src = url;
    }else{
        console.error("no se encuentra url")
    };

}

const deshabilitarBotones=():void=> {
    const botonPedir = document.getElementById("btnPedir");
    if (botonPedir instanceof HTMLButtonElement) {
    botonPedir.disabled = true;
    }else{
    console.error("no se encuentra botonPedir")
    }
    const botonPlantar = document.getElementById("btnPlantar");
    if (botonPlantar instanceof HTMLButtonElement) {
    botonPlantar.disabled = true;
    }else{
    console.error("no se encuentra botonPlantar")
    }
}

const habilitarBotones=():void=> {
    const botonPedir = document.getElementById("btnPedir");
    if (botonPedir instanceof HTMLButtonElement) {
    botonPedir.disabled = false;
    }else{
    console.error("no se encuentra botonPedir")
    }
    const botonPlantar = document.getElementById("btnPlantar");
    if (botonPlantar instanceof HTMLButtonElement) {
    botonPlantar.disabled = false;
    }else{
    console.error("no se encuentra botonPlantar")
    }
}

const nuevaPartida=():void=> {
    puntuacion = 0;
    gameOver = false;
    muestraPuntuacion();
    habilitarBotones();
    const img = document.getElementById("imagen") as HTMLImageElement;
    if (img) {
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }else{
    console.error("no se encuentra imagen")
    }
    const resultadoOpcional = document.getElementById("resultadoOpcional");
    if (resultadoOpcional instanceof HTMLDivElement) {
    resultadoOpcional.innerText = "";
    }else{
        console.error("no se encuentra resultadoOpcional")
    }
    const mensaje = document.getElementById("mensaje");
    if (mensaje instanceof HTMLDivElement) {
    mensaje.innerText = "";
    }else{
        console.error("no se encuentra mensaje")
    }
    const btnNueva = document.getElementById("btnNueva");
    if (btnNueva instanceof HTMLButtonElement) {
    btnNueva.style.display = "none"}
    else{
        console.error("no se encuentra btnNueva")
    }
    const opcional = document.getElementById("opcional");
    if (opcional instanceof HTMLDivElement) {
    opcional.style.display = "none";
    }else{
        console.error("no se encuentra opcional")
    }
}

const pedirCarta=():void=> {
    if (gameOver) return;
    const carta = dameCarta();
    mostrarCarta(carta);

    if (carta === 10 || carta === 11 || carta === 12) {
    puntuacion += 0.5;
    } else {
    puntuacion += carta;
    }
    muestraPuntuacion();

    if (puntuacion > 7.5) {
    (document.getElementById("mensaje") as HTMLDivElement).innerText = "Game Over";
    gameOver = true;
    deshabilitarBotones();
    (document.getElementById("btnNueva") as HTMLButtonElement).style.display = "inline-block";
    }
    if (puntuacion === 7.5) {
    (document.getElementById("mensaje") as HTMLDivElement).innerText = "¡Enhorabuena! ¡Has conseguido 7.5!";
    gameOver = true;
    deshabilitarBotones();
    (document.getElementById("btnNueva") as HTMLButtonElement).style.display = "inline-block";
    }
}


const plantar=():void => {
    if (gameOver) return;
    deshabilitarBotones();
    gameOver = true;
    let mensaje: string = "";
    if (puntuacion < 4) {
        mensaje = "Has sido muy conservador";
    } else if (puntuacion >=4 && puntuacion < 6.5) {
        mensaje = "Te ha entrado el canguelo eh?";
    } else if (puntuacion >= 6.5 && puntuacion < 7) {
        mensaje = "Casi casi...";
    } else if(puntuacion===7){//he reacondicionado los condicionales para que se ajusten a los valores de puntuación y asi no se queden numeros sin mensaje, ademas he añadido uno para cuando te quedas rozando el 7.5
        mensaje="no hombre... lo tenias ya hecho y te has acobardado."
    } else if (puntuacion === 7.5) {
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    } else {
        mensaje = `Puntuación final: ${puntuacion}`;
    }
    const mensajeDiv = document.getElementById("mensaje");
    if (mensajeDiv instanceof HTMLDivElement) {
        mensajeDiv.innerText = mensaje;
    }else{
        console.error("no se encuentra mensajeDiv")
    }
    const btnNueva = document.getElementById("btnNueva");
    if (btnNueva instanceof HTMLButtonElement) {
        btnNueva.style.display = "inline-block";
    }else{
        console.error("no se encuentra btnNueva")
    }
    const opcional = document.getElementById("opcional");
    if (opcional instanceof HTMLDivElement) {
        opcional.style.display = "block";
    }else{
        console.error("no se encuentra opcional")
    }
}

const verQueHubieraPasado=():void=> {
    let puntuacionSimulada = puntuacion;
    let cartasSimuladas: number[] = [];

    while (puntuacionSimulada < 7.5) {
    const carta = dameCarta();
    cartasSimuladas.push(carta);
    if (carta === 10 || carta === 11 || carta === 12) {
        puntuacionSimulada += 0.5;
    } else {
        puntuacionSimulada += carta;
    }
    if (puntuacionSimulada > 7.5) 
        break;
    };
    const resultadoOpcional = document.getElementById("resultadoOpcional");
    if (resultadoOpcional instanceof HTMLDivElement) {
    resultadoOpcional.innerText = `Si hubieras seguido, habrías obtenido: ${puntuacionSimulada.toFixed(1)} puntos con las siguientes cartas: ${cartasSimuladas.join(", ")}`;}
    else{
        console.error("no se encuentra resultadoOpcional")
            }
    if (puntuacionSimulada === 7.5) {
    (document.getElementById("resultadoOpcional") as HTMLDivElement).innerText += ". ¡Que pena!, habrias clavado la puntuación.";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion();
    const btnPedir = document.getElementById("btnPedir");
    if (btnPedir instanceof HTMLButtonElement) {
        btnPedir.addEventListener("click", pedirCarta);
    } else{
        console.error("no se encuentran btnPedir")
    }

    const btnPlantar = document.getElementById("btnPlantar");
    if (btnPlantar instanceof HTMLButtonElement) {
        btnPlantar.addEventListener("click", plantar);
    } else{
        console.error("no se encuentran btnPlantar")
    }

    const btnNueva = document.getElementById("btnNueva");
    if (btnNueva instanceof HTMLButtonElement) {
        btnNueva.addEventListener("click", nuevaPartida);
    } else{
        console.error("no se encuentran btnNueva")
    }

    const btnQueHubieraPasado = document.getElementById("btnVerQueHubieraPasado");
    if (btnQueHubieraPasado instanceof HTMLButtonElement) {
        btnQueHubieraPasado.addEventListener("click", verQueHubieraPasado);
    } else{
        console.error("no se encuentran btnQueHubieraPasado")
    }

});