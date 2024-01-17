// ------1------
//will return an array of [bread, all the vegetable in the vegetable array and the fruit aswell]
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ------2------
//wil return an array with only it self as an entry
const country = "USA";
console.log([...country]);
//wrong! it seperate the letters to an array

// ------Bonus------
//don't know
let newArray = [...[,,]];
console.log(newArray);
//showes to entries of undefined