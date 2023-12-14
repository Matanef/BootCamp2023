///////// Exercise 1 : The World Translator
///////// Instructions

///////// Hint: Use Switch Case

/////////     Ask the user which language they speak.

/////////     Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

/////////     Create a few conditions :
/////////     If the user speaks French : display “Bonjour”
/////////     If the user speaks English : display “Hello”
/////////     If the user speaks Hebrew : display “Shalom”
/////////     If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’


// let spokenLang = prompt("Which language do you speak?")
// console.log(spokenLang);

// let spokenLangLower = spokenLang.toLowerCase();
// console.log(spokenLangLower);

// if (spokenLangLower == "french"){
//     console.log("Bonjour");
// } else if (spokenLangLower == "english"){
//     console.log("Hello");
// }else if (spokenLangLower == "hebrew"){
//     console.log("Shalom");
// }else {
//     console.log("01110011 01101111 01110010 01110010 01111001");
// }


///////// Exercise 2 : The Grade Assigner
///////// Instructions

/////////     Ask the user for their grade.

/////////     If the grade is bigger than 90, console.log “A”
/////////     If the grade is between 80 and 90 (included), console.log “B”
/////////     If the grade is between 70(included) and 80 (included), console.log “C”
/////////     If the grade is lower than 70, console.log “D”



// let userGrade = prompt("What is your grade?");

// if (userGrade > 90) {
//     console.log("A");
// }else if (80 < userGrade && userGrade <= 90){
//     console.log("B");
// }else if (70 <= userGrade && userGrade <= 80){
//     console.log("C");
// }else {
//     console.log("D");
// }


///////// Exercise 3 : Verbing
///////// Instructions

/////////     Prompt the user for a string. It must be a verb.
/////////     If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
/////////     If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
/////////     If the length of the string is less than 3, leave it unchanged.

let userVerb = prompt("Please type a verb");
let userVerbLength = userVerb.length;
let checkWordIng = userVerb.indexOf("ing")
let wordIng = "ing"
let wordLy = "ly"
console.log(userVerbLength); //checking if i get a number value
console.log(checkWordIng); // checking if it can find "ing" in the word (recieved -1 which is what i wanted)


if (userVerbLength >= 3 && checkWordIng == -1){
    let newUserVerb = userVerb+wordIng
    console.log(newUserVerb);
}else if (userVerbLength >= 3 && checkWordIng !== -1){
    let newUserVerb = userVerb+wordLy
    console.log(newUserVerb);
}else{
    console.log(userVerb);
}

