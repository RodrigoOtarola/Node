//Catch: Funciona cuando la promesa es rechazada.

const estatusPedido = ()=>{
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
    });