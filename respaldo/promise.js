//Promises:
const promesaCumplida = true;
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
miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);

//Practica promesas carrito de pizza.
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
    .then(null,(mensajeDeError) =>{
        console.log(mensajeDeError);
    });