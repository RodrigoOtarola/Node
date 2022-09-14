//const curso = require('./curso.json');

/*console.log(curso.title);*/

let infoCurso = {
    "title":"Node.js",
    "numVisitas": 45642,
    "numLikes": 21123,
    "temas": [
    "JavaScript",
    "Node.js"
],
    "esPublico" : true

}

//console.log(infoCurso);

let infoCursoJSON = JSON.stringify(infoCurso)

console.log(infoCursoJSON);

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);