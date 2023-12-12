

// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


let person1 = {
    userName: "matan",
    passWord: "12345"
};

let person2 = {
    userName: "Sam",
    passWord: "12345"
};

let person3 = {
    userName: "Bill",
    passWord: "12345"
};


let dataBase = [person1];
console.log(dataBase);

// let newsfeed = [person1, person2, person3];
// console.log(newsfeed);

let newsfeed = [
    {username: "Matan", timeline: " 1984-2023"},
    {username: "Sarah", timeline: " 1984-2023"},
    {username: "Greg", timeline: " 1984-2023"},
];

console.log(newsfeed[1].username);