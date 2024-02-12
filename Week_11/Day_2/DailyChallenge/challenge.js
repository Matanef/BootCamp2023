const greet = require("./greeting.js");
const colorGreet = require("./Color/colorful-message.js")
const readFile = require("./files/read-file.js")

const greetmsg = greet('Matan')
colorGreet("Matan")
readFile("./files/file-data.txt")