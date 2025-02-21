let numeroSecreto = 0;
let numeroIntentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroIntentos);
    limpiarCaja()
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el Número en ${numeroIntentos} ${numeroIntentos == 1 ? 'Intento' : 'Intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        numeroIntentos ++;
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números');
    }else{
        //Si el número generado está incluído en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de números.
    //Generar el número aleatorio.
    //Inicializar el número de intentos.
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
