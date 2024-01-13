/** functions */

// /** declare a function */

// function showMessege(val1, val2){
//     /**do something */
//     return {msg1:val1, msg2: val2};
// }

// let messege = showMessege('mmm','aaa');
// console.log(messege["msg1"], messege["msg2"]);


// /** bind */

// /**exprestion */

// let a = 7
// const sum = function(a,b){
//     return a+b;
// }

// console.log(a);

// console.log(sum(3,5));

// /**arrow function */
// const hello = (val)=> {
//     return val;
// }

// console.log(hello('dddd'));


/** default values */

// function sum (a=1,b=10){
//     return a+b;
// }

// let sumAB= sum (7);
// console.log(sumAB);

/**blovk scope */
// let x = 5

// {
//     let x = 10
//     console.log(x);
// }

// // console.log(x);

// for (let i = 0; i<5;i++){

// }
// // console.log(i);
// let x = 10
// function sum(){
//     let x= 5
//     console.log(x);
// }
// sum()
// console.log(x);

// function x(){
//     let y = 7;
//     let y = 1;
//     console.log(y);
  
// }

// x()

/**ternary operator */

let a =9 
// let c; 
if (a== 8){
    // a=10;
}else {
    // c=5;
}
// console.log(c);


// let c= (a==9) ? 10 :5;
// console.log(c);

// let b= 4;
// let d = 0
// let c= (!(a==9)) ? (d==0 ) ? -10 :-20: b==5 ? 8: -1 ;
// console.log(c);

// console.log((true) ? 10 : 5);

/**template string */
// let name = 'John'
// let email = 'jjj@gmail.com';

// console.log('Name: ' + name + '\nEmail:' + email);
// console.log(`Name: ${name} 
// Email: ${email}`);

/** forEach */

let arr = ['John', 'Marry', 'Dan','Anne', 'Jacob'];
arr.forEach((item,indx, arr1)=> {
    console.log(item,indx);
    arr1[indx] = item + "#####"
})

console.log(arr);