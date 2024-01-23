const addressNumber = 19
const addressStreet = "Nitzana"
const country = "Israel"

const globalAddress = ``.concat(addressNumber, ' ', addressStreet, ', ', country )
const globalAddress2 = `i live in ${addressNumber} ${addressStreet}, ${country}`


console.log(globalAddress);
console.log(globalAddress2);
const address = [addressNumber, addressStreet, country].join(' ');
console.log(address);

const birthYear = 1984;
const futureYear = 2030;
const age = futureYear- birthYear

console.log(`${futureYear} - ${birthYear} = ${age}`);




