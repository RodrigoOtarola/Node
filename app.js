//Importación de otro archivo, ./ indica que archivos estan en la misma carpeta
//const saludos = require('./saludos.js');
//const {saludarHolaMundo} = require("./saludos");

//Para incluir algunos elementos de un modulo: ocupando la desestructuracion
//const {saludar,saludarHolaMundo}= require('./saludos');

//probar impresión, se llama al nombre de export y el nombre de la función
/*console.log(saludar('Rodrigo'));

console.log(saludarHolaMundo());*/

//imprimir modulo os
/*const os = require('os');

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());*/

//modulo Timers: contiene funciones que ejecutan código luego de un cierto periodo de tiempo.
 /*Funciones conocidas: setTimeOut(), setImmediate(), setInterval().*/

//setTimeOut(): Ejecuta código luego de un número especifico de milisegundos, sintaxis setTimeOut(funcion,retraso,argumento)
/*function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
setTimeout(mostrarTema,1000,'Node.js');

function sumar (a,b){
    console.log(a+b)
}
setTimeout(sumar,2000,5,6);*/

//setImmediate(): Ejecuta código asíncrono en la próxima iteración del ciclo de eventos(lo más pronto posible, despues de los sincronos), sintaxis setImmediate(function, argumento)
/*function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate');

setImmediate(mostrarTema,'Node.js');

console.log('Despues de setImmediate');*/

//setInterval(): Ejecuta código un número infinito de veces con un retraso especifico de milisegundos. sintaxis setInterval(function,intervalo, argumentos)
/*function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
setInterval(mostrarTema,1500,'Node.js');*/

//Modulo fs: contiene funcionalidad muy util para trabajar con el sistema de archivos.
/*operaciones utiles: Leer, modificar, copiar, eliminar y renombrar, todos los métodos son asíncronos.
    **Se puede escoger versiones sincronas agregando Sync a sus nombres ej: fs.renameSync().
 */
const fs = require('fs');

//Metodo para leer archivo sintaxis fs.readFile(nombreArchivo, codificacion, function que ejecuta post proceso)
/*fs.readFile('inde.html','utf-8',(err, contenido)=>{
    if(err){
        //console.log(err);
        throw err;//Detiene la ejecución de la terminal, ejecuta hasta que detecta error.
    }else{
        console.log(contenido);
    }
    console.log('Mensaje.....');
});*/

//Método para cambiar nombre, sintaxis fs.rename(nombreArchivo,nombreNuevo,function que ejecuta post proceso)
/*fs.rename('main.html','index.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('Nombre cambiado exitosamente.');
});*/

//Metodo para agregar contenido al final del archivo, sintaxis fs.appendFile(nombreArchivo, tag html, function post proceso)
/*fs.appendFile('index.html','<p>Hola</p>',(err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo Actualizado');
});*/

//Reemplazar contenido del archivo, sintaxis fs.writeFile('index.html','Contenido nuevo', function post proceso).
/*fs.writeFile('index.html','ContenidoNuevo',(err)=>{
    if(err){
        throw err;
    }
    console.log('Contenido reemplazado');
})*/

//Eliminar archivo, sintaxis fs.unlink(nombreArchivo, function post proceso).
/*fs.unlink('main.html',(err)=>{
    if (err){
        throw err;
    }
    console.log('Archivo eliminado con exito');
});*/

//Modulo eventEmitter.
/*const EventEmitter = require('events');

console.log(EventEmitter);*/

const EventEmitter = require('events');

/*const emisorProductos = new EventEmitter();

//Llamada método on
emisorProductos.on('compra',(total, numProductos)=>{
    console.log(`Total de la compra: $${total}`);
    console.log(`Numero de productos: ${numProductos}`);
});
//Emite evento
emisorProductos.emit('compra','500',10);*/

//Promises:
/*const promesaCumplida = true;
const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa cumplida');
        }else{
            reject('Promesa rechazada....');
        }

    },3000);
});
 const manejarPromesaCumplida = (valor)=>{
     console.log(valor);
 };
 const manejarPromesaRechazada = (razonRechazo)=>{
     console.log(razonRechazo);
 };
//Manejar promesas.
miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);*/

//Practica promesas carrito de pizza.
/*const estatusPedido = ()=>{
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido Exitoso...');
        }else{
            reject('Ocurrio un error. Intente nuevamente');
        }
    },2000);
});

miPedidoDePizza
    .then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion);
    })
    //Se pasa null para que no retorne undifined
    .then(null,(mensajeDeError) =>{
        console.log(mensajeDeError);
    });*/

//Catch: Funciona cuando la promesa es rechazada.
/*const estatusPedido = ()=>{
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido Exitoso...');
        }else{
            reject('Ocurrio un error. Intente nuevamente');
        }
    },2000);
});

miPedidoDePizza
    .then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion);
    })
    //Se pasa el catch
    .catch((mensajeDeError) =>{
        console.log(mensajeDeError);
    });*/

//Async Await:
function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando: ${producto} de prueba.`);
        setTimeout(()=>{
            if(producto === 'taza'){
                resolve ('Producto en stock');
            }else {
                reject('Producto no disponible');
            }
        },2000);
    });
}
function procesarPedido(respuesta){
    return new Promise((resolve,reject)=>{
        console.log('Procesando respuesta');
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(()=>{
            resolve('Disfruta tu podructo');
        },4000);
    })
}
//