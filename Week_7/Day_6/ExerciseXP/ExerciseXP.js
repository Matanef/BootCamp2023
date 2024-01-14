// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

//we are setting 'a' as 5 but then conditioning it that if a > 1 then it equals 3
//result is 3

// if we will use 'const' instead of 'let' we won't be able to reassign a as 3


// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// we are declaring a as 0 in th global sscope and then defining a equals to 5 inside funcTwo.
// when w are calling a in funcThree we son't connect it in anyway to funcTwo meaning that when
// calling funcThree we are displaying the a set in the global scope

// funcThree()
// funcTwo()
// funcThree()


// here we can cleearly see what is happening, when calling funcThree the result is 0 and when calling funcTwo the result is 5.
// if we will instead of 'let' use const the result will not change and when calling on funcTwo we will recieve an error 
//indicating that the value cannot be reassigned

// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }


// funcFour()
// funcFive()

// the instruction are not clear, should i comment out the funcTwo and funcThree before running the new functions?
//if i don't comment it out the alert shows: "inside the funcFive function 0"
//if i comment them out the result is then: "inside the funcFive function hello "

//if i analyze both of the exampls:

//1. when not commenting out: the alert will show the global scope 'a' meaning a equals to zero and we can see
// that funcFour cannot reassign a value to a


//2. if we do comment it out we: we are assigning the string value "hello" as global variable and using it inside funcFive
//i had to google this out but using window.* will assign this variable to the global scope.

// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// funcSix()

//we indeed have a global scope variable a=1; however we are reassigning a string value to 'a' inside funcSix
// and alerting using the value inside the function because we are using the alert inside the function.

// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// again, when calling the variable inside the block (this time it's an if block and in the above it was function block)

//inside the value will be 5 and outside it will be 2



//🌟 Exercise 2 : Ternary Operator

// function winBattle(){
//     return true;
// }

//Transform the winBattle() function to an arrow function.

// const winBattle = () => true;

// const experiencePoints = winBattle() ? 10 : 1;

// console.log(experiencePoints);


// const isString = (value) => typeof value  == 'string'
// console.log(isString('hello')); 
// console.log(isString([1, 2, 4, 0]));


// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index)=> {
//     console.log(`${index + 1}# choice is ${color}.`);
// });
// if (colors.includes("Violet")) {
//     console.log("Yeah");
// } else {
//     console.log("No...");
// }

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//     const ordinalIndex = index < 3 ? index + 1 : 0; // Use 0 for "th" after 3rd
//     const ordinalSuffix = ordinal[ordinalIndex];
//     console.log(`${index + 1}${ordinalSuffix} choice is ${color}.`);
// });

// const hasViolet = colors.includes("Violet");
// console.log(hasViolet ? "Yeah" : "No...");



let bankAmount = 1000;
const VATPercentage = 17;
const expenses = ["+200", "-100", "+146", "+167", "-2900"];
const calculateVAT = (amount) => {
    const VAT = (amount * VATPercentage) / 100;
    return amount + VAT;
};

const expensesWithVAT = expenses.map((expense) => calculateVAT(parseFloat(expense)));
expensesWithVAT.forEach((expense) => {
    bankAmount += expense;
});


console.log(`Your bank account standing at the end of the month is: ${bankAmount}`);
