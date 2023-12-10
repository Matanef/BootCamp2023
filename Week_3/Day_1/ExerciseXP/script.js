// Exercise 1

// let favFood = "Fries"
// let favMealTime = "Breakfast"
// console.log("i eat" + " " + favFood + " " + "at every" + " " + favMealTime );

//Exercise 2
//Part1

//if you're reading this, please explain the difference between const and let. Thank you
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// let myWatchedSeriesLength = myWatchedSeries.length;
// console.log(myWatchedSeriesLength);

// let myWatchedSeriesSentence = "These are the series i watched:"+ " " + myWatchedSeries.toString();
// console.log(myWatchedSeriesSentence);

// let myWatchedSeriesSentence = "These are the series i watched:";
// let arretToString = myWatchedSeries.toString()
// console.log(myWatchedSeriesSentence + " " + arretToString);

//Part2

//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries.splice(2,1, "Friends");
console.log(myWatchedSeries);

//Hey again, can you please explain why when trying to "save" the new arrey in a variable it only shows the word "Friends"?

// let newList = myWatchedSeries.splice(2,1, "Friends");
// console.log(newList);  //Not Working

//Add, at the end of the array, the name of another series you watched.

let newList = myWatchedSeries.push("Community");
console.log(myWatchedSeries);

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.splice(0,0, "Rome");
console.log(myWatchedSeries);


//Delete the series “black mirror”.
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

//Console.log the third letter of the series “money heist”.

console.log(myWatchedSeries[1][2]);

//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);

//Exercise 3
let celTemp = 25
let ferTemp = ((celTemp/5)*9)+32;
console.log(ferTemp);


//Exercise 4

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23

// c has no value, we just declared it.


//Analyse the code below, what will be the outcome? this will be: 75
console.log(3 + 4 + '5');



typeof(15)
// Prediction: number
// Actual:

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction: NaN
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction: boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:boolean
// Actual:boolean



"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction: not sure because you can maybe add a letter like above but you can't subtrack so maybe nan?
// Actual:NaN

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction: Nan
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: Nan
// Actual:Nan

99 * "hello"
// Prediction:Nan
// Actual: Nan

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: not sure, as far as i remember this would check if both operands are similar both in value and type and so if this is a string compared with a number it would be false
// Actual: false

console.log()
