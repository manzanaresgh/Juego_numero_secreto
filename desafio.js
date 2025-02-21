function mensaje(){
    console.log('Hola Mundo');
    return;
}

function recibeNombre(nombre){
    console.log(`Hola ${nombre}`);
    return;
}

function numeroDoble(numero){
    let doble = (parseInt(numero) * 2);
    console.log(doble);
    return;
}

function numeroPromedio(num1, num2, num3){
    let promedio = parseInt((num1+num2+num3)/3);
    console.log(promedio);
    return;
}

function numMayor(num1, num2){
    let mayor = [num1, num2];
    let tempMaxima;
    Math.max(mayor);
    console.log(tempMaxima = Math.max.apply(null, mayor));
}

numMayor(15, 10);