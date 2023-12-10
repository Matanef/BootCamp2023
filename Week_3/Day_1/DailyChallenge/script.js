//Remove Banana from the array.

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
console.log(fruits);

//Sort the array in alphabetical order.
fruits.sort();
console.log(fruits);

//Add “Kiwi” to the end of the array.
fruits.push("Kiwi");
console.log(fruits);

//Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.shift();
console.log(fruits);

//Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])

fruits.reverse();
console.log(fruits);

// Exercise 4

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]);