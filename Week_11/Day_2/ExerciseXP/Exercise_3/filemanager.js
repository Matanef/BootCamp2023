const fs = require('fs')

const readFile = (filename)=> {
    return fs.readFileSync(filename, 'utf8')
}
// let file = readFile('justText.txt')
// console.log(file);


const WriteToFile = (filename, addTxt)=> {
    fs.writeFileSync(filename, addTxt)
    console.log("file was saved");
    return filename
}

// let newSavedFile = WriteToFile('justText.txt', `
// 'wow wow wow wow wow'
// i think i'll add more lines.
// and more lines.`)
// console.log(newSavedFile);

module.exports = {
    readFile,
    WriteToFile,
}