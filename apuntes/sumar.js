function sumar(){
    //leer los valores de los imputs
    const sumando1= document.getElementById("sumando1").value;
    const sumando2= document.getElementById("sumando2").value;
    //sumar los valores
    const resultado=parseInt(sumando1)+parseInt(sumando2);
    //mostrar el resultado
    document.getElementById("resultado").innerHTML=resultado;
}

const botonSumar=document.getElementById("sumar");
botonSumar.addEventListener("click",sumar);
