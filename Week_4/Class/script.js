//function

// function function_name(){

//}
// function a(){
//     console.log("Hello students of Javascript");
// }
// function b(){
//     // a();
//     // a();
//     // a();
//     for (let i = 0; i <10 ;i++){
//         a()
//         // console.log("");
//     }
//     }

// b()

function greeting(name, smail){
    console.log('Hello, ' +name + ' ' +'Welcome to JS lesson your email is ' + smail);
}

// greeting('John')
// greeting('Marry')
// greeting('Anna')

const students = ["John", "Marry", "Alla", "Ann", "Dan"];
const email = ["John@gmail.com", "Marry@gmail.com", "Alla@gmail.com", "Ann@gmail.com", "Dan@gmail.com"];

for (let i = 0; i < students.length; i++){
    greeting(students[i], email[i])
}


function sum(a, b){
    console.log(a+b);
}
sum(10, 15)
sum(100,150000)



// function hello(a, b = "2"){
//     console.log('Hello ' + a + ' & hello ' +b);
// }

// hello('John', 900)

//Local variables

let age = 15;

function myAge() {
    let myAge = 16
    console.log("form the function ==> " + age, myAge);
}

myAge()

console.log("outside ==>" + age);