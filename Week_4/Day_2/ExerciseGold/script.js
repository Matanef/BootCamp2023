// Exercise 1 : is_Blank
// Instructions

// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false


// function ifBlank(){
//     let stringOrNot;
//     do {
//         stringOrNot = prompt("please enter a string");
//         // console.log(stringOrNot);
//     } while (!isNaN(stringOrNot));
//     console.log(stringOrNot);
//         return true;

// }

// let a = ifBlank();
// console.log(a);

// Exercise 2 : Abbrev_name
// Instructions

// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."


function abbrevName(firstname, lastname){
    let firstNameInitials = firstname[0];
    let lastNameInitials = lastname[0];
    let abbname = `${firstNameInitials}.  ${lastNameInitials}.`
    return abbname
}

let b = abbrevName("Matan", "Efrati");
console.log(b);

// Exercise 3 : SwapCase
// Instructions

// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

function SwapCase(inputString){
    let changeChar ="";
for (let i = 0; i<inputString.length; i++){
    if (inputString[i] === inputString[i].toUpperCase()){
            changeChar += inputString[i].toLowerCase();
    }else {
        changeChar += inputString[i].toUpperCase();
        }
        
}
return(changeChar);

}
let c = SwapCase("This Is A String")
console.log(c);


