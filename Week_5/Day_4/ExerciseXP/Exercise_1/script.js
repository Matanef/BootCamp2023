// function HelloWorld(){
//     alert('Hello World')
// }
// // HelloWorld()
// setTimeout(HelloWorld, 8000)

// let divcontainer = document.getElementById('container');

// function appPara(){
// const newPara = document.createElement('p');
// newPara.innerText = "Hello World";
//     divcontainer.appendChild(newPara);
// }

// setTimeout(appPara, 2000);

let divcontainer = document.getElementById('container');
const clearButton = document.getElementById('clear');
let intervalId;

function newAppPara(){
    const newPara = document.createElement('p');
    newPara.innerText = "Hello World";
    divcontainer.appendChild(newPara);
    console.log(intervalId);
    if (divcontainer.childElementCount===5){
        clearInterval(intervalId);
    }
};

intervalId = setInterval(newAppPara, 2000);
clearButton.addEventListener('click', function(){
    clearInterval(intervalId);
});
