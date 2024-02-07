const {readFile, WriteToFile} = require("./filemanager.js")

let file = readFile('Bye_World.txt')
console.log(file);


let newWriting = WriteToFile('Bye_World.txt', `those 
are
new
lines
and this is the writing from the homework: Writing to the file `);
console.log(newWriting);