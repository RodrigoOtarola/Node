//Importación de otro archivo, ./ indica que archivos estan en la misma carpeta
const saludos = require('./saludos.js');

const {saludarHolaMundo, saludar} = require("./saludos");

//probar impresión, se llama al nombre de export y el nombre de la función

console.log(saludo.saludar('Rodrigo'));
console.log(saludo.saludarHolaMundo(''));
