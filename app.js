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

//const EventEmitter = require('events');

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

//sin Async Await:
/*function ordenarProducto(producto){
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
    return new Promise((resolve)=>{
        console.log('Procesando respuesta');
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(()=>{
            resolve('Disfruta tu producto');
        },4000);
    })
}*/
//
/*ordenarProducto('taza')
.then(respuesta=>{
    console.log('Respuesta recibida');
    console.log(respuesta);
    //Ejecutara 1ro la function ordenarProducto y después procesarPedido
    return procesarPedido(respuesta);
})
.then(respuestaProcesada =>{
    console.log(respuestaProcesada);
})
.catch(error =>{
    console.log(error);
})*/

//Con Async Await: Todas retornan una promesa.
/*async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}
realizarPedido('taza');*/

//Servidor con Node.js, primero se debe importar el modulo
/*const http = require('http');

//Definir constante para guardar servidor.
const servidor = http.createServer((req, res)=>{
    //Proceso
    res.end('Hola Mundo');
});

const puerto = 3000;

//Para configurar puerto, 2do parametro para pasar argumentos, se debe iniciar servidor
servidor.listen(puerto,()=>{
    console.log(`Servidor OK, escuchando en el puerto ${puerto}`);
});*/

//Request y response

/*const http = require('http');

const servidor = http.createServer((req,res)=>{
   //Request: solicitud del cliente.
    console.log('===> req (solicitud)');
    console.log(req.url);
    console.log(req.method);
});

const puerto = 3000;

servidor.listen(puerto,()=>{
    console.log('Servidor OK');
})*/

//Modulo URL:
/*const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordener=vistas&nivel=1');

console.log(miURL.hostname);//Nombre del host.
console.log(miURL.pathname);//Nombre de camino.
console.log(miURL.searchParams);//Parametros Query.*/

//Routing: Manejar solicitudes del cliente.
/*const http = require('http');

const {infoCursos} = require('./cursos');

const servidor = http.createServer((req, res)=>{
    //Obtener metodo
    const {method} = req;

    switch(method){
        case 'GET': return manejarSolicitudGET(req,res);
        case 'POST': return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            console.log('El metodo utilizado no puede ser manejado por el servidor');
    }
});

//Definir function manejarSolicitudGET
function manejarSolicitudGET(req,res){
    const path = req.url;

    //Si la ruta es la raiz, devuelve el msje de bienvenidad.
    if(path === '/'){//Por defecto el codigo es 200
        //res.statusCode = 200;
        return res.end('Bienvenido al servidor y API con Node.js');
    //Si la ruta es cursos devuelve la info.
    }else if(path === '/cursos'){
        return res.end(JSON.stringify(infoCursos));
    //Para obtener solo los cursos de programacion
    }else if(path==='/cursos/programacion'){
        return res.end(JSON.stringify(infoCursos.programacion));
    }
    //Para url equivocada
    res.statusCode=404;
    return res.end('Recurso no disponible');
}
//Definir function manejarSolicitudPOST
function manejarSolicitudPOST(req,res){
    const path = req.url;
    if(path === '/cursos/programacion'){
        let cuerpo = '';
        //Trabajo con eventos, recibe data y llena.
        req.on('data',contenido=>{
            cuerpo += contenido.stringify();
        });

        //Para finalizar evento.
        req.on('end',()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);//Para ver el tipo de dato
            res.end('Servidor recibio solicitud POST');
        });
    }
}

const puerto = 3000;

servidor.listen(puerto,()=>{
    console.log('Servidor Ok');
});*/

//Prueba con nodemon.
/*const http = require('http');

const servidor = http.createServer((req, res)=>{
    res.end('Hola Rodrigo');
});

servidor.listen(3000,()=>{
    console.log('Servidor Ok');
});*/