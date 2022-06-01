// documentation:
//  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import


// create your import here
// import everything as an object
import * as utils from "./utils.js";

// import everything individually
import {capitalizeEveryOtherCharacter, myVariable } from "./utils.js"

// call the function here and pass in a string, then open the browser and check the console
utils.capitalizeEveryOtherCharacter("hello world")

capitalizeEveryOtherCharacter("This works too")