   const redSquare = document.getElementById('inner');
   const but = document.querySelector('button');

   but.addEventListener('click', moveRight)

function moveRight() {
    redSquare.style.left = redSquare.offsetLeft + 100+'px';
    redSquare.style.transition= "left 1.5s ease-in-out";
    redSquare.style.position = 'absolute';
  }