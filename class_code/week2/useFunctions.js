const greetings = require("./functions")
const {sayHi3} = require("./functions") // only bringing one part of the code over specifically 

greetings.sayHi("AJi") // only sayHi are exported in functions.js, can't access here

greetings.sayHi("AJi") // does not give a response even when properly called because there is no return statement
sayHi3("Harman")

// right click the file and look for "Open in Intergrated Terminal" to get the specific path and type "node (file).js"