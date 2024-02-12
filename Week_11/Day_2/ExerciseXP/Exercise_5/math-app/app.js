const _ = require('loadsh')
const math = require("./math.js")


math.addition(2,3)
math.multiplication(4,7)
const num = _.random(0,20)
console.log(num);

// I don't understand why we needed to require loadsh if we don't use it in the exercise.
// the const num = _.random(0,20) is just me trying to understand what to do with it.
