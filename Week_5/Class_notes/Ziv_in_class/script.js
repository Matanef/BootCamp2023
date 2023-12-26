// let mainDiv = document.getElementById(`main`);
// console.log(mainDiv);

// let divs = document.getElementsByTagName("div");
// console.log(divs[0]);

// let headers = document.getElementsByClassName('header');
// console.log(headers[0]);


//DOM events

const div = document.getElementById("root");
const innerDiv = document.getElementById("root")
const innerButton = document.getElementById("root")

div.addEventListener('click', divclick, true);
innerDiv.addEventListener('click', innerDivclick, true);
innerButton.addEventListener('click', innerButtonclick, true);

function divclick(){
    console.log("root");
}
function innerDivclick(){
    console.log("main");
}
function innerButtonclick(){
    console.log("button");
}
// const root = document.getElementById("root");

// const but = document.createElement("button");

// but.innerText = "Click Me!!";

// but.addEventListener('click', function(event){
//     root.style.backgroundColor = "yellow";
//     alertUser()
// })

// root.appendChild(but);


// function alertUser(){
//     root.innerText = "bg change to yellow"
// }

// function handleClick(){
//     console.log("hey");
// }

// function handleInput(event){
//     console.log(event.target.value);
// }

// function handleEnter(e){
//     e.target.style.backgroundColor = "pink"
// }

// function handleLeave(e){
//     e.target.style.backgroundColor = "";
//     e.target.style.border = "1px sooid red"
// }