const fs = require('fs')

const content = fs.readFileSync('./readme.md','utf-8');

const wordCount = content.match(/react/gi ?? []).length

console.log('Palabras React: ',wordCount)