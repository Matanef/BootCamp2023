// Exercise 1 : is_Blank
// Instructions

// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false


function ifBlank(){
    let stringOrNot;
    do {
        stringOrNot = prompt("please enter a string");
        // console.log(stringOrNot);
    } while (!isNaN(stringOrNot));
    console.log(stringOrNot);
        return true;

}

let a = ifBlank();
console.log(a);

// Exercise 2 : Abbrev_name
// Instructions

// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."


function abbrevName(firstname, lastname){

}