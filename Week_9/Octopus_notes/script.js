var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

//1. Assigning To Existing Variable Names

var { firstname, lastname, dateofbirth } = employee;
console.log( firstname, lastname, dateofbirth);
//destructure of the object to variables according to the object keys


//2. Assigning To New Variable Names
// we will now set neew names to the variables we extracted from the object:
var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
console.log( fn, ln, dob);

//first we retrieve the object keys with "firstname: " and then we set a new name to the variable "fn"
//we can see that once logging the new variable we are getting the same result.


// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 
var { firstname = 'default firstname', 
      lastname = 'default lastname', 
      country = 'default country' } = employee;
console.log("\n After setting default values")
console.log( firstname, lastname, country);

//here we can see that when failing to read an object key (country since there is no key with that name)
//we are falling back to the set default value.
//this is why when trying to extract the third value we are falling to the default because it does not exist in the original object


//ADVANCED OBJECTS
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
  // expected output: ["a", "b", "c"]
  console.log(Object.values(object1));
  // expected output: ["somestring", 42, false]
  
  console.log(Object.entries(object1));
// expected output: 
// [ [ 'a', 'somestring' ], [ 'b', 42 ], [ 'c', false ] ]

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}


const shopping = [
    ["apple", "$2"],
    ["pear", "$1"],
    ["banana", "$0.77"],
  ];
  
  const shoppingObject = Object.fromEntries(shopping);
  console.log(shoppingObject); // { apple: '$2', pear: '$1', banana: '$0.77' }

  //Exercise:

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

const objKeys = Object.keys(myObj);
const objValues = Object.values(myObj)

for (let i = 0 ; i<objKeys.length; i++){
    const key = objKeys[i];
    const value = objValues[i];

    console.log(`The ${i+1}# key is: ${key} --- The ${i+1}# is ${value}`);
}
