let form = document.forms[0];
console.log(form);

let inputRadius = document.getElementById('radius');
let volume = document.getElementById('volume');
let submitButton = document.getElementById('submit');

console.log(inputRadius);
console.log(volume);
console.log(submitButton);

submitButton.addEventListener('click',Calculate)

function Calculate(){
    event.preventDefault()
    if(inputRadius!==''|| inputRadius!==isNaN()){
        radius = inputRadius.value;
        let newVolume = 4/3 * Math.PI * Math.pow(radius, 3);
        volume.value = newVolume
    }else {
        alert("not a valid input")
    }
}

console.log(Calculate());







