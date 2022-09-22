//Servidor con Node.js, primero se debe importar el modulo
const http = require('http');

//Definir constante para guardar servidor.
const servidor = http.createServer((req, res)=>{
    //Proceso
    res.end('Hola Mundo');
});

const puerto = 3000;

//Para configurar puerto, 2do parametro para pasar argumentos, se debe iniciar servidor
servidor.listen(puerto,()=>{
    console.log(`Servidor OK, escuchando en el puerto ${puerto}`);
});