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


let input2 = document.createElement('input');
let labelInput2 = document.createElement('label');

labelInput2.innerText = 'Please enter only numbers: ';
labelInput2.style.display = 'block';
input2.style.display = 'block';
body.appendChild(labelInput2)
body.appendChild(input2)
console.log(input2);

input2.addEventListener('input', function(event){
    let input2Value = event.target.value;
    let OnlyNumbers = inputValue.replace(/[^a-zA-Z]/g, '');
    if(input2Value === '' || isNaN(input2Value)){
        alert('This is not a valid input')
        
    }else{
        console.log(input2Value* 5);
    }
})