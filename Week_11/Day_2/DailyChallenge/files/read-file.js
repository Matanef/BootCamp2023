const fs = require('fs')

const readFile = () =>{
fs.readFile('./file-data.txt', 'utf-8', function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})
}
module.exports = readFile