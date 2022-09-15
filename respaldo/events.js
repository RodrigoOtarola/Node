//Modulo eventEmitter.
const EventEmitter = require('events');

console.log(EventEmitter);

//event
const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

//Llamada método on
emisorProductos.on('compra',()=>{
    console.log('Se realizo una compra');
});
emisorProductos.emit('compra');

const emisorProductos = new EventEmitter();

//Llamada método on
emisorProductos.on('compra',(total, numProductos)=>{
    console.log(`Total de la compra: $${total}`);
    console.log(`Numero de productos: ${numProductos}`);
});
//Emite evento
emisorProductos.emit('compra','500',10);