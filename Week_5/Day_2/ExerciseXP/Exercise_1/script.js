const h1Tag = document.querySelector("h1");
console.log(h1Tag);
const h1Tag2 = document.getElementsByTagName("h1")
console.log(h1Tag2);

const article1Tag = document.querySelector("article");
console.log(article1Tag);
const articleTag2 = document.getElementsByTagName("article");
console.log(articleTag2);

const lastPara = article1Tag.querySelector('p:last-child');
console.log(lastPara);
lastPara.remove();

// const lastPara2= articleTag2.getElementsByTagName("p:last-child");

//script.js:13 Uncaught TypeError: articleTag2.getElementsByTagName is not a function


// let pTag = document.getElementsByClassName('p').lastChild;
// console.log(pTag);

const h2Tag = document.querySelector("h2");
console.log(h2Tag);

const h2Text = h2Tag.innerHTML;
console.log(h2Text);

const h3Tag = document.querySelector("h3");
console.log(h3Tag);

let mahNum = Math.floor(Math.random() * 101);
console.log(`${mahNum}`)

const secondPara = document.getElementById('secondPTag');
console.log(secondPara);



h2Tag.addEventListener('click', function(event){
    h1Tag.style.backgroundColor = "royalblue";
    h2Tag.style.backgroundColor = "yellow";
    h1Tag.style.color = "white";
    // h2Text.style.color = "white"
})

h3Tag.addEventListener('click', function(event){
    h3Tag.style.display= 'none';
})

but.addEventListener('click', function(event){
    article1Tag.style.fontWeight = "bold";

})

h1Tag.addEventListener('mouseover', function(event){
    h1Tag.style.fontSize = `${mahNum}px`;
})

secondPara.addEventListener('mouseover', function(event){
    secondPara.style.opacity = '0';
    secondPara.style.transitionDuration = "2s"
})