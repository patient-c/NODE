const fs = require('fs')

const data = fs.readFileSync('./readme.md','utf-8');

const newData = data.replace(/React/ig,'Angular') // Se cambia todas las palabras de React (sin case sensitive) por Angular

fs.writeFileSync('readme-angular.md',newData) // Escribimos el nuevo archivo nuevo con los cambios realizados

console.log(data)