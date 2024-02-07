// https://www.youtube.com/watch?v=kz_vwAF4NHI


// const logHello = ()=> {
//     console.log("hello");
// }
// setTimeout(logHello, 2000)

 console.log("1");
 setTimeout(() => {
    console.log("2");
 },4000);
 console.log("3");

 const names = ["James", "Matan", "Lanou"];

//  names.forEach((name) => console.log(name));

 const myForEach = (arr, cb) => {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        cb(element)
    }
 }

 myForEach(names, (name)=>{
    console.log(name);
 })

 const loadPokemon = (id, tttt) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        tttt(data)
    })
 }

 loadPokemon(54, (pokemon)=>{
console.log(pokemon);
 })

 //CallBack function are functions that get passed to another function as a parameter
 // that will do some work and will call the call back function




 //https://www.youtube.com/watch?v=cNjIUSDnb9k
 // Call back function is a function that is passed to another function and is being called from inside that function.

const button = document.querySelector('button')

const togglefunc = ()=> {
    button.classList.toggle('altColor')
}
// togglefunc()

// the following Eventlistener are the same

button.addEventListener("click", togglefunc);

// button.addEventListener('click', togglefunc = ()=> {
//     button.classList.toggle('altColor')
// })

// button.addEventListener('click',() => {
//     button.classList.toggle('altColor')
// })

// Asynchronous functions:

function firstAction(callbak, message){
    console.log(message);
    setTimeout(callbak, 2000);
}


function secondAction(message){
    console.log(message);
}

// firstAction();
setTimeout(()=>firstAction(()=>secondAction('im the second action'), 'im the first action'), 5000);
// secondAction();

const fetchPokemon = (id) =>{
    fetch('https://pokeapi.co/api/v2/pokemon/${id}', options)
    .then(response => {
      // Handle the response
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // or response.text() or response.blob(), etc.
    })
    .then(data => {
      // Handle the data
    })
    .catch(error => {
      // Handle errors that occur during the fetch
      console.error('Fetch error:', error);
    });
}