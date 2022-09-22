//Sin Async Await:
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
    return new Promise((resolve)=>{
        console.log('Procesando respuesta');
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(()=>{
            resolve('Disfruta tu producto');
        },4000);
    })
}
//
ordenarProducto('taza')
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
    })

//Con Async Await:
async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}
realizarPedido('taza');