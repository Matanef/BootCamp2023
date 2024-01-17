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

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let userFirstNames = users.map((name) => {
    return `Welcome ${name.firstName}`;
});
console.log(userFirstNames);


const newArr = users.filter((resident) => {
    return resident.role === "Full Stack Resident";
});
console.log(newArr);
console.log(users);

let arrLast = users.filter((lastname) => {
    return lastname.role === "Full Stack Resident";
});

let MapLast = arrLast.map((lastn) => {
    return lastn.lastName
});
console.log(MapLast);

