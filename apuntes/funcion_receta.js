// //----------------------------------------------//


// //FUNCION DE LA RECETA DE ENSALADA

const lechuga="🥬 lechuga";
const setas="🍄 setas";
const alubias="🫘 alubias";
const cebolla="🧅 cebolla";
const maiz="🌽 maiz";
const arandanos="🫐 arandano";
const aceitunas="🫒 aceitunas";
const piña="🍍 piña";
const mango="🥭 mango";
const zanahoria="🥕 zanahoria";
const tomate="🍅 tomate";
const pepino="🥒 pepino";
const aguacate="🥑 aguacate";
const bacon="🥓 bacon";
const huevos="🥚 huevo";
const queso="🧀 queso";
const pollo="🍗 pollo";
const nueces="🌰 nueces";

function pintaReceta(titulo, ingredientes, preparacion){
    const estiloTitulo="color:red; font-size:18px";
    const estiloIngredientes="color:green; font-size:14px";
    const estiloPreparacion="color:indigo; font-size:12px; font-style:italic";
    //TITULO
    console.log(`%c${titulo}`, estiloTitulo);
    //INGREDIENTES
    console.log(`%c-Ingredientes: ${ingredientes}`,estiloIngredientes);
    //PREPARACION
    console.log(`%c-Preparacion: ${preparacion}`,estiloPreparacion);
}

console.log("*********************")
console.log(pintaReceta("Ensapada con alubias, aguacate y huevo",`${alubias}, ${aguacate}, ${huevos}, ${cebolla}, ${tomate}, ${lechuga}`,`cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre.`));  
console.log("*********************")


console.log(pintaReceta("Ensalada de setas y bacon",`${setas}, ${bacon}, ${lechuga}, ${tomate}, ${cebolla}, ${queso}`,`saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre.`));
console.log("*********************")

console.log(pintaReceta("Ensalada de arándanos y pollo",`${arandanos}, ${pollo}, ${lechuga}, ${zanahoria}, ${queso}, ${nueces}`,`mezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza.`));
console.log("*********************")

console.log(pintaReceta("Ensalada de maíz y piña",`${maiz}, ${piña}, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}`,`mezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre.`));
console.log("*********************")

console.log(pintaReceta("Ensalada de mango y queso feta",`${mango}, ${queso}, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}`,`mezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva.`));

