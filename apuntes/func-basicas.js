//AREAS GEOMETRICAS EN FUNCIONES

function area_del_circulo(radio){
     return 2* Math.PI * radio **2;
}
console.log(area_del_circulo(3))


function area_del_cuadrado(lado){
    return lado*lado;
}
console.log(area_del_cuadrado(3))


function area_del_rectangulo(base,altura){
    return base*altura;
}
let resultado=area_del_rectangulo(3,4);
console.log(resultado);