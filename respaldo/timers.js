//modulo Timers: contiene funciones que ejecutan código luego de un cierto periodo de tiempo.
/*Funciones conocidas: setTimeOut(), setImmediate(), setInterval().*/

//setTimeOut(): Ejecuta código luego de un número especifico de milisegundos, sintaxis setTimeOut(funcion,retraso,argumento)
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
setTimeout(mostrarTema,1000,'Node.js');

function sumar (a,b){
    console.log(a+b)
}
setTimeout(sumar,2000,5,6);

//setImmediate(): Ejecuta código asíncrono en la próxima iteración del ciclo de eventos(lo más pronto posible, despues de los sincronos), sintaxis setImmediate(function, argumento)
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate');

setImmediate(mostrarTema,'Node.js');

console.log('Despues de setImmediate');

//setInterval(): Ejecuta código un número infinito de veces con un retraso especifico de milisegundos. sintaxis setInterval(function,intervalo, argumentos)
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
setInterval(mostrarTema,1500,'Node.js');