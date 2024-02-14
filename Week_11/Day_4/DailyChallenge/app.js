const express = require('express')
const app = express();
const {emojis} = require('./emoji.js')

app.listen(5000, 'localhost', () => {
    console.log('Server is running and listening on port 5000');
})



const getRandomInt = (min, max) =>{
    const int = Math.floor(Math.random()*(max-min)+1)+min;
    return int
}

app.get('/', (req,res)=> {
    const randomIndex = getRandomInt(0, emojis.length-1);
    console.log('This is emoji array length: ' + emojis.length);
    console.log('This is the generated random index: ' +randomIndex);
    
    const randomEmoji = emojis[randomIndex];
    console.log(randomEmoji);
    
    const distractors = [];
    while(distractors.length<4){
        const getRandomDistractorIndex = getRandomInt(0, emojis.length-1);
        // console.log('this is the random int for Distractors: ' + getRandomDistractorIndex);
        if(getRandomDistractorIndex !==randomIndex){
            distractors.push(emojis[getRandomDistractorIndex]);
            
        }    
    }
    const optionToPick = [randomEmoji,...distractors]
    res.render('index', {
        randomEmoji: randomEmoji,
        options: optionToPick
    });
});

// console.log('This is the distractors array: ' + distractors);


// console.log(optionToPick);

// console.log('Correct Emoji:', randomEmoji);
// console.log('Distractors:', distractors);
// console.log('Options:', optionToPick);