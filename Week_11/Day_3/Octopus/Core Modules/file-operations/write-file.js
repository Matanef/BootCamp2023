const fs = require('fs');

const newData = `somethign something
darkside,
something something complete
`
fs.writeFile('output.txt',newData, function(err){
    if(err){
        console.error(err);
    }else{
        console.log('Write operation complete.')
    }
});