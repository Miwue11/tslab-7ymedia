function sumar(){
    //leer los valores de los imputs------le quitamos el posible valor de NULL con el (as HTMLInputElement)
    const sumando1= (document.getElementById("sumando1")as HTMLInputElement).value;
    const sumando2= (document.getElementById("sumando2")as HTMLInputElement).value;
    //sumar los valores
    const resultado=parseInt(sumando1)+parseInt(sumando2);
    //mostrar el resultado
    const resultadoElement=document.getElementById("resultado");
    if (resultadoElement !==null && resultadoElement !== undefined) //ponemos la condicion de que si es diferente de null y undefined, que lo muestre
    resultadoElement.innerHTML=resultado.toString();
}
const botonSumar=document.getElementById("sumar");
    if (botonSumar !==null && botonSumar !== undefined) //ponemos la condicion de que si es diferente de null y undefined, que lo muestre
botonSumar.addEventListener("click",sumar);