// const greeting = function (name) {
//     console.log(`Hello ${name}, welcome to NodeJS`);
//   };

//   module.exports = greeting;


//ES6 syntax:
//to use the ES6 syntax we will ned to create a package.json file that will include "type": "module": 

export function greeting(name, car) {
    console.log(`Hello ${name}, welcome to NodeJS, test ${car}`);
  }

export const name = "Mike Taylor";
export const car = "Ford Mustang";