function onDragStart4PinkSquare(event) {
    console.log('start');
    event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragend4PinkSquare(event){
    console.log('end');
}

function onDrag4PinkSquare(event){
    event.target.textContent = event.clientX +" "+ event.clientY;
}

function onDragOver4OrangeSquar(event){
    console.log('over orange');
    event.preventDefault()
}

function onDrop4OrangeSquare(event){
    console.log('drop');

    const PinkId = event.dataTransfer.getData('text/plain');
    console.log(PinkId);

    const pinkSquare = document.getElementById(PinkId);
    console.log(pinkSquare);

    event.target.appendChild(pinkSquare)
}




function onDragStart4OrangeSquare(event) {
    console.log('start');
    event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragend4OrangeSquare(event){
    console.log('end');
}

function onDrag4PinkSquare(event){
    event.target.textContent = event.clientX +" "+ event.clientY;
}

function onDragOver4PinkSquar(event){
    console.log('over orange');
    event.preventDefault()
}

function onDrop4PinkSquare(event){
    console.log('drop');

    const PinkId = event.dataTransfer.getData('text/plain');
    console.log(PinkId);

    const pinkSquare = document.getElementById(PinkId);
    console.log(pinkSquare);

    event.target.appendChild(pinkSquare)
}