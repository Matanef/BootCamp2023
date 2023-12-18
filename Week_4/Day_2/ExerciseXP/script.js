// 🌟 Exercise 1 : Information
// Instructions

// Part I : function with no parameters

//     Create a function called infoAboutMe() that takes no parameter.
//     The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
//     Call the function.


function infoAboutMe(){
    console.log("Hello my name is Matan blah blah blah");
}

infoAboutMe()

// Part II : function with three parameters

//     Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//     The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
//     Call the function twice with the following arguments:
//     infoAboutPerson("David", 45, "blue")
//     infoAboutPerson("Josh", 12, "yellow")


function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`Hello the Person's name is ${personName}, his age is ${personAge} and lastly, his favorite color is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")



// 🌟 Exercise 2 : Tips
// Instructions

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// function calculateTip(){
//     let billAmount = Number(prompt("Please enter Bill amount"))
//     if (billAmount< 20){
//     console.log(`leave 20% which sums up to ${billAmount*0.20}. Total sum including bill ${billAmount*0.20+billAmount}`);
//     }else if(billAmount > 50 && billAmount < 200 ){
//         console.log(`leave 15% which sums up to ${billAmount*0.15}. Total sum including bill ${billAmount*0.15+billAmount}`);
//     }else {
//         console.log(`leave 10% which sums up to ${billAmount*0.10}. Total sum including bill ${billAmount*0.10+billAmount}`);
//     }
// }

// calculateTip()

function isDivisible(divisor){
    let sum = 0;
    for (let i =0; i<= 500; i++){
        if (i % divisor == 0){
            console.log(i);
            sum += i
        }
    }
    console.log('dsddsdsd' +" "+ sum);
}
isDivisible(23)
isDivisible(3)
isDivisible(45)



// 🌟 Exercise 4 : Shopping List
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:

//     The item must be in stock. (Hint : check out if .. in)
//     If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]



function myBill(){
    let total = 0
    for(let i = 0; i<shoppingList.length ; i++){
        let fruit = shoppingList[i];
        // console.log(`This is the fruit "${fruit}"`);
        // console.log(`This is the how many are in stock ${stock[fruit]}`);
        // console.log(`This is the price of each fruit in the shopping list ${prices[fruit]}`);
        if (stock[fruit] >0){
            total += prices[fruit];
            console.log(`We have ${fruit}`);
            stock[fruit] --;
        }else {
            console.log(`We ran out of ${fruit}`);
        }
    }
    console.log(`This is the total price of the shopping list ${total}`);
}
myBill()



function changeEnough(itemPrice, amountOfChange){
    let wallet = 0;
    let coins = [0.25, 0.10, 0.05, 0.01];
    for(let i= 0; i<amountOfChange.length; i++){
    wallet += Number(amountOfChange[i])*Number(coins[i]);
    }
    if (itemPrice <= wallet){
        return true;
    }else{

    return false;
    }
}

changeEnough(4, [100,0,0,0]);
// let a = changeEnough(4, [10,0,0,0])
// console.log(a);

