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




