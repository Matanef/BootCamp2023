// console.log(Boolean(1 < 2));

// console.log(Boolean(1 === "1"));
// console.log(Boolean(1 !== "1"));

// console.log(Boolean(1 === 1 && 1 === 2));
// console.log(Boolean(1 === 1 || 1 === 1));


// let x = 5;
// x++;
// console.log(x);

//Conditionals

// let age = 18;
// if (age > 18) {
// console.log("You are a big man")
// };

//if...  Else

// let age = 18;
// if (age > 18) {
// console.log("You are a big man")
// }else {
//     console.log("You Are younger or equal to 18")
// }


//Else if...

// let age = 18;
// if (age > 18) {
// console.log("You are a big man");
// } else if (age <18){
//     console.log("You are a small human");
// }else {
//     console.log("you are a medium human");
// }

// let username = prompt("What is your username");

// if (username=="Bob"){
//     console.log("Welcome Bob");
// }else if(username == "Sam"){
//     console.log("Welcome Sam");
//     }else {
//         console.log("Welcome New User");
//     }

// let age = prompt("What is your Age");

// if (age > 18) {
// alert("Powering On. Enjoy the ride!");
// } else if (age < 18){
//    alert("Sorry, you are too young to drive this car. Powering off");
// }else {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

// Switch case

// let fruit = "Oranges";

// switch (fruit){
//     case 'Oranges':
//         console.log('Oranges are $0.59 per kilo');
//         break
//     case 'Mangoes':
//     case 'Papayas':
//         console.log('Mangoes and Papayas are $2.79 a kilo');
//         break;
//         default:
//             console.log('Sorry we ran out of ' + fruit);
// }


//(array)
// let colors=["red","blue","green"]


//Objects
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyecolor: "Blue",
// };

// console.log("The person name is " +person.firstName + " " + person.lastName);

// console.log(person["firstName"]);


let perrson = {
    firstName: "John",
    lastName: "Doe"
};

console.log(perrson);


perrson.eyeColor = "Blue";
console.log(perrson);

delete perrson.lastName;
console.log(perrson);
