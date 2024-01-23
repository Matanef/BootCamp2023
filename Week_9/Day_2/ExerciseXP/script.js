const callMe = () => {
    date = new Date
    return date;
};
const print = callMe();
console.log(print);

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

function displayStudentInfo(objUser){
    const {name, age, location: {country, city,coordinates: [lat, lng] }} = person;
    let inputName = objUser
    console.log(objUser);
    const {first, last} = objUser
    console.log(`Your full name is ${first} ${last}`);

}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

const users = { user1: 18273,
                user2: 92833,
                user3: 90315 
            };
const {user1, user2, user3} = users;
console.log(user1);
const usersKeys = Object.keys(users)
console.log(`This is users keys ${usersKeys}`);
console.log(usersKeys);
console.log();
console.log(Object.values(users));
const usersEntries = Object.entries(users)
console.log(`this is user entries ${usersEntries}`);
console.log(usersEntries);


function arrangeTOarray(){
    for(let [key,value] of Object.entries(users)){
        console.log(key, value*2);
    }
}
arrangeTOarray()


const arr1Array = Object.entries(users).map(([name, value]) => `[${name}:${value}]`);
console.log(arr1Array);

const arr2Array = Object.entries(users).map(([name, value]) => `[${name}:${value*2}]`);
console.log(arr2Array);

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
  // Object

  class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
const newLab = new Labrador()
console.log(newLab);


// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}

//since the === operator for objects checks reference equality, 
//not content equality both will be false.
//for example the first option, although both sides are [2] 
//but each of them points to a different place in the memory.

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;

//referened so the result should be 4
console.log(object2.number)
console.log(object3.number)
// setting a new value so the result should be 5
console.log(object4.number)


class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }
};

class Mammal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
    }
    sound(sound) {
        return `${this.name} the ${this.type} is in this color ${this.color} and makes this sound ${sound}`
    }
}
const newMammal = new Mammal("Lanou", "Dog", "Black");
console.log(newMammal.sound(`"Woof Woof"`));