let documentElement = document.body

let divElement = document.body.children[0];
console.log(divElement)

let myDiv = document.querySelector("div")
console.log(myDiv);

const myUl1=document.getElementsByTagName("ul");
console.log(myUl1[0]);

const secondLi = document.querySelector("li:last-child");
console.log(secondLi);

const liPete = document.querySelector("ul.list:nth-child(2) li:last-child").innerHTML= "Richard";
console.log(liPete);

const myUl2=document.getElementsByTagName("ul");
console.log(myUl2[1]);

// const liSarah = document.querySelector(`ul.list:nth-child(1) li:nth-child(1)`)
// liSarah.remove();

const liSarah = document.querySelector("ul.list:nth-child(3) li:nth-child(2)")
console.log(liSarah);
liSarah.remove()