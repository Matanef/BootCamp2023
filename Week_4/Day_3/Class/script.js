//Functions

// function greetUser(username){
//     console.log("Welcome new user!");
// }

// greetUser();

//Function Prameters

// function greetUser(username, age, height){
//     console.log(`Welcome ${username}. you are ${age} and your height is ${height}`);
// }

// greetUser("Matan", 39, "173cm");
// greetUser("someone else");
// greetUser("blah blah");
// greetUser("that's it");

//DOM manipulation

// const myDiv = document. querySelector("div");
// const myUl = document.querySelector("ul")

// console.log(myDiv.innerText);
// console.log(myDiv);
// console.log(myUl);


// const myLi = document.querySelector("li");
// console.log(myLi);

//Get all of Specific elements:

// const myLi = document.querySelectorAll("li");
// console.log(myLi);

//Get element by their CSS selectors with Qselector

// const firstLi = document.querySelector("#firstLi");

// console.log(firstLi);

// const headers = document.querySelector(".headers");

// console.log(headers)

// getElementById
// const firstLi = document.getElementById("firsLi");
// console.log(firstLi)

// const headers = document.getElementsByClassName("headers")
// console.log(headers);


// const myUl=document.querySelector("ul");
// console.log(myUl);




const myDiv = document.querySelector("div")
console.log(myDiv);

const myDiv2 = document.getElementById("divUsers");
console.log(myDiv2);


// const myUl=document.querySelector("ul");
// console.log(myUl);

const myUl2=document.getElementsByTagName("ul");
console.log(myUl2[0]);

const secondLi = document.querySelector("li:last-child");
console.log(secondLi);

//creating an Element
// const newElement=document.createElement("li");
// newElement.textContent="Bob";
// myUl.append(newElement);

// const newH2 = document.createElement("h2");
// newH2.textContent = "this is the second Header";
// body.append(newH2)

//Removing Element

// const myUl=document.querySelector("ul");
// myUl.remove();

// //Matches
// // const li = document.getElementById("firstLi");
// // console.log(li.matches("#firstLi"))





// //Exercise 2
// const div1 = document.getElementById("container");
// const div1again = document.querySelector("div")

// const ul = document.querySelectorAll("ul")

// for (let element of ul){
//     for (let child of element.children)
//     console.log(element);
// }


//HTML attributes
//Checks for EXISTANCE
// const div = document.getElementById("container");

// console.log(div.hasAttribute("id"));
// console.log(div.hasAttribute("class"));

//Get Attributes
// console.log(div.getAttribute("class"));

// if (div.hasAttribute("class")){
//     console.log(div.hasAttribute("id"));
//     }else {
//         console.log("This attribute does not exist");
//     }

//     //Creating updating an attribute
//     const img = dociment.querySelector("img");
//     img.setAttribute("here we can atach a link to an img"
//     );

//     const div = document.querySelectorAll("container");

//     div.setAttribute("class", "red");
//     div.setAttribute("class")
    

    //changing style of element

    const div = docment.getElementById("container");