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
    const html = `
        <div style="display:inline-block; border: 1px solid #000; margin-top: 20px; margin-left:6px; padding:12px">
            <h2 style="display:inline-block;">You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.</h2>
        </div>`;
    document.getElementById('root').innerHTML=html
    // console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`);
};

formElement();

(function(){
    const userName = `John`
    const html2 = `
    <p style ="margin-left: 30px;border: 2px solid #5426">Welcome ${userName}</p>`
    // const html2 = `
    //     <div style="display:inline-block; border: 1px solid #000; margin-top: 20px; margin-left:6px; padding:12px">
    //         <h2 style="display:inline-block;">You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.</h2>
    //     </div>`;
    const profilePic = `
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile" width=25px style="margin-left:45px; margin-top:18px">`
    document.getElementById('navAdd').innerHTML=html2;
    document.getElementById('profilePic').innerHTML=profilePic

})()



// function makeJuice(size) {
//     function addIngredients(firstIngredient, secondIngredient, thirdIngredient){
//         const juiceHtml = `
//         The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, and ${thirdIngredient}`
//         document.getElementById('juiceComplete').innerHTML= juiceHtml
//     }

// addIngredients("Melon", "Pineapple", "Mango");
// }

// makeJuice('medium');



function makeJuice(size) {
    const ingredients  =[];
    
    function addIngredients(firstIngredient, secondIngredient, thirdIngredient){
        ingredients.push(firstIngredient, secondIngredient, thirdIngredient);
        
    }
    function displayJuice(){
        const juiceHtml = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`
        document.getElementById('juiceComplete2').innerHTML= juiceHtml
    }

addIngredients('Apple', 'Orange', 'Carrot');
addIngredients("Melon", "Pineapple", "Mango");
displayJuice()
}

makeJuice('medium');