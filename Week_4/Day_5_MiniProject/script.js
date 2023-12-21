
function playTheGame(){
    const userAnswer = confirm("Would you like to play a game?");

    if (userAnswer ===false){
        alert("No problem, have a nice day, Goodbye")
    } else{
        let userNumber = prompt("Please pick a number between 1-10 (including 1)");
        let parseuserAnswer = parseInt(userNumber)
        if (isNaN(parseuserAnswer)){
            parseuserAnswer = prompt("This is NOT a number, please pick a number between 1-10");
            console.log(parseuserAnswer);
        } else if (parseuserAnswer>10){
            parseuserAnswer = prompt(`You picked the number ${parseuserAnswer} which is not between 1-10, please try again`);
        } else {
            let computerNumber = Math.floor(Math.random() * 11);
            console.log(`this is the user number ${parseuserAnswer}`);
            console.log(`this is the computer number ${computerNumber}`);
            compareNumbers(parseuserAnswer, computerNumber);
        }
    }
}

function compareNumbers(userNumber,computerNumber){
    const MAX_ATTEMPTS = 3;
    for (let i =0 ; i<MAX_ATTEMPTS; i++){
        if (userNumber === computerNumber){
            alert("WINNER")
        } else if (userNumber> computerNumber){
            userNumber = prompt(`Your number is bigger then the computer's ${computerNumber}, guess again`)

        } else if (userNumber< computerNumber){
            userNumber = prompt(`Your number is smaller then the computer's ${computerNumber}, guess again`)

        }
    }
    alert("Out of chances, Goodbye");
}
