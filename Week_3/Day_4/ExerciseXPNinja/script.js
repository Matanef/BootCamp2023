// let young = Number(prompt("what is your age?"));
// let old = Number(prompt("what is your age?"));

// console.log(old - young);

// if (young < old && old == young*2){

// }


let zip = prompt("please enter your Zip code");
let zipLength = zip.length;
let space = " "
console.log(zipLength);
if (zipLength == 5 && !isNaN(zip) && space !== -1){
    console.log("True");
}