//consol.log
// console.log("Hello World")
// console.log("This is Day 1 of JavaScript")

//Variables
// let x = 3;
// let X = 4
// console.log(x);

// let day1="now"

//camelCase
// let dayOfTheMonth = 10

//KeyWords

// let x= 5+6;
// console.log(x);

// let y = x*10;
// console.log(y);

// let x,y;  //declaring meaning that in the consol it will be undefined
// x = 5+6;
// console.log(x);

// y= x*10;
// console.log(y);

// //Strings
// let a  = "Hello";
// let b = "World";
// let c = a+ " " + b;
// console.log(c);


// let n = "green" + "apple";
// console.log(n);

//Strings Properties

//  let longString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ratione ab? Consequuntur fugit esse error assumenda accusantium, voluptate, neque vitae incidunt fuga ducimus cum iusto maxime quae vel aliquid doloremque ex similique nesciunt aperiam? Cupiditate, a reprehenderit atque veniam esse perferendis autem! Quidem aspernatur repellat neque at officia enim dolore ipsum deleniti voluptatum. Distinctio laborum dolore vero vitae in neque voluptas maxime eligendi voluptate. Magni laboriosam magnam ut quo, consectetur ullam ea odio saepe autem animi est explicabo neque necessitatibus fugit perspiciatis dolorum dignissimos corrupti debitis perferendis nemo fugiat at excepturi natus! Sequi amet magni ex suscipit assumenda, laboriosam ducimus."

//  let longStringLength = longString.length;
//  console.log(longStringLength);

//  let smallerString = "Hello, Welcome to JavaScript Day1";
//  letsmallerStringLength = smallerString.length;
//  console.log(smallerString.length);

//Strings  Methods
// let smallerString = "Hello, Welcome to JavaScript Day1";
// console.log(smallerString[0]);
// console.log(smallerString[34]);

// let str = "Hello Everyone, please say hello to the class.";
// let posUpperCaseHello=str.indexOf("Hello");
// let posLowerCaseHello=str.indexOf("hello");

// console.log(posUpperCaseHello);
// console.log(posLowerCaseHello);
// console.log(str.substring(0, 5));

// console.log(str.substring(15));

// let uppseCaseString = "HELLO THIS IS AN INTENSE STRING";
// console.log(uppseCaseString.toLowerCase());

//Numbers

// console.log("1" + 2);

// console.log(1 + 2);

// console.log(1 - 2);

// console.log(1 / 2);

// console.log(1 * 2);

// //Number Methods

// let op="me";
// console.log(isNaN(op));

// let num = 1;
// console.log(num);

// let op = 10.6789
// console.log(op.toFixed(1));


//Boolean

// console.log(Boolean(10 < 9));

//Arreys
// let user1 = "John"
// let user2 = "Bill"
// let user3 = "Nancy"

// let users = ["John", "Nancy", "Bill"]
// console.log(users[0][0]);
// console.log(users[1]);
// console.log(users[2]);

// let nestedArreys= [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log(nestedArreys);
// console.log(nestedArreys[0][1]);

// console.log(nestedArreys.length)

//Changin an Elementin an Arrey

// let colors = ["blue", "yellow", "green"];
// console.log(colors);
// colors[1] = "pink";
// console.log(colors);

//Arrey Methods:
// let colors = ["blue", "yellow", "green"];
// console.log(colors); 
// colors.push("orange"); //push = add items at the end of the arrey
// console.log(colors);
// colors.pop();  //pop = remove last element
// console.log(colors);


//Splice

// let colors = ["blue", "yellow", "green"];
// // colors.splice(1, 1, "pink", "white", "black");

// // console.log(colors);
//  colors.splice(1,2,"pink", "grey"),
//  console.log(colors);


//Slice -> create new arrey
// let colors = ["blue", "yellow", "green", "pink"];

// let favorite = colors.slice(2);
// console.log(favorite);
// console.log(colors);

// let favorie2 = colors.slice(0, 1)

//Exercise3

// let pet = ['cat','dog','fish','rabbit','cow'];
// console.log(pet[1]);

// pet.splice(3, 1, "horse");
// console.log(pet);
// console.log(pet.length);



//User Interface Options
//1. Alert
// console.log("before alert")
// alert("You are not authorized to enter");
// console.log("after alert")

// //2. Confirm

// let userAnswer = confirm("Are you over 18?")
// console.log(userAnswer);

//3. Prompt

let userAnswer = prompt("what is your username");

console.log("Welcome to the website " + userAnswer)



