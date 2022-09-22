//Routing: Manejar solicitudes del cliente.
const http = require('http');

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
});