/*function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Rodrigo'));*/

/*Modulo: Funcionalidad organizada en uno o varios archivos JS que puede ser reutilizada en una aplicacion.

 - Ventajas: Evita repeticio del código, reutilizar el código, es más facil encontrar y corregir bugs
            Es más facil modificar el código y más facil de agregar nuevas funcionalidades.
 */

//Creacion de modulo:

function saludar(nombre) {
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return 'Hola Mundo';
}
// export, module.exports.saludar(nombreCreado) = saludar() function a exportar
/*module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;*/

//export com arreglo para pasar más funciones
module.exports = {
    saludar:saludar,
    saludarHolaMundo:saludarHolaMundo,
}




