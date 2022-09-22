//Request y response

const http = require('http');

const servidor = http.createServer((req,res)=>{
    //Request: solicitud del cliente.
    console.log('===> req (solicitud)');
    console.log(req.url);
    console.log(req.method);
});

const puerto = 3000;

servidor.listen(puerto,()=>{
    console.log('Servidor OK');
})