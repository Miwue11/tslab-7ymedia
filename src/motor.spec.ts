import {numeroAleatorio,calcularCarta, dameMensaje, dameUrlCarta,asignarEvento} from "./motor";
import * as model from "./model";
import { vi } from "vitest";
import { mensajeDiv,ganarOrPerder } from "./UI";

describe("dameUrlCarta", () => {
    it("debería devolver la url de la carta 1 si se le pasa 1", () => {
        // Arrange
        const carta = 1;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });

    it("debería devolver la url de la carta 2 si se le pasa 2", () => {
        // Arrange
        const carta = 2;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });

    it("debería devolver la url de la carta 3 si se le pasa 3", () => {
        // Arrange
        const carta = 3;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });

    it("debería devolver la url de la carta 4 si se le pasa 4", () => {
        // Arrange
        const carta = 4;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });

    it("debería devolver la url de la carta 5 si se le pasa 5", () => {
        // Arrange
        const carta = 5;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });

    it("debería devolver la url de la carta 6 si se le pasa 6", () => {
        // Arrange
        const carta = 6;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });

    it("debería devolver la url de la carta 7 si se le pasa 7", () => {
        // Arrange
        const carta = 7;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });

    it("debería devolver la url de la carta de la sota si se le pasa 10", () => {
        // Arrange
        const carta = 10;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });

    it("debería devolver la url de la carta del caballo si se le pasa 11", () => {
        // Arrange
        const carta = 11;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });

    it("debería devolver la url de la carta del rey si se le pasa 12", () => {
        // Arrange
        const carta = 12;
        const urlEsperada = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

        // Act
        const url = dameUrlCarta(carta);

        // Assert
        expect(url).toBe(urlEsperada);
    });
});



describe("dameMensaje", () => {
    it("debería devolver 'Has sido muy conservador' si la puntuación es menor que 4", () => {
        // Arrange
        const puntuacion = 3;
        const mensajeEsperado = "Has sido muy conservador";

        // Act
        const mensaje = dameMensaje(puntuacion);

        // Assert
        expect(mensaje).toBe(mensajeEsperado);
    });

    it("debería devolver 'Te ha entrado el canguelo eh?' si la puntuación es mayor o igual que 4 y menor que 6.5", () => {
        // Arrange
        const puntuacion = 5;
        const mensajeEsperado = "Te ha entrado el canguelo eh?";

        // Act
        const mensaje = dameMensaje(puntuacion);

        // Assert
        expect(mensaje).toBe(mensajeEsperado);
    });

    it("debería devolver 'Casi casi...' si la puntuación es mayor o igual que 6.5 y menor que 7", () => {
        // Arrange
        const puntuacion = 6.5;
        const mensajeEsperado = "Casi casi...";

        // Act
        const mensaje = dameMensaje(puntuacion);

        // Assert
        expect(mensaje).toBe(mensajeEsperado);
    });

    it("debería devolver 'no hombre... lo tenias ya hecho y te has acobardado.' si la puntuación es 7", () => {
        // Arrange
        const puntuacion = 7;
        const mensajeEsperado = "no hombre... lo tenias ya hecho y te has acobardado.";

        // Act
        const mensaje = dameMensaje(puntuacion);

        // Assert
        expect(mensaje).toBe(mensajeEsperado);
    });
});

describe("ganarOrPerder", () => {
    beforeEach(() => {
        vi.spyOn(model.partida, "gameOver", "get").mockReturnValue(false);
        document.body.innerHTML = "";
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("debería mostrar el mensaje de ganar", () => {

        // Arrange
        vi.spyOn(model.partida, "puntuacion", "get").mockReturnValue(7.5);
        const mensaje = dameMensaje(model.partida.puntuacion);
        mensajeDiv(mensaje);

        // Act
        ganarOrPerder();

        // Assert
        expect(mensaje).toBe("¡Lo has clavado! ¡Enhorabuena!");
    });

    it("debería mostrar el mensaje de perder", () => {

        // Arrange
        vi.spyOn(model.partida, "puntuacion", "get").mockReturnValue(8);
        const mensaje = dameMensaje(model.partida.puntuacion);
        mensajeDiv(mensaje);

        // Act
        ganarOrPerder();

        // Assert
        expect(mensaje).toBe(` Oh.. te has pasado de puntos, perdiste. Esta es tu puntuación final: ${model.partida.puntuacion}`);
    });
    
    it("debería mostrar el mensaje de perder", () => {

        // Arrange
        vi.spyOn(model.partida, "puntuacion", "get").mockReturnValue(3);
        const mensaje = dameMensaje(model.partida.puntuacion);
        mensajeDiv(mensaje);

        // Act
        ganarOrPerder();

        // Assert
        expect(mensaje).toBe(`Has sido muy conservador`);
    });

    it("debería mostrar el mensaje de perder", () => {

        // Arrange
        vi.spyOn(model.partida, "puntuacion", "get").mockReturnValue(6);
        const mensaje = dameMensaje(model.partida.puntuacion);
        mensajeDiv(mensaje);

        // Act
        ganarOrPerder();

        // Assert
        expect(mensaje).toBe(`Te ha entrado el canguelo eh?`);
    });

    it("debería mostrar el mensaje de perder", () => {

        // Arrange
        vi.spyOn(model.partida, "puntuacion", "get").mockReturnValue(7);
        const mensaje = dameMensaje(model.partida.puntuacion);
        mensajeDiv(mensaje);

        // Act
        ganarOrPerder();

        // Assert
        expect(mensaje).toBe(`no hombre... lo tenias ya hecho y te has acobardado.`);
    });

    it("debería mostrar el mensaje de perder", () => {

        // Arrange
        vi.spyOn(model.partida, "puntuacion", "get").mockReturnValue(6.5);
        const mensaje = dameMensaje(model.partida.puntuacion);
        mensajeDiv(mensaje);

        // Act
        ganarOrPerder();

        // Assert
        expect(mensaje).toBe(`Casi casi...`);
    });
});



describe("numeroAleatorio", () => {
    it("debería devolver 12 si Math.random() devuelve 0.9", () => {
        //  Arrange (escenario)
        const numero = 0.9;
        const numeroEsperado = 12;
        vi.spyOn(global.Math, "random").mockReturnValue(numero);

        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numeroAleatorio());

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });

    it("debería devolver 1 si Math.random() marca 0", () => {
        //  Arrange (escenario)
        const numero = 0;
        const numeroEsperado = 1;
        vi.spyOn(global.Math, "random").mockReturnValue(numero);

        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numeroAleatorio());

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });
    it("debería devolver 5 si Math.random() devuelve 0.4", () => {
        //  Arrange (escenario)
        const numero = 0.4;
        const numeroEsperado = 5;
        vi.spyOn(global.Math, "random").mockReturnValue(numero);

        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numeroAleatorio());

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });
});

describe("calcularCarta", () => {
    it("debería devolver 10,11,12 si el número es 8,9,10", () => {

        //  Arrange (escenario)
        const numero = 9;
        const numeroEsperado = 11;
        
        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numero);

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });
    it("debería devolver 10,11,12 si el número es 8,9,10", () => {

        //  Arrange (escenario)
        const numero = 8;
        const numeroEsperado = 10;
        
        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numero);

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });
    it("debería devolver 10,11,12 si el número es 8,9,10", () => {

        //  Arrange (escenario)
        const numero = 10;
        const numeroEsperado = 12;
        
        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numero);

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });
    it("debería devolver el mismo número si es menor o igual que 7", () => {

        //  Arrange (escenario)
        const numero = 7;
        const numeroEsperado = 7;

        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numero);

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });

    it("debería devolver el mismo número si es menor o igual que 7", () => {

        //  Arrange (escenario)
        const numero = 1;
        const numeroEsperado = 1;

        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numero);

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });

    it("debería devolver el mismo número si es menor o igual que 7", () => {

        //  Arrange (escenario)
        const numero = 3;
        const numeroEsperado = 3;

        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numero);

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });
});

describe("asignarEvento", () => {
    it("si se activa el elemento con id'btnNueva', el llamado pasa a estar en true", () => {
        // Arrange
        const id = "btnNueva";
        const evento = "click";
        let llamado = false;
        const handler = () => { llamado = true; };
        const elemento = document.createElement("button");
        elemento.id = id;
        document.body.appendChild(elemento);

        // Act
        asignarEvento(id, evento, handler);
        elemento.dispatchEvent(new Event("click"));

        // Assert
        expect(llamado).toBe(true);
    });

    it("si se activa el elemento con id'btnPedir', el llamado pasa a estar en true", () => {
        // Arrange
        const id = "btnPedir";
        const evento = "click";
        let llamado = false;
        const handler = () => { llamado = true; };
        const elemento = document.createElement("button");
        elemento.id = id;
        document.body.appendChild(elemento);

        // Act
        asignarEvento(id, evento, handler);
        elemento.dispatchEvent(new Event("click"));

        // Assert
        expect(llamado).toBe(true);
    });

    it("si se activa el elemento con id'btnPlantar', el llamado pasa a estar en true", () => {
        // Arrange
        const id = "btnPlantar";
        const evento = "click";
        let llamado = false;
        const handler = () => { llamado = true; };
        const elemento = document.createElement("button");
        elemento.id = id;
        document.body.appendChild(elemento);

        // Act
        asignarEvento(id, evento, handler);
        elemento.dispatchEvent(new Event("click"));

        // Assert
        expect(llamado).toBe(true);
    });

    it("si se activa el elemento con id'btnVerQueHubieraPasado', el llamado pasa a estar en true", () => {
        // Arrange
        const id = "btnVerQueHubieraPasado";
        const evento = "click";
        let llamado = false;
        const handler = () => { llamado = true; };
        const elemento = document.createElement("button");
        elemento.id = id;
        document.body.appendChild(elemento);

        // Act
        asignarEvento(id, evento, handler);
        elemento.dispatchEvent(new Event("click"));

        // Assert
        expect(llamado).toBe(true);
    });
});
