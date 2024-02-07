// const arr = [1,2,3,4,5]

// arr.forEach((item)=> {
//     console.log(item);
// });

/** NodeJS Module system - share js files
 * 1. Create a Module and to share
 * 2. NPM - Node Package Manager
 * 3. Core Module - NodeJS Installation
 */

const hello = (name) =>{
    console.log(`hello, ${name}`);
}

const sayHelloToJs = (name)=>{
    console.log(`hello ${name}, welcome to NodeJS`);
}


module.exports = {
    hello,
    sayHelloToJs,
};