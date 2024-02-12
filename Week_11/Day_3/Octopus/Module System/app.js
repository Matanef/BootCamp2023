// const greeting = require("./greetings.js")
// const person = require("./person.js")

//another way of extracting the values and information from the greeting.js file by deconstruction
// const { name, car } = require("./person.js");

// const hello = require('./hello.js')

// const name = "Mike Taylor";

// greeting(name);


// The person.js file exports an object containing both name and car.
// to accesss it we will use the person.name method to extract the information

// console.log(`Extracting both values: person name is ${person.name} and he drives a ${person.car}`);

// here we are extracting the information we exported individually.
// we will see that the extraction method remains the same:

// console.log(`Extracting individual values: person name is ${person.name} and he drives a ${person.car}`);



//since we are deconstructing the values from greeting.js we don't need to use the object method of person.name.
// console.log(name, car);

// hello()
/**when running the file app.js we can see the following output:
 * 
 * Hello Node!
 * Hello World
 * 
 * that occur since the "require execute the entire module"
 */



// here we are using the ES6 syntax (the new way).
// notice we are using import instead of require.
// in addition we added to the package.json the following line: "type": "module"

// import { greeting } from './greetings.js';

// const name = "Matan";
// const car = "Subaru"
// console.log('here we are using the variables we set above in the function calling');
// greeting(name, car);
// console.log('here we are calling the function with different values in the call and recive a modified output.');
// greeting("Dana", "Seat")

const greeting = await import("./greetings.js");

const name = "Mike Taylor";
greeting(name);