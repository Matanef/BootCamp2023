const fs = require('fs')


const readFile = (filepath) =>{
fs.readFile(filepath, 'utf-8', function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})
}
module.exports = readFile