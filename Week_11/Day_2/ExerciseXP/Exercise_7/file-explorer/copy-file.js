const fs = require('fs');

fs.readFile('source.txt', "utf-8", function(err, data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    fs.writeFile('destination.txt', data, function(err){
    if(err){
        console.error(err);
    }else{
        console.log('Data was written in destination.txt');
    }
})
    }
});

