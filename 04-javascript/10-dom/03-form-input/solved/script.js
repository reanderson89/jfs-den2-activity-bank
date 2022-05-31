// DOM Variables
// let animal = document.getElementById("animal");
// let place = document.getElementById("place");
// let movie = document.getElementById("movie");
// let number = document.getElementById("number");
// let flexCheckDefault = document.getElementById("flexCheckDefault");
// let flexCheck = document.getElementById("flexCheck");



// Create a function that console logs each piece of data from the user on submit
// Look up event.preventDefault() on why it is needed for form submission.

// const gatherInfo = function(event){
//     event.preventDefault();
// console.log(animal.value);
// console.log(place.value);
// console.log(movie.value);
// console.log(number.value);
// console.log(flexCheckDefault.value);
// console.log(flexCheck.value);
// }

// submit.addEventListener("click", gatherInfo);




// gathering user info using the form object
let myForm = document.forms["myForm"];
// console.log(myForm.animal.value);

myForm.onsubmit = function(event){
event.preventDefault();
console.log(myForm.animal.value);
console.log(myForm.place.value);
console.log(myForm.movie.value);
console.log(myForm.number.options[myForm.number.selectedIndex].value);
console.log(myForm.flexCheckDefault.checked);
console.log(myForm.flexCheck.checked);
console.log(myForm.inputState.value);
console.log(myForm.customRange1.value);
console.log(myForm.flexRadioDefault1.checked);
console.log(myForm.flexRadioDefault2.checked);
}

