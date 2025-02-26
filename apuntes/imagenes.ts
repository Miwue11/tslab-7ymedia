function cambiarFotoPrincipal(idMiniatura:string):void{
    const fotoPrincipal=(document.getElementById("foto-principal")as HTMLImageElement);
    const miniatura=document.getElementById(idMiniatura)as HTMLImageElement;
    fotoPrincipal.src=miniatura.src;
}

const miniatura1=(document.getElementById("miniatura1")as HTMLImageElement);
const miniatura2=(document.getElementById("miniatura2")as HTMLImageElement);
const miniatura3=(document.getElementById("miniatura3")as HTMLImageElement);
const miniatura4=(document.getElementById("miniatura4")as HTMLImageElement);
const miniatura5=(document.getElementById("miniatura5")as HTMLImageElement);

if (miniatura1 && miniatura2 && miniatura3 && miniatura4 && miniatura5 !==null
    && miniatura1 && miniatura2 && miniatura3 && miniatura4 && miniatura5 !== undefined){
    miniatura1.addEventListener("click",()=>cambiarFotoPrincipal("miniatura1"));
    miniatura2.addEventListener("click",()=>cambiarFotoPrincipal("miniatura2"));
    miniatura3.addEventListener("click",()=>cambiarFotoPrincipal("miniatura3"));
    miniatura4.addEventListener("click",()=>cambiarFotoPrincipal("miniatura4"));
    miniatura5.addEventListener("click",()=>cambiarFotoPrincipal("miniatura5"));
}