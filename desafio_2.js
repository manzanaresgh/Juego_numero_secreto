function calcularIMC(estatura, peso){
    let IMC = peso / estatura;
    return IMC;
}

function calcularFactorial(numero){
    let contador = parseInt(numero);
    let numFactorial = parseInt(1);
    while(contador > 0){
        numFactorial = numFactorial*contador;
        contador--;
    }
    console.log(numFactorial);
    return numFactorial;
}

function convertirDolarReales(dolares){
    let conversionReales = parseFloat(dolares*4.80);
    console.log(conversionReales);
    return conversionReales;
}

function areaRectangulo(base, altura){
    let area = (base*altura)/2;
    console.log(area);
    return area;
}

function areaCirculo(radio){
    let pi = parseFloat(Math.PI);
    let area = Math.pow((pi*radio), 2);
    let perimetro = parseFloat(radio * 2);
    console.log(`El area del círculo es:${area} y el perímetro es: ${perimetro}`);
    return area;
}

function tablaMultiplicar(numero){
    let contador = 0
    while(contador <= 10){
        let resultado = numero * contador;
        console.log(`${numero} X ${contador} = ${resultado}`);
        contador++;
    }
}