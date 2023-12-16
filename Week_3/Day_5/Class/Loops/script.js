//Loops

// for (let i = 0;i < 11; i++){
//     console.log(i);
// }

// let colors =["red","yellow","black","pink","white"];

// for (let i= 0; i<4;i++){
//     console.log(i);
//     console.log(colors[i]);
// }

// for (let i= 0; i<colors.length;i++){
//     console.log(i);
//     console.log(colors[i]);
// }



//Exercise 1

// for (let i=0; i <= 15; i++){
//     if (i % 2===0){
//     console.log(i + " is an even number");
// } else {
//     console.log(i + " is an odd number")
// }
// }

// let person ={
//     fName: "John",
//     lName: "Doe",
//     age: 25,
// };

// for (let key in person){
//     console.log(key);
// }



//for/ Of Looping through Array:

// let colors =["blue","yellow","red","pink","white"];
// let str = "Hello my name is Matan"
// //through Array:
// for (let element of colors){
//     console.log(element);
// };

// //for strings:
// for (let element of str){
//     console.log(element);
// };


//while Loops


// let n = 0
// while (n<3){
// n++,
// console.log(n);
// }

// let username = prompt("Please enter the correct username");

// while (username != "admin"){
//     username = prompt("that is the wrong username");
// }
// console.log("Welcome");
// alert("Welcome");

// //Do while
// let username;

// do{
//     username = prompt("please enter the correct username");
// } while (username !== "admin")

// for (let i =0; i<10 ; i++){
//     console.log(i+ "before");
//     console.log(i);
//     if(i===3){
//         break;
//     }
//     console.log(i + "after");
// }

// for (let i = 0; i < 10 ; i++){

//     if(i===3 || i===7 || i===8){
//         continue;
//     }
//     console.log("The Number is " +i);
// }

let names= ["john", "sarah", 23, "Rudolf",34];

// for (let i=0; i < names.length; i++){
//     if (typeof names[i] === "string"){
//         if (names[i][0] !== names[i][0].toUpperCase()){
//         names[i] = names[i][0].toUpperCase() +names[i].slice(1)
//      } 
//     console.log(names[i]); 
// }
// }

for (let i=0; i < names.length; i++){
    if(typeof names[i] !== "string"){
        continue;
    }else{
        console.log(names[i]);
    }
}

