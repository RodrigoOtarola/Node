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
// export, module.exports.saludar(nombreCreado) = saludar() function a exportar
module.exports.saludar = saludar();
//console.log(module.exports);
