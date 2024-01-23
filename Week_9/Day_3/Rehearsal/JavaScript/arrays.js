let user1 = "John"
let user2 = "Bill"
let user3 = "Nancy"
let users = ["John", "Bill", "Nancy"];

console.log(users);
let colors = ["blue", "yellow", "green", 54]; 
console.log(colors);

//Accessing Elements In An Array
let favorite = colors[1]
let secondfavorite = colors[2];
console.log(favorite);
console.log(secondfavorite);


let sampleArray = [
    [1, 2, 5],
    [7, 6, 10, 11, 12],
    [3]
];
console.log(sampleArray[1][2]);


//Changing An Array Element
let colors2 = ["blue", "yellow", "green"]; 
colors2[0] = "pink"
console.log(colors2)


//push()
let newcolors = ['green'];
function addColor(){
    let color1 = "blue"
    let color2 =  "red"
    newcolors.push(color1,color2);
    return newcolors
    
};
addColor();
console.log(`This is the original array ${newcolors}`);

//Splice()
function colorSplice(){
    newcolors.splice(1,0, "Royal Blue", "Deep Purple");
    return newcolors
}
colorSplice();
console.log(`This is the original array ${newcolors}`);


//Slice()
function favoritecolor() {
    const slicedColors = newcolors.slice(1,3)
    return slicedColors;
}
let fav = favoritecolor();
console.log(fav);
console.log(newcolors);


//toString
function tostr(){
    let colorStr = newcolors.toString()
    return colorStr
}
const strstr = tostr()
console.log(strstr);
console.log(newcolors);


//Join()
function letsJoin() {
    let colorJoin = newcolors.join()
    console.log(colorJoin);
    return colorJoin;
}
let varjoin = letsJoin()
console.log(varjoin);

const pets = ['cat','dog','fish','rabbit','cow','parrot']
const dog = pets[1]
console.log(dog);

function addPet(){
    const newpet = 'horse'
    pets.splice(3,1,newpet);
    console.log(newpet);
    return pets
};

let newPetsB = addPet()
console.log(newPetsB);

const arrLength = pets.length
console.log(arrLength);
