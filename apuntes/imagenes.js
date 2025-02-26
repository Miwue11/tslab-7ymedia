//------------------------------------------------//

function cambiarFotoPrincipal(idMiniatura){
    const fotoPrincipal=document.getElementById("foto-principal");
    const miniatura=document.getElementById(idMiniatura);
    fotoPrincipal.src=miniatura.src;
}

const miniatura1=document.getElementById("miniatura1");
const miniatura2=document.getElementById("miniatura2");
const miniatura3=document.getElementById("miniatura3");
const miniatura4=document.getElementById("miniatura4");
const miniatura5=document.getElementById("miniatura5");
miniatura1.addEventListener("click",() => //llamamos a una funcion fantasma con los arrows (flechas)
    cambiarFotoPrincipal("miniatura1"));//no necesita llaves


miniatura2.addEventListener("click",() =>
    cambiarFotoPrincipal("miniatura2"))
miniatura3.addEventListener("click",function(){ //aqui llamamos a una funcion anonima (necesita llaves)
    cambiarFotoPrincipal("miniatura3");
});

miniatura4.addEventListener("click",()=> 
    cambiarFotoPrincipal("miniatura4"));
miniatura5.addEventListener("click",()=>
    cambiarFotoPrincipal("miniatura5"));