import {
    inicializarEventos,
} from "./motor";
import { mostrarCarta } from "./UI";


document.addEventListener("DOMContentLoaded", () => {
    inicializarEventos();
    mostrarCarta(0);
    });