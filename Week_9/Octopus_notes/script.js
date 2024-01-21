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

const address = {
    street: 'Evergreen Terrace',
    number: '742',
    city: 'Springfield',
    state: 'NT',
    zip: '49007',
  };
  
const { street: s, city: c, zip: z } = address;
console.log(s) //Evergreen Terrace
console.log(c) //Springfield
console.log(z); //49007


const { street, city } = address;
console.log(street) //Evergreen Terrace
console.log(city) //Springfield
  
  //Other Example
let {e, f} = { e: 10, f: 20 };
console.log('e: ',e); // e: 10
console.log('f: ',f); // f: 20

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// We define 3 local variables: name, maths, science
// Default value to the variable science, in case the key doesn't exist in the object student
const { name, scores: {maths,english, science = 50} } = student;

console.log(`${name} scored ${maths} in Maths, ${english} in English and ${science} in Elementary Science.`);
// John Doe scored 74 in Maths and 50 in Elementary Science.

//essentially, once we are able to reach the keys or values even in a nested object we can just pick the variables and place them as we like.


//Object Destructuring Used As An Assignment To A Function
// Without Destructuring
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}

// With Destructuring
// function displaySummary({name, scores: { maths = 0, english = 0, science = 0 }}) {
//     console.log('Hello, ' + name);
//     console.log('Your Maths score is ' + maths);
//     console.log('Your English score is ' + english);
//     console.log('Your Science score is ' + science);
// }

displaySummary(student);

let myRandomObject = {
    name: 'Matan',
    age: 39,
    fruits: ['apple', 'banana', 'orange'],
    nested: { nestedKey: 'nestedValue', nestedKey2: 'nestedValue2' },
    trueOrFasle: true,
    anything: null,
    date: new Date()
};

console.log(myRandomObject);

function displayMatanObject(myRandomObject){
    console.log(`hello ${myRandomObject.name}`);
    console.log(`Your age is: ${myRandomObject.age}`);
    console.log(`You need to buy: ${myRandomObject.fruits}`);
    console.log(`This is a nested objects first key value: "${myRandomObject.nested.nestedKey}"`);
    console.log(`This is a nested objects second key value: "${myRandomObject.nested.nestedKey2}"`);
    console.log(`True or False value: ${myRandomObject.trueOrFasle}`);
    console.log(myRandomObject.anything);
    console.log(myRandomObject.date);
}

displayMatanObject(myRandomObject)

function displayMatanObject2({name, age, fruits, nested: {nestedKey ,nestedKey2, nestedKey3 = 0}, trueOrFasle, anything,date}){
    console.log(`hello ${name}`);
    console.log(`Your age is: ${age}`);
    console.log(`You need to buy ${fruits}`);
    console.log(nestedKey2);
    console.log(trueOrFasle);
    console.log(anything);
    console.log(date);
}
displayMatanObject2(myRandomObject)

// let newObj = {...'abc'}
// console.log(newObj) //{ '0': 'a', '1': 'b', '2': 'c' }

let newObj = {...['a', 'b']}
console.log(newObj) //{ '0': 'a', '1': 'b' }

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin);






let myCar = {
    color : 'blue',
    details : {
      plateNumber: 123,
      name : "Ford"
    }
  }
  console.log(myCar);
  console.log(".");
  console.log(".");
  let myNewCar = {...myCar}
  console.log("myNewCar : ", myNewCar) 
  // myNewCar :  
  // { 
  //      color: 'blue', 
  //      details: { plateNumber: 123, name: 'Ford' } 
  // }
  
  // SHALLOW COPYING
  myCar.color = "red"
  console.log("myNewCar.color :", myNewCar.color)
  // myNewCar.color : blue -- UNCHANGED
  console.log("myCar.color :", myCar.color)
  // myCar.color : red -- CHANGED
  
  // DEEP COPYING
  myCar.details.plateNumber = 345
  console.log("myNewCar.details.plateNumber :", myNewCar.details.plateNumber)
  // myNewCar.details.plateNumber : 345 -- CHANGED
  console.log("myCar.details.plateNumber :", myCar.details.plateNumber)
  // myCar.details.plateNumber : 345 : red -- CHANGED