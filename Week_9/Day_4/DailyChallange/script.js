

let form = document.getElementById('form');
let outputContainer = document.getElementById('output-container');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    console.log(name);
    const lastname = document.getElementById('lastname').value;
    console.log(lastname);
    const formObject = {
                            name: name,
                            lastname: lastname
    };
    const jsonData = JSON.stringify(formObject);
    
    const outputElement = document.createElement('p');
    outputElement.innerHTML = jsonData
    outputContainer.appendChild(outputElement);
});

