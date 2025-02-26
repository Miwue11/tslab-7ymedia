function saludar(){
    //leer los valores de los imputs
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    //compilar el resultado
    const resultado= `¡hola ${nombre} ${apellido}!`;
    //mostrar el resultado
    document.getElementById("resultado").innerHTML=resultado;
}
const boton=document.getElementById("boton");
boton.addEventListener("click",saludar);

