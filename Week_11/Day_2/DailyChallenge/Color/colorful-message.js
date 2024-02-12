const chalk = require('chalk');

//IMPORTANT!!!!!!  can use chalk version up to 4.1.2
const colorGreet = (name) => {
    const colorSent = chalk.blue(`Hello ${name}`)
    console.log(colorSent);
};

module.exports = colorGreet ;
