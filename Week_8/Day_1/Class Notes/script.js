
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this
// exercise (but not y).
// The input string will only consist of lower case letters
// and/or spaces.

// "The input string will only consist of lower case letters and"

// function countVowels(inputString) {
//     const lowerCaseString= inputString.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
//     for (let char of lowerCaseString) {
//         // Check if the character is a vowel
//         if (vowels.includes(char)) {
//             vowelCount++;
//         }
//     }

//     // Return the total count of vowels
//     return vowelCount;
// }

// const inputString = "how many Vowels are in this sentence count";
// const result = countVowels(inputString);
// console.log(`The number of vowels in the string is: ${result}`);





// function x(a,b){
//     return a + b
// }

// const x1 = function(a, b){
//     return a + b;
// }
// console.log(x1);


// const x3 = (a, b) => a+ b;
// console.log(x3(1,2));


// /**Nested function */

// function x(){
//     let lastname = 'Cohen'
//     function y(name){
//         let a = 10
//         console.log("hello " + name + " " + lastname + " " + age);
//     }
//     return y;
// }

// let hi = x(26);
// hi('Dan');
// x(99)('John')

/** Currying */
// const y = (a) => {
//     return (b) =>{
//         return a +b;
//     };
// };

// console.log(y(5)(6));
// const VAT = 1.17
// const y1 = (a) => (b) => a+b;
// // console.log(y1(5)(6));

// let productPlusVAT = y1(VAT);
// let p1 = productPlusVAT(100)
// let p2 = productPlusVAT(200)
// let p3 = productPlusVAT(300)
// console.log(p1, p2, p3);

/** Compose */

// const x = (a,b) => {
//     return (c) =>{
//         return a(b(c))
//     }
// }

// const x1 = (a,b) => (c) => a(b(c));

// const sum2 = (num) => num * 2;
// const sum = (num) =>num +1;
// let result = x1(sum, sum2)(6);
// console.log(result);


/**Objects */
// let obj = {
//     age: 32,
// }
// let obj1 = new Object();
// console.log(obj);
// console.log(obj1);

// obj.name = "John"
// obj1.car = "Alfa"

// console.log(obj);

// let nameObj = obj["name"]
// let ageObj = obj.age;
// console.log(nameObj, ageObj);

// const {name, age, email} = obj;
// console.log(name, age, email);

// let inputs = {}

//     function handleInput(e) {
//         inputs[e.target.name] = e.target.value
//     }

//     function handleSubmit(e){
//         e.preventDefault();
//         console.log(inputs);
//     }



/** by Value */
//     let a = 5;
//     let b = a;
//     b++
//     // console.log(a);
//     // console.log(b);


// /** by reference */
//     let arr1 = [1,3,4];
// let arr2 [].concat(arr1)   //old method
//     // let arr2 = [...arr1]  new method
//     // let arr2 = arr1;
//     arr2[1] = 5
//     console.log(arr1);
//     console.log(arr2);

//     let obj1 = {a:1, b:5}
//     let obj2 = obj1 

//     obj2.b = 10;

//     console.log(obj1);
//     console.log(obj2);



let obj = {
    a:5,
    b: {
        c:4
    }
}


let obj1 = {...obj}
obj1.a = 10
obj1.b.c = 11
console.log(obj);
console.log(obj1);

// //JSON
// {"a":"value","b":12}
let arr = [
    {name:"Dan",age:22},
    {name:"John",age:32},
    {name:"Marry",age:33},
    {name:"Anne",age:44}
]
console.log(arr);

let jsonArr = JSON.stringify(arr)
console.log(jsonArr);

let arrJson = JSON.parse(jsonArr);
console.log(arrJson);