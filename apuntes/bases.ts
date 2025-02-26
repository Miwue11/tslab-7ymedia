//interface
interface Cliente{
    nombre: string;
    apellido: string;
    edad: number;
}
const clienteA: Cliente={
    nombre: "Juan",
    apellido: "Perez",
    edad: 23
}
const clienteB: Cliente={
    nombre: "Carlos",
    apellido: "Gonzalez",
    edad: 25
}
clienteA.edad=24;
clienteB.edad=26
console.log(clienteA); //24
console.log(clienteB); //2




interface Pelicula{
    titulo: string;
    director: string;
    año: number;
}
const peliculaA: Pelicula={
    titulo: "Blade Runner",
    director: "Ridley Scott",
    año: 1982
}
const peliculaB: Pelicula={
    titulo: "Matrix",
    director: "Lana Wachowski",
    año: 1999
}
console.log(peliculaA);
console.log(peliculaB);
