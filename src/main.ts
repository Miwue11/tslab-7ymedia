
let puntuacion: number = 0;
let gameOver: boolean = false;

    const puntos =()=> {
        const puntos =
        document.getElementById("puntuacion");
        if (puntos instanceof HTMLDivElement) {
        puntos.innerText = `Puntuación: ${puntuacion}`;
        } else{
        console.error("no se encuentra puntuacion")
        }
    }

    const muestraPuntuacion=():void=> {
        return puntos();
    }

    const numeroAleatorio = (): number => Math.floor(Math.random() * 10) + 1;

    const calcularCarta = (numero: number):number =>{
        if (numero > 7) {
            return numero +2; 
        }
        return numero;
    }

    const dameCarta = (): number => calcularCarta(numeroAleatorio());

    const dameUrlCarta = (carta: number): string => {
        switch (carta) {
            case 1:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
                break;
            case 2:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
                break;
            case 3:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
                break;
            case 4:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
                break;
            case 5:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
                break;
            case 6:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
                break;
            case 7:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
                break;
            case 10:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
                break;
            case 11:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
                break;
            case 12:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
                break;
                default:
                return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        }
    };

    const mostrarCarta = (carta: string): void => {
        const img = document.getElementById("imagen");
        if (img instanceof HTMLImageElement) {
            img.src = carta;
        } else {
            console.error("no se encuentra url");
        }
    };

    const ponerBotonPedir=()=> {
        const ponerBotonPedir =
        document.getElementById("btnPedir");
            if (ponerBotonPedir instanceof HTMLButtonElement) {
                ponerBotonPedir.disabled = false;
            }else{
            console.error("no se encuentra botonPedir")
            }
    }

    const ponerBotonPlantar=()=> {
        const ponerBotonPlantar =
        document.getElementById("btnPlantar");
            if (ponerBotonPlantar instanceof HTMLButtonElement) {
                ponerBotonPlantar.disabled = false;
            }else{
            console.error("no se encuentra botonPlantar")
            }
    }

    const quitarBotonPedir=()=> {
        const quitarBotonPedir =
        document.getElementById("btnPedir");
            if (quitarBotonPedir instanceof HTMLButtonElement) {
                quitarBotonPedir.disabled = true;
            }else{
            console.error("no se encuentra botonPedir")
            }
    }

    const quitarBotonPlantar=()=> {
        const quitarBotonPlantar =
        document.getElementById("btnPlantar");
            if (quitarBotonPlantar instanceof HTMLButtonElement) {
                quitarBotonPlantar.disabled = true;
            }else{
            console.error("no se encuentra botonPlantar")
            }
    }

    const deshabilitarBotones=():void=> {
        quitarBotonPedir();
        quitarBotonPlantar();
    }

    const habilitarBotones=():void=> {
        ponerBotonPedir();
        ponerBotonPlantar();  
    }

    const imagenInicial=()=> {
        const img = document.getElementById("imagen") as HTMLImageElement;
            if (img) {
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
            }else{
            console.error("no se encuentra imagen")
            }
    }

    const resultadoOpcional=()=>{ 
        const resultado= document.getElementById("resultadoOpcional");
            if (resultado instanceof HTMLDivElement) {
            resultado.innerText = "";
            }else{
                console.error("no se encuentra resultadoOpcional")
            }
    }

    const mensaje =()=> {
        const mensaje= document.getElementById("mensaje");
            if (mensaje instanceof HTMLDivElement) {
            mensaje.innerText = "";
            }else{
                console.error("no se encuentra mensaje")
            }
    }

    const nuevaPartida=():void=> {
        puntuacion = 0;
        gameOver = false;
        muestraPuntuacion();
        habilitarBotones();
        imagenInicial();
        resultadoOpcional();
        mensaje();
        ocultarBtnNueva(); 
        opcional();
        ocultarQueHubieraPasado();
    }

    const pedirCarta=():void=> {
        if (gameOver) return;
        const carta = dameCarta();
        const urlCarta = dameUrlCarta(carta);
        mostrarCarta(urlCarta);
        actualizarPuntos(carta);
        muestraPuntuacion();
    }

    const perder=()=>{
        ocultarQueHubieraPasado();
        deshabilitarBotones();
        gameOver = true;
        muestraPuntuacion();
        const mensaje = dameMensaje(puntuacion);
        mensajeDiv(mensaje);
        btnNueva();
        opcional();
    }


    const ganar=()=>{
        ocultarQueHubieraPasado();
        deshabilitarBotones();
        gameOver = true;
        muestraPuntuacion();
        mensajeDiv("¡Enhorabuena! Has ganado");
        btnNueva();
        opcional();
    }
    
    const actualizarPuntos=(carta: number):void=> {
        if (carta === 10 || carta === 11 || carta === 12) {
            puntuacion += 0.5;
        } else {
            puntuacion += carta;
        }ganarOrPerder();
    }

    const ganarOrPerder=():void=> {
        if (puntuacion > 7.5) {
            perder();
        } else if (puntuacion === 7.5) {
            ganar();
        }
    }

    const ocultarQueHubieraPasado=()=> {
        const btn= document.getElementById("btnVerQueHubieraPasado");
            if (btn instanceof HTMLButtonElement) {
                btn.style.display = "none";
            }else{
                console.error("no se encuentra btnVerQueHubieraPasado")
            }
    }

    const dameMensaje=(puntuacion:number):string=> {
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
            mensaje = ` Oh.. te has pasado de puntos, perdiste. Esta es tu puntuación final: ${puntuacion}`;
        }
        return mensaje;
    }

    const mensajeDiv =(mensaje:string):void=> {
        const msj= document.getElementById("mensaje");
            if (msj instanceof HTMLDivElement) {
                msj.innerText = mensaje;
            }else{
                console.error("no se encuentra mensajeDiv")
            }
    }

    const ocultarBtnNueva=()=> {
        const btn= document.getElementById("btnNueva");
            if (btn instanceof HTMLButtonElement) {
                btn.style.display = "none";
            }else{
                console.error("no se encuentra btnNueva")
            }
    }

    const queHubieraPasado=()=> {
        const btn= document.getElementById("btnVerQueHubieraPasado");
            if (btn instanceof HTMLButtonElement) {
                btn.style.display = "inline-block";
            }else{
                console.error("no se encuentra btnVerQueHubieraPasado")
            }
    }

    const btnNueva=()=> {
        const btn= document.getElementById("btnNueva");
            if (btn instanceof HTMLButtonElement) {
                btn.style.display = "inline-block";
            }else{
                console.error("no se encuentra btnNueva")
            }
    }

    const opcional =()=>{ 
        const opcion= document.getElementById("opcional");
            if (opcion instanceof HTMLDivElement) {
                opcion.style.display = "block";
            }else{
                console.error("no se encuentra opcional")
            }
    }

    const plantar=():void => {
        if (gameOver) return;
        deshabilitarBotones();
        gameOver = true;
        muestraPuntuacion();
        const mensaje:string = dameMensaje(puntuacion);
        mensajeDiv(mensaje);   
        btnNueva();
        opcional();
        queHubieraPasado();

    }

    const actualizarPuntuacionSimulada = (puntuacion: number, carta: number): number => {
        if (carta === 10 || carta === 11 || carta === 12) {
            return puntuacion + 0.5;
        }
            return puntuacion + carta;
    };

    const mostrarResultadoOpcional = (puntuacion: number, cartas: number[]): void => {
        const resultadoOpcional = document.getElementById("resultadoOpcional");
            if (resultadoOpcional instanceof HTMLDivElement) {
            let mensaje = `Si hubieras seguido, habrías obtenido: ${puntuacion.toFixed(1)} puntos con las siguientes cartas: ${cartas.join(", ")}`;
            if (puntuacion === 7.5) {
                mensaje += ". ¡Que pena!, habrías clavado la puntuación.";
            }
            resultadoOpcional.innerText = mensaje;
            } else {
            console.error("No se encuentra el elemento resultadoOpcional");
            }
    };

    const verQueHubieraPasado = (): void => {
        const { puntuacionFinal, cartasSimuladas } = simularJuego(puntuacion);
        mostrarResultadoOpcional(puntuacionFinal, cartasSimuladas);
    };

    const simularJuego = (puntuacionInicial: number): {
        puntuacionFinal: number, cartasSimuladas: number[] } => {
        let puntuacionSimulada = puntuacionInicial;
        let cartasSimuladas: number[] = [];
            while (puntuacionSimulada < 7.5) {
                const carta = dameCarta();
                cartasSimuladas.push(carta);
                puntuacionSimulada = actualizarPuntuacionSimulada(puntuacionSimulada, carta);
                if (puntuacionSimulada > 7.5) break;
            }
            return { puntuacionFinal: puntuacionSimulada, cartasSimuladas };
    };

    const inicializarEventos = (): void => {
        asignarEvento("btnNueva", "click", nuevaPartida);
        asignarEvento("btnPedir", "click", pedirCarta);
        asignarEvento("btnPlantar", "click", plantar);
        asignarEvento("btnVerQueHubieraPasado", "click", verQueHubieraPasado);
    };

    const asignarEvento = (id: string, evento: string, handler: EventListener): void => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.addEventListener(evento, handler);
        } else {
            console.error(`No se encontró el elemento con id ${id}`);
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        inicializarEventos();
    });