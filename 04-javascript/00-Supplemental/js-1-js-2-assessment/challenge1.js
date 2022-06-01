// There are 3 different point values in basketball:
// Free Throws = 1 point
// Mid-range = 2 points
// Three pointers = 3 points

// Write a function called totalBasketballScore that is defined with 3 parameters: 
// First parameter: freeThrows 
// Second parameter: midRange
// Third parameter: threePointers
// The function will calculate and return the score of the basketball game when given the number of free throws, mid-range, and three pointers made.
// Check to make sure that all arguments passed in are of data type number
// If an argument is not of data type number, a message should be logged to the console informing the user that all entries must be numbers.

// For Example:


const totalBasketballScore = function(freeThrows, midRange, threePointers){
if(typeof(freeThrows || midRange || threePointers) !== 'number'){
    return "Not a number"
} 
    return freeThrows + midRange * 2 + threePointers * 3;

}


let score = totalBasketballScore("2",3,4)  //should return a score of 20.
let score2 = totalBasketballScore(2,3,4)  //should return a score of 20.

console.log(score);
console.log(score2);
