let formTag = document.querySelector('form');
console.log(formTag);
let form = document.forms[0]
console.log(form)

let inputOne = document.getElementById('fname');
let inputTwo = document.getElementById('lname');
let submitButton = document.getElementById('submit');

console.log(inputOne, inputTwo)
console.log(inputOne);
console.log(inputTwo);
console.log(submitButton);

for (let i =0; i<form.length; i++){
    let formElements = form.elements[i];
    console.log(formElements);

}

let inputName1 = document.getElementsByName("firstname")
console.log(inputName1);
let inputName2 = document.getElementsByName("lastname")
console.log(inputName2);



formTag.addEventListener("submit", function(event){
    event.preventDefault(); //so the page will not change.
    const firstNameValue = inputOne.value.trim();
    const lastNameValue = inputTwo.value.trim();

    if (firstNameValue!=='' && lastNameValue!==''){
        for (let i =0; i<event.target.elements.length-1 /*the -1 is so that the Submit bottun won't show*/; i++){
            let currentInfo = event.target.elements[i];
            let liElement = document.createElement("li");
            let liText = document.createTextNode(currentInfo.value);
            liElement.appendChild(liText);
            let ulElement = document.querySelector('ul')
            ulElement.appendChild(liElement);
        }
        // const userAnswerList = document.querySelector('.userAnswer');

        // const firstnameLi = document.createElement('li');
        // const lastnameLi = document.createElement('li');
        // userAnswerList.appendChild('firstnameLi');
        // userAnswerList.appendChild('lastnameLi');
        }
    })

