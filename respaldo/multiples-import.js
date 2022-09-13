/*
del archivo que exporta

module.exports = {
    saludar:saludar,
    saludarHolaMundo:saludarHolaMundo,
}

 */
//Para incluir algunos elementos de un modulo:
const {saludar,saludarHolaMundo}= require('./saludos');

console.log(saludarHolaMundo());