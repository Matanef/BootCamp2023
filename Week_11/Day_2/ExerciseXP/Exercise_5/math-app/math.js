const addition = (param1, param2) =>{
    const sum = param1 +param2
    console.log(sum);
}

// addition(2,3)

const multiplication = (param1, param2) =>{
    const sum = param1 * param2
    console.log(sum);
}
// multiplication(2,6)

module.exports = {
    addition,
    multiplication
}