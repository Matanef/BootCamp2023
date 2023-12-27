let subButton = document.querySelector('button');
console.log(subButton);
// subButton.addEventListener('click',)

let form = document.forms[0]
console.log(form);

// const noun = document.getElementById('noun')
// const adjective = document.getElementById('adjective')
// const person = document.getElementById('person')
// const verb = document.getElementById('verb')
// const place = document.getElementById('place')
// const story = document.getElementById('story')

for (let i=0;i<form.elements.length-1; i++){
    userLib = form.elements[i];
    console.log(userLib);
}


form.addEventListener("submit",function(event){
    event.preventDefault();
    getAllInputValues();
});

function getAllInputValues(){
    const myStory =  `The ${form.elements[1].value} (Adjective) explorer, ${form.elements[2].value} (Person) ${form.elements[3].value} (Verb) discovered a hidden 
    ${form.elements[0].value} (Noun) beneath the ${form.elements[4].value} (Place).`
    story.innerText = myStory;
}



