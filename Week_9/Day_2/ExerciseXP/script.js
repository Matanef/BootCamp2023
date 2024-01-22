const callMe = () => {
    date = new Date
    return date;
};
const print = callMe();
console.log(print);

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

function displayStudentInfo(objUser){
    const {name, age, location: {country, city,coordinates: [lat, lng] }} = person;
    let inputName = objUser
    console.log(objUser);
    const {first, last} = objUser
    console.log(`Your full name is ${first} ${last}`);

}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

const users = { user1: 18273,
                user2: 92833,
                user3: 90315 
            };
const {user1, user2, user3} = users;
console.log(user1);
const usersKeys = Object.keys(users)
console.log(`This is users keys ${usersKeys}`);
console.log(usersKeys);
console.log();
console.log(Object.values(users));
const usersEntries = Object.entries(users)
console.log(`this is user entries ${usersEntries}`);
console.log(usersEntries);


function arrangeTOarray(){
    for(let [key,value] of Object.entries(users)){
        console.log(key, value*2);
    }
}
arrangeTOarray()


const arr1Array = Object.entries(users).map(([name, value]) => `[${name}:${value}]`);
console.log(arr1Array);

const arr2Array = Object.entries(users).map(([name, value]) => `[${name}:${value*2}]`);
console.log(arr2Array);


