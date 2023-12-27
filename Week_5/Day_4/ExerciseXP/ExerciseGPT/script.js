const redSquare = document.getElementById('inner');
const but = document.querySelector('button');
const yellowSquare = document.getElementById('outter');

yellowSquare.style.width = "650px"
yellowSquare.style.height = "650px"
yellowSquare.style.backgroundColor = "yellow"
yellowSquare.style.position = 'relative';

redSquare.style.width = "75px";
redSquare.style.height= "75px";
redSquare.style.backgroundColor = "red";
redSquare.style.position = 'absolute';
redSquare.style.left = '0'; 

but.addEventListener('click', moveRight)

function moveRight() {
 redSquare.style.left = redSquare.offsetLeft + 575+'px';
 redSquare.style.transition= "left 1.5s ease-in-out";

}
