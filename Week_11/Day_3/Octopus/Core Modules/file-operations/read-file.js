const fs = require('fs');

fs.readFile('output.txt', "utf-8", function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})

