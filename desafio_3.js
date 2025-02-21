
//VARIABLES
let listaGenerica = [];
let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
var listaNumeros = [];
//FUNCION AGREGAR LENGUAJE
function agregarLenguaje(lenguaje){
    lenguajesProgramacion.push(lenguaje);
    return;
}
//SE AGREGAN 3 LENGUAJES NUEVOS
lenguajesProgramacion.push('Java');
lenguajesProgramacion.push('Ruby');
lenguajesProgramacion.push('GoLang');
//FUNCION MOSTRAR LENGUAJES
function mostrarLenguajes(){
    lenguajesProgramacion.forEach((element) => console.log(element));
}
//FUNCION MOSTRAR LENGUAJES INVERTIDOS
function mostrarLenguajesInvertidos(){
    let contador = lenguajesProgramacion.length;
    while(contador >= 0){
        console.log(lenguajesProgramacion[contador]);
        contador--;
    }
}
//FUNCION CALCULA EL PROMEDIO DE LISTA
function calcularPromedio(n1, n2, n3, n4){
    listaNumeros = [n1, n2, n3, n4];
    let contador = 0
    let sumatoria = parseFloat(0);
    while(contador < listaNumeros.length){
        sumatoria = (sumatoria + parseFloat(listaNumeros[contador]));
        console.log(listaNumeros[contador]);
        contador++;
    }
    console.log(sumatoria/listaNumeros.length);
}
//FUNCION MOSTRAR NÚMERO MAYOR Y MENO DE UN ARREGLO
function mostrarMayorMenor(n1, n2, n3, n4){
    listaNumeros = [n1, n2, n3, n4];
    let numMaximo;
    let numMinimo;
    numMaximo = Math.max.apply(null, listaNumeros);
    numMinimo = Math.min.apply(null, listaNumeros);
    console.log();
}

//FUNCION CALCULA SUMA DE LISTA
function calcularSuma(n1, n2, n3, n4){
    listaNumeros = [n1, n2, n3, n4];
    let contador = 0
    let sumatoria = parseFloat(0);
    while(contador < listaNumeros.length){
        sumatoria = (sumatoria + parseFloat(listaNumeros[contador]));
        contador++;
    }
    console.log(sumatoria);
}

calcularSuma(10,20,10,10);