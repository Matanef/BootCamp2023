const chalk = require('chalk');

const colorGreet = (name) => {
    console.log(chalk.blue('Hello %s'), name);
};

module.exports = { colorGreet };
