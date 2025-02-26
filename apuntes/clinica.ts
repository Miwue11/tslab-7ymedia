
// let turno: number = 0;

// const actualizarNumero = (): void => {
//     const numero_turno = document.getElementById("NT");
//     if (
//     (numero_turno !== null) !== undefined &&
//     numero_turno instanceof HTMLHeadingElement//no me aceptaba el HTMLHeadElement asi q lo he vuelto a poner como estaba
//     )
//     numero_turno.textContent = turno.toString().padStart(2, "0");
//     else {
//     console.error("No se ha encontrado el elemento con id 'NT'");
//     }
// };

// const siguienteTurno = (): void => {
//     turno++;
//     actualizarNumero();
// };

// const turnoAnterior = (): void => {
//     if (turno === 0) {
//         turno = 0;
//         }
//         else turno--;
//         actualizarNumero();
//     };

// const resetTurno = (): void => {
//     turno =0;
//     actualizarNumero();
// };

// const cambiarTurno = (): void => {
//     const elegirTurno = document.getElementById("turno")
//     if (
//     elegirTurno !== null &&
//     elegirTurno !== undefined &&
//     elegirTurno instanceof HTMLInputElement) {
//     const otro_turno = parseInt(elegirTurno.value, 10);
//         if (!isNaN(otro_turno)) {
//         turno = otro_turno;
//             if (turno < 0) {
//             turno = 0;
//             alert("Introduce numeros positivos, pillín");
//             }
//         actualizarNumero();
//         }
//     }
// }


// const eventos = () => {
//     const siguiente = document.getElementById("siguiente");
//     if (
//     siguiente !== null &&
//     siguiente !== undefined &&
//     siguiente instanceof HTMLButtonElement
//     ) {
//     siguiente.addEventListener("click", siguienteTurno);
//     } else{
//         console.error("No se ha encontrado el elemento con id 'siguiente'");
//     }

//     const anterior = document.getElementById("atras");
//     if (
//     anterior !== null &&
//     anterior !== undefined &&
//     anterior instanceof HTMLButtonElement
//     ){
//     anterior.addEventListener("click", turnoAnterior);
//     } else{
//         console.error("No se ha encontrado el elemento con id 'atras'");   
//     }

//     const reset = document.getElementById("reset");
//     if (
//     reset !== null &&
//     reset !== undefined &&
//     reset instanceof HTMLButtonElement
//     ){
//     reset.addEventListener("click", resetTurno);
//     } else{
//         console.error("No se ha encontrado el elemento con id 'reset'");   
//     }

//     const cambiar = document.getElementById("BTNcambiar");
//     if (
//     cambiar !== null &&
//     cambiar !== undefined &&
//     cambiar instanceof HTMLButtonElement
//     )
//     {cambiar.addEventListener("click", cambiarTurno);}
//     else{
//         console.error("No se ha encontrado el elemento con id 'BTNcambiar'");   
//     }
// };

// document.addEventListener("DOMContentLoaded", () => {
//     eventos();
//     actualizarNumero();
// });