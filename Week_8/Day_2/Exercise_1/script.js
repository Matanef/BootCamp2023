// 🌟 Exercise 1 : Find the sum
// Instructions

//     Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a+b;
console.log(sum(11,4));


// 🌟 Exercise 2 : Kg and grams
// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

//     First, use function declaration and invoke it.


function convert(input) {
    return input*1000
}

const converted = convert(2)
console.log(converted);

//     Then, use function expression and invoke it.
const convert2 = function (input){
    return input * 1000
}
const weight = convert2(3)
console.log(weight);

//     Write in a one line comment, the difference between function declaration and function expression.


//the main difference is that when working with declaration we can call the func before declaring it while wirh expresion  we can only call it after the func was declared

//     Finally, use a one line arrow function and invoke it.
const convert3 = (input) => input*1000
console.log(convert3(6));


// 🌟 Exercise 3 : Fortune teller
// Instructions

//     Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
//     The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
function formElement() {
    document.getElementById('fortuneForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const jobValue = document.getElementById('job').value;
        const locationValue = document.getElementById('location').value;
        const partnerValue = document.getElementById('partner').value;
        const childrenValue = document.getElementById('children').value;

        fortune(jobValue, locationValue, partnerValue, childrenValue);
    });
}

function fortune(job,location,partner,children) {
    console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`);
}

formElement();








