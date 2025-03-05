import { ganarOrPerder,numeroAleatorio,calcularCarta } from "./motor";
import * as model from "./model";
import { vi } from "vitest";
import { dameMensaje, mensajeDiv } from "./UI";

describe("ganarOrPerder", () => {
    beforeEach(() => {
        vi.spyOn(model.partida, "gameOver", "get").mockReturnValue(false);
        document.body.innerHTML = '';
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
    it("debería devolver el mismo número si es menor o igual que 7", () => {
        //  Arrange (escenario)
        const numero = 7;
        const numeroEsperado = 7;
        //  Act (ejecutamos la funcion)
        const resultado = calcularCarta(numero);

        //  Assert (comprobamos el resultado)
        expect(resultado).toBe(numeroEsperado);
    });
});