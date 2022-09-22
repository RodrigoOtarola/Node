//Modulo URL:
const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordener=vistas&nivel=1');

console.log(miURL.hostname);//Nombre del host.
console.log(miURL.pathname);//Nombre de camino.
console.log(miURL.searchParams);//Parametros Query.