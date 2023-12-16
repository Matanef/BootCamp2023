const people = ["Greg", "Mary", "Devon", "James"];

//Write code to remove “Greg” from the people array.
//Way 1
// const peopleNew = people.shift();
// console.log(people);
// console.log(peopleNew);

//Way 2

// let peopleSplice = people.splice(0, 1)
// console.log(peopleSplice);
// console.log(people);

//Way 3

const indexOfGreg = people.indexOf("Greg")
if(indexOfGreg !== -1){
    people.splice(indexOfGreg, 1)
}
console.log(people);



//Write code to replace “James” to “Jason”.

const indexOfJames = people.indexOf("James")
if(indexOfJames !== -1){
    console.log(people.splice(2, 1, "Jason"));
    console.log(people)
} else {
    console.log("all here");
}

//Write code to add your name to the end of the people array.

const peopleMe = people.push("Matan")
console.log(peopleMe);
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let peopleMary= people.indexOf("Mary")
console.log(peopleMary);




const noMerry = people.indexOf("Mary")
console.log(noMerry);
console.log(people);
const noMatan = people.indexOf("Matan")
console.log(noMatan);
console.log(people);

//instead of inserting tindex of Mary and Matan i stored it in variable and used it
const peopleCopy = people.slice(0, noMerry).concat(people.slice(noMerry + 1, noMatan), people.slice(noMatan + 1));
console.log(peopleCopy);

//tried to see what CatGPT will give me:
// const excludedNames = ["Mary", "Matan"];
// const peopleCopy = people.filter(name => !excludedNames.includes(name));

// console.log(peopleCopy);

const foo = people.indexOf("foo")
console.log(foo);

//returns -1 because it is not in the array


// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
const last = people[people.length - 1]
console.log(last);

const last2 = peopleCopy[peopleCopy.length - 1]
console.log(last2);

//Part 2
// Using a loop, iterate through the people array and console.log each person.
for (let names of people){
    console.log(names);
}

// for (let i =0; i< people.length ;i++){
//     console.log(people[i]);
// }

for (let names of people){
    console.log(names)
    if (names == "Devon");
    break;
}

// for (let i =0; i< people.length ;i++){
//     console.log(people[i]);
// if (people[i] == "Devon");
// break;
// }


//🌟 Exercise 2 : Your favorite colors
// Instructions

// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


/////Try adding coloers (for the bonus part)
const colors = ["Blue", "Yellow", "Green", "Red", "Brown"];

// for (let i = 0; i<colors.length ; i++){
//     console.log("My" + " " + colors.indexOf());
// }

for (let choise of colors){
    const index = colors.indexOf(choise) + 1;
    console.log("My" + " #" + index +  " " + "Choice" + " " + "is" +" "+ choise);
}

let colorsid = colors.length
console.log(colorsid)

for (let i = 0; i <= colorsid -1; i++)
	console.log(`My ${i+1}# choise is ${colors[i]}`);

let suffixes = ["st", "nd", "rd", "th", "th"];
console.log(suffixes);


for (let suff of suffixes){
    console.log(suff);
}

for (let choise of colors){
    const index = colors.indexOf(choise) + 1;
    let suffix; //because the loop don't know yet which element will come it stands empty 
    if(index>= 4){
        suffix = "th"
    }else {
        suffix = suffixes[index-1] || "th"
    }
    console.log("My" + " #" + index + suffix +  " " + "Choice" + " " + "is" +" "+ choise);
}



// 🌟 Exercise 3 : Repeat the question
// Instructions

//     Prompt the user for a number.
//     Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

//     While the number is smaller than 10 continue asking the user for a new number.
//     Tip : Which while loop is more relevant for this situation?

// let userChoise;

// while (userChoise < 10){
//     let userChoiseNew = prompt("Please enter a number between 1-10");
//     if (!isNaN(userChoiseNew)){
//         userChoise = userChoiseNew
//         alert('PLease enter a number')
//     }else{
//         alert("the number the user enteres is " + userChoise)
//     }
// }

// let n= 0;
// while (n<3){
//     n++
//     console.log(n);
// }

// let userName=prompt("please enenenene");

// while(username != "admin"){
//     prompt("please enenenene")
// }

// let userInt = 0;
// while (userInt < 10){
// 	userInt = prompt("Please enter a number");
//     if (!isNaN(Number(userInt))){
//         console.log("the number you have entered is " + userInt);
//     }else if(userInt>10){
//         break;
//         }
//     }
//I'm sorry that's the best i could do with this.
//i seem to have a hard time with while (and switch).
//can't make it keep asking me to enter a number if i enter a leter.


// 🌟 Exercise 4 : Building Management


// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log("number of floors:" + building.numberOfAptByFloor);
//why not working? shows "number of floors:[object Object]"
console.log(building[`numberOfFloors`]);
console.log("Apartments on the first floor:" + building.numberOfAptByFloor.firstFloor);
console.log("Apartments on the third floor:" + building.numberOfAptByFloor.thirdFloor);

// for (let i = 0;i<building.length; i++){
//     if(building.hasOwnProperty(key)){
//         console.log(`Key: ${key}, Value: ${building[key]}`); 
//     }
// }

// let keys = Object.keys(building)
// console.log(keys[0]);

// let value  = Object.values(building)
// console.log(value[0]);

// console.log(`the number of floors in the building is ` + value);
let nameTenant = building.nameOfTenants[1]
console.log("the name of the second tenan is: " +nameTenant);

let secondTenantAndRooms = building.numberOfRoomsAndRent.dan[0]
console.log("Amount of rooms: " + secondTenantAndRooms);


let sarahRent = Number(building.numberOfRoomsAndRent.sarah[1]);
console.log(sarahRent);
let danRent = Number(building.numberOfRoomsAndRent.dan[1]);
console.log(danRent);
let davidRent = Number(building.numberOfRoomsAndRent.david[1]);
console.log(davidRent);

if (sarahRent + davidRent > danRent){
    building.numberOfRoomsAndRent.dan[1]=1200;
    console.log(building.numberOfRoomsAndRent.dan[1]);
}

// 🌟 Exercise 5 : Family
// Instructions

//     Create an object called family with a few key value pairs.
//     Using a for in loop, console.log the keys of the object.
//     Using a for in loop, console.log the values of the object.

let family = {
    father: "GoooGoo",
    mother: "GaaGaa",
    sister: "SaaSaa",
}

for (let key in family){
    console.log(key);
}

for (let key in family){
    console.log(family[key]);
}

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let result = "";
for (let sentence in details){
  console.log(result += sentence+ " " + details[sentence]+ " ");
}

let entries = Object.entries(details);
console.log(entries[0] + " " + entries[1]+ " " + entries[2]);


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let namesAlphabetical = names.sort();
console.log(namesAlphabetical);
// let firstLetter = names.charAt(0);
// console.log(firstLetter);

// let resultNames = "";
// for (let key in names){
//     console.log(resultNames += names[key][0]);
//     if (key<5){
//         continue;
//     }
// }
// console.log(names.length);
// for (let i= 0;i<names.length; i++){
//     if (i==6){
//         console.log(resultNames += names);
//     }
// }

let resultNames = "";
for (let key in namesAlphabetical){
    if (key<namesAlphabetical.length){
        resultNames += names[key][0];
        console.log(resultNames);
    }
}

//don't know how to show only the last row