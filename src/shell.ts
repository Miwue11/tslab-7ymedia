import { asignarEvento } from "./motor";
import {
  mostrarCarta,
  nuevaPartida,
  pedirCarta,
  verQueHubieraPasado,
  plantar,
} from "./UI";

const inicializarEventos = (): void => {
  asignarEvento("btnNueva", "click", nuevaPartida);
  asignarEvento("btnPedir", "click", pedirCarta);
  asignarEvento("btnPlantar", "click", plantar);
  asignarEvento("btnVerQueHubieraPasado", "click", verQueHubieraPasado);
};
document.addEventListener("DOMContentLoaded", () => {
  inicializarEventos();
  mostrarCarta(0);
});
