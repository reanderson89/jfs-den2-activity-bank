// create your function here and name it addNumbers
// * For this challenge you will need to create a function called `addNumbers()`. 
// * The addNumbers function should accept a number as a parameter. 
// * The function should check to see if the number is between 11 and 999 (inclusive of 11 and 999). If it is not between 11 and 999, return a string that says "Invalid Number".
// * After you check the number then you need to find a way to add the numbers that make up the number together and return the total amount. Example: if you are given 752 as your number you will need to find a way to add 7+5+2 and return the total which would be 14.


const addNumbers = function(num){

    // write a condition that checks if the number is between 11 and 999, inclusive of endpoints.
    if (num < 11 || num > 999){
        return "Invalid Number"
    }
    // turn the number into a string
    let numStr = num.toString();
    // loop through the array and add the numbers to a variable called total
    let total = 0;
    for(let i = 0; i < numStr.length; i++){
        let currentNumStr = numStr[i];
        // turn string into a number
        let currentNum = parseInt(currentNumStr)
        total += currentNum;

    }

    return total;
}






// When you are done with your function uncomment the function calls below to test your code

// these should print "Invalid Number"
    console.log(addNumbers(5));
    console.log(addNumbers(1200));


// These should print the value of the numbers added together
    console.log(addNumbers(11));
    console.log(addNumbers(999));
    console.log(addNumbers(917));
    console.log(addNumbers(503));
    console.log(addNumbers(404));
    console.log(addNumbers(541));
    console.log(addNumbers(78));
    console.log(addNumbers(26));
    console.log(addNumbers(238));