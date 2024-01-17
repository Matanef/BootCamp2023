// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


// function sumAmount(n) {
//     let numStr = n.toString()
//     let sum = 0;
//     for (let i = 0 ; i>9 ; i--){

//     }

// }

// function oneDigit(num){
//     let arr = new String(num).split('');
//     console.log(arr);
//     let sum = 0;
//     for(i in arr){
//         sum += Number(arr[i])
//     }
//     if (sum < 10){
//         return sum;
//     }
//     return oneDigit(sum)
// }
// console.log(oneDigit(493193));



// function map(arr){
//     let newArray = [];
//     for(item of arr){
//         newArray.push(item*2);
// }
// return newArray
// }
// //     arr.forEach((item,i,arr) => {
// //         arr[i] = item *2;
// //     });
// //     return arr
// // }

// console.log(map([1,2,3,4]));


// let arr = [1,2,3,4]
// let newArr = arr.map((item,index) => {
//     if (item >= 3) return item *index;
// });
// console.log(newArr);



// let users = ["eli", "adam", "anne"]
// let newusers = users.map((item) => {
//     return item + "@gmail.com"
// })


// let users = ["eli", "adam", "anne"]
// let newusers = users.map((item) => {
//     // return {name:item, email:item + "@gmail.com"}
//     return [item, item + "@gmail.com"]
// })
// console.log(newusers);


// let numArr = [1,2,3,4];
// let newNumArr = numArr.map((item) => {
//     if (item > 3)
//     return [item]
// })
// console.log([newNumArr]);
/////////////////////////////////////////////////////////////
// function filter(arr) {
//     let newArr = [];
//     for (item of arr) {
//       if (item > 3) {
//         newArr.push(item);
//       }
//     }
//     return newArr;
//   }
//   console.log(filter([0, 1, 1, 2, 3, 5, 8]));

// ////////////////////////////////////////////////////////////
//   let arr = [0,1,1,2,3,5,8];

//   const newArr = arr.filter((item) =>{
//     return item > 3;
//   });
// console.log(newArr);


// const arrObj = [
//     {id: 1, name: 'John', email: 'jjj@gmail.com'},
//     {id: 2, name: 'Mor', email: 'mmm@gmail.com'},
//     {id: 3, name: 'Marry', email: 'marry@gmail.com'},
//     {id: 4, name: 'Or', email: 'or@gmail.com'},
// ]

//name that include 'o'

// const newArrObj = arrObj.filter((item) =>{
//     if (newArrObj.name.string.include('o'))
//   return [item] ;
// });
// console.log(newArrObj);

// const newArray2 = arrObj.filter((item) => {
//     return item.name.toLowerCase().includes('o');
// });
// console.log(newArray2);

let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

// const newemployees = employees.filter((employee) => {
//     return employee.age > 26;
// });
// console.log(newemployees);

function render(arr){
const html = employees.map((item) => {
    return `<div style="display:inline-block; border: 1px solid #000; margin-left:6px; padding:12px">
    <h2 style="display:inline-block;">${item.firstname} ${item.lastname}</h2>
    <h4>${item.age}</h4>
    <p>${item.joinedDate}</p>
    </div>`;
});
console.log(html.join(''));
document.getElementById('root').innerHTML= html.join('')
}
render(employees)

/**  Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117

*/

const numbArr =  [2, 5, 10,100];
// let newNumArr = numbArr.map((item) => {
//     if (item > 3)
//     return [item]
// })

// function reduce(numbArr){
//     let sum = 0;
//     numbArr.forEach(element => {
//         sum+=element;        
//     });
//     return sum;
// }


// console.log(reduce(numbArr, 6));

const sum = numbArr.reduce((total, item) => {
    return total + item
})

console.log(sum);


// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function oneDigit(num){
    const numbers = new String(num).split('');
    const digits = numbers.reduce((total, num) =>{
    return total + Number(num)
    },0)
    return(digits< 10)? digits: oneDigit(digits)
}

console.log(oneDigit(493193));




const newNumArr = [4,9,3,1,9,3]
const sum2 = newNumArr.reduce((item) => {
    let sum = 0;
    if(sum>9)
    return item
    sum += item
})

console.log(newNumArr);
