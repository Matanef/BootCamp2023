let body = document.body;
let input = document.createElement('input');
let labelInput = document.createElement('label');

labelInput.innerText = 'Please enter only Letters: ';
labelInput.style.display = 'block';
input.style.display = 'block';

body.appendChild(labelInput)
body.appendChild(input)
console.log(input);


input.addEventListener('input', function(event){
    let inputValue = event.target.value;
    let onlyLetters = inputValue.replace(/[^a-zA-Z]/g, '');
    event.target.value = onlyLetters;
})
