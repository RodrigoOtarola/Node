//Creación del archivo index.html

//Modulo fs: contiene funcionalidad muy util para trabajar con el sistema de archivos.
/*operaciones utiles: Leer, modificar, copiar, eliminar y renombrar.

 Importante: todos los métodos son asíncronos, se ejecutan después de los metodos sincronos.
    **Se puede escoger versiones sincronas agregando Sync a sus nombres ej: fs.renameSync().
 */

//Metodo para leer archivo sintaxis fs.readFile(nombreArchivo, cdificacione, fuction)
import fs from "fs";

fs.readFile('inde.html','utf-8',(err, contenido)=>{
    if(err){
        //console.log(err);
        throw err;//Detiene la ejecución de la terminal, ejecuta hasta que detecta error.
    }else{
        console.log(contenido);
    }
    console.log('Mensaje.....');
});

//Método para cambiar nombre, sintaxis fs.rename(nombreArchivo,nombreNuevo,function)
fs.rename('main.html','index.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('Nombre cambiado exitosamente.');
});

//Metodo para agregar contenido al final del archivo, sintaxis fs.appendFile(nombreArchivo, tag html, function post proceso)
fs.appendFile('index.html','<p>Hola</p>',(err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo Actualizado');
});

//Reemplazar contenido del archivo, sintaxis fs.writeFile('index.html','Contenido nuevo', function post proceso).
fs.writeFile('index.html','ContenidoNuevo',(err)=>{
    if(err){
        throw err;
    }
    console.log('Contenido reemplazado');
});

fs.unlink('main.html',(err)=>{
    if (err){
        throw err;
    }
    console.log('Archivo eliminado con exito');
});