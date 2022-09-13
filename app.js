//Importación de otro archivo, ./ indica que archivos estan en la misma carpeta
const saludo = require('./saludo.js');

//probar impresión, se llama al nombre de export y el nombre de la función
console.log(saludo.saludar('Rodrigo'));