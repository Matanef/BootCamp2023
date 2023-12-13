// 🌟 Exercise 1: Simple if/else statement
// Instructions

//     Create 2 variables, x and y. Each of them should have a different numeric value.
//     Write an if/else statement that checks which number is bigger.


// let x = 102;
// let y = 103;

// if (x > y){
//     console.log("x is the bigger number");
// } else if (y>x){
//     console.log("y is the bigger number");
// } else {
//     console.log("x and y are equal");
// }

// 🌟 Exercise 2: Chihuahua
// Instructions

//     Create a variable called newDog where it’s value is “Chihuahua”.
//     Check and display how many letters are in newDog.
//     Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
//     Check if the variable newDog is equal to “Chihuahua”
//         if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//         else, console.log ‘I dont care, I prefer cats’



// let newDog = "Chihuahua";
// console.log(newDog.length);

// let newDogUpper = newDog.toUpperCase();
// console.log(newDogUpper);

// let newDogLower = newDog.toLowerCase();
// console.log(newDogLower);


// if (newDog == "Chihuahua"){
//     console.log('I love Chihuahuas, it’s my favorite dog breed');
// } else {
//     console.log('I dont care, I prefer cats');
// }

// 🌟 Exercise 3: Even or Odd
// Instructions

//     Prompt the user for a number and save it to a variable.
//     Check whether the variable is even or odd.
//         If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//         If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

// let userPick = prompt("Please pick a number")
// if (isNaN(userPick)){
//     let userPicknew = prompt("That's not a number, please pick a number");
    
//     if (userPicknew % 2 === 0){
//         alert("x is an even number")
//     }else {
//         alert("x is an odd number");
//     }
// }
/////////////// } else if (userPick !== 0){
///////////////     alert("x is an even number");
/////////////// } else if (userPicknew){

/////////////// }

/////////////// else {
///////////////     alert("x is an odd number");

// let userPick = prompt("Please pick a number")
// if (userPick % 2==0){
//     alert("You picked an even number")
// }else {
//     alert("You picked an odd number")
// }

let userPick = prompt("Please pick a number")




if (isNaN(userPick)){
alert("this is not a number")
userInput = prompt("Enter a number:");
}