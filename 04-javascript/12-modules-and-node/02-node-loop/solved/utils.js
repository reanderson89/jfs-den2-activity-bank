// create a function that has one parameter
// The parameter will be an array of strings
// create a loop inside the function that prints each string to the terminal
const myFunc = function(strArr){
for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
}

return 20;
}

let myObj = {
    name: "Robert",
    age: 32
}





// export your function

module.exports = {
myFunc,
myObj
};