// let age = 18;
// if(age>20){
//     console.log(`you are ${age} years old`);
// }else{
//     console.log(`you are to young`);
// }

let userAge = prompt('what is your age');

function Keyless(){
    if (userAge<18){
        alert("Sorry, you are too young to drive this car. Powering off");
    }else if (userAge==18){
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }else {
        alert("Powering On. Enjoy the ride!");
    }
}
Keyless()