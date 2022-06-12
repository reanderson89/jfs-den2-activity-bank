// an array full of objects
let fruitsArr = [{name: "apple", color: "red"}, {name: "pear", color: "pearish"}, {name: "banana", color: "yellow"}]

// turn our array into a string using JSON formatting
let fruitsJson = JSON.stringify(fruitsArr)

// set our array of objects into local storage in JSON format
localStorage.setItem("fruits", fruitsJson);

// get our array of objects out of local storage in JSON format
let localFruitsJson = localStorage.getItem("fruits");

// convert our array from JSON format to regular old javascript
let localFruits = JSON.parse(localFruitsJson)

// log our localFruits array
console.log(localFruits);

// print their contents to the console
localFruits.forEach(fruit => {
    console.log(`This ${fruit.name} is ${fruit.color}`);
})

// filters out any fruit with a name that has less then 5 characters
let filteredFruits = localFruits.filter(fruit => fruit.name.length >= 5)
console.log(filteredFruits);

// sets the new filteredFruits array to localStorage
localStorage.setItem("fruits", JSON.stringify(filteredFruits));



localStorage.setItem("number", 1.2);
let myNum = JSON.parse(localStorage.getItem("number"));

console.log(myNum);
console.log(typeof myNum);


