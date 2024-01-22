

//Rest Opperator
// let arr = [10,20,30,40,50];
// const[a,b,c, ...rest] = arr;
// console.log(rest);

// Object

// let obj = {
//     key: 'value',
//     name: 'John',
//     age: 16,
//     single: true,
//     favorites: ['banana', 'kiwi'],
//     address: {
//         city: "Tel Aviv",
//         country: "Israel",
//     },
//     sayHello: function() {
//         console.log("hello");
//     },
// };
// console.log(obj);

// const {
//     age,
//     name,
//     favorites: [b,a],
//     address: {city, country},
//     sayHello,
// } =obj;
//  console.log(age,name,a,b,city, country, sayHello());


// Dynamic Key or Property value shorthand
// let keyname = 'aaa'

//  let obj = {
//     [keyname]: 'value',
//     name: 'John',
//     age: 16,
//     single: true,
//     favorites: ['banana', 'kiwi'],
//     address: {
//         city: "Tel Aviv",
//         country: "Israel",
//     },
//     sayHello: function() {
//         console.log("hello");
//     },
// };

// console.log(obj.aaa, obj["aaa"], obj[keyname]);


// const {
//     age,
//     name,
//     favorites: [b,a],
//     address: {city, country},
//     sayHello,
// } =obj;

// function getInfo({name, favorites: [a, b], sayHello}){
//     console.log(name, a,b, sayHello());
// }
// getInfo(obj);

// //Spread Opperator
// let obj = {a:1,b:2};
// let obj1 = {...obj, c:3};
// console.log(obj);
// console.log(obj1);

// let obj2 = obj;
// obj2.a = 22;
// console.log(obj);
// console.log(obj2);


// //Deep Clone
// let obj4 = {
//     a:1,
//     b:{
//         c:3,
//     },
// };

// let obj5 = {...obj4};
// obj5.b.c = 33

// let obj5 = JSON.parse(JSON.stringify(obj4))
// obj5.b.c = 33
// console.log(obj4);

// let a = 10;
// let b = 20;
// let rest = [30,40,50]

// let c = [a,b, ...rest]
// console.log(c);

//  let obj = {
//     // [keyname]: 'value',
//     name: 'John',
//     age: 16,
//     single: true,
    // favorites: ['banana', 'kiwi'],
    // address: {
    //     city: "Tel Aviv",
    //     country: "Israel",
    // },
    // sayHello: function() {
    //     console.log("hello");
    // },
// };
// console.log(obj);

// for (x in obj){
//     console.log(x,obj[x]);
// };

// // Object.keys 
// let keysArray = Object.keys(obj);
// console.log(keysArray);

// //Object.values
// let valuesArray = Object.values(obj);
// console.log(valuesArray);

// //Object.entries
// let entriesArray = Object.entries(obj);
// console.log(entriesArray);


// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }

// let keysMyObj = Object.keys(myObj);
// console.log(keysMyObj);
// let valuesMyObj = Object.values(myObj);
// console.log(valuesMyObj);

// for (let i = 0; i<keysMyObj.length; i++){
//     const key = keysMyObj[i];
//     const value = valuesMyObj[i]

//     console.log(`The ${i+1} key is: ${key}, The ${i+1} value is : ${value}`);
// }



// const users = {
//     user1: { age: 44, name: "picard" },
//     user2: { age: 12, name: "sisko" },
//     user3: { age: 109, name: "janeway" },
//   };

//   let valuesUsers = Object.values(users);
//   console.log(valuesUsers);

// const filteredUsers = Object.keys(users)
// .filter((key) => users[key].age > 30)
// .map((key) => users[key]);

// console.log(filteredUsers);

// //Ziv's way: 

// const usersKeys = Object.keys(users);
// const usersMore30 = usersKeys.filter((key) => users[key].age >30);
// const arrmap = usersMore30.map(item => ({id:item, ...users[item]}))
// console.log(arrmap);


// let obj = {
//     name: 'John',
//     getName: function() {
//         // console.log("John");
//         return this.name
//     }
// }

// console.log(obj.getName())
// console.log(this);

//Class in Javascript
//in class we can initilize many times
class Animal {
    constructor(nameAnimal){
        this.name = nameAnimal
    }
    makeSound(){
        return this.name + " " +"make a sound";
    }
    setName(value) {
        this.name = value;
    }
    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    constructor(age){
        super('Dog');
        this.age = age
    }
    bark(){
        return 'how how'
    }
    makeSound(){
        return this.name + " " + "barks"
    }
}

const frencie = new Dog()
const frencieOne = new Dog(33)
console.log(frencie.getName());
console.log(frencie.makeSound());
console.log(frencieOne.getName());
console.log(frencieOne.makeSound());

class Cat extends Animal{
    constructor(){
        super("Cat")
    }
}

const catcat = new Cat()
console.log(catcat.getName());
console.log(catcat.makeSound());

// const dog = new Animal();
// const cat = new Animal()
// cat.setName('Cat')
// console.log(cat.name);
// console.log(cat.makeSound());

// dog.setName('Dog');
// console.log(dog.makeSound());
// console.log(dog.name);

// let arr = [];
// arr.push(dog);
// arr.push(cat);
// console.log(arr[0].name, arr[1].name);