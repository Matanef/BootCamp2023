// 🌟 Exercise 1 : Information
// Instructions

// Part I : function with no parameters

//     Create a function called infoAboutMe() that takes no parameter.
//     The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
//     Call the function.


function infoAboutMe(){
    console.log("Hello my name is Matan blah blah blah");
}

infoAboutMe()

// Part II : function with three parameters

//     Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//     The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
//     Call the function twice with the following arguments:
//     infoAboutPerson("David", 45, "blue")
//     infoAboutPerson("Josh", 12, "yellow")


function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`Hello the Person's name is ${personName}, his age is ${personAge} and lastly, his favorite color is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")



// 🌟 Exercise 2 : Tips
// Instructions

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

function calculateTip(){
    let billAmount = Number(prompt("Please enter Bill amount"))
    if (billAmount< 20){
    console.log(`leave 20% which sums up to ${billAmount*0.20}. Total sum including bill ${billAmount*0.20+billAmount}`);
    }else if(billAmount > 50 && billAmount < 200 ){
        console.log(`leave 15% which sums up to ${billAmount*0.15}. Total sum including bill ${billAmount*0.15+billAmount}`);
    }else {
        console.log(`leave 10% which sums up to ${billAmount*0.10}. Total sum including bill ${billAmount*0.10+billAmount}`);
    }
}

calculateTip()