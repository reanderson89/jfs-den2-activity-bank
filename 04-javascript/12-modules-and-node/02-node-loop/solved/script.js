// require the function from your utils.js file, here is documentation: https://nodejs.org/api/modules.html
// create an array of strings
// call your function and pass in your array
// Remember to use the terminal to run your application

// imports everything being exports from utils as an object
const utils = require('./utils');

// imports only certain things from utils.js
const {myFunc, myObj} = require("./utils");

let strArr = ["Hello", "World", "I", "am", "alive!"]


utils.myFunc(strArr);

myFunc(strArr);


