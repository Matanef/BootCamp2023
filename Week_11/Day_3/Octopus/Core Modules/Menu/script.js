const fs = require('fs');

// fs.readFile('menu.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data);
// });

// console.log("-----Restaurant Menu---------", '\n',);


//writing

// fs.writeFile('Testfile.txt', "Hello World", function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Write operation complete.');
//     }
// })


//Overwrite
// const newContent = "House Salad"
// fs.writeFile('menu.txt', newContent, function(err){
//     if(err){
//         console.error(err);
//         return
//     }
// });

// //read
// fs.readFile('menu.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }

//     console.log(data)
// });

// console.log("-----Restaurant Menu---------", '\n',);


//Append to file

// const newInsert = "Fried Rice"
// fs.appendFile("menu.txt", '\n' +newInsert + '\n', function(err){
//     if(err){
//         console.error(err);
//         return
//     }
// })
// fs.readFile('menu.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }

//     console.log(data)
// });

// console.log("-----Restaurant Menu---------", '\n',);




//Listing the files in a specific directory

// fs.unlink("Testfile2.txt", function(err){
//     console.log("Delete complete");
// });

// fs.readdir('./', (err, files) => {
//     if (err) {
//         console.error(err)
//         return
//     }

//     console.log('files: ', files)
// })

fs.stat('Testfile.txt', function(err, stats){
    if (err) {
        console.error(err)
        return
    }
    console.log('File size in Bytes:', stats.size);
    console.log('File permissions:', stats.mode);
    console.log('Last modified:', stats.mtime);
    console.log('Last accessed:', stats.atime);
    console.log('File creation time:', stats.birthtime);
})


