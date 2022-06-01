// In this challenge you will create a random restaurant generator.


// Add the following restaurants to an array named restaurants.
// Applebees
// Panera Bread
// Popeyes
// Chopt
// Chick-fil-A
// Cheesecake Factory
// Five Guys
// Write a function called randomRestaurant that is defined with 1 parameter: numOfRestaurants.
// The function will add the specified amount of restaurant names passed in (numOfRestaurants) from the restaurants array to another array called randomRestaurantList. It is ok if a restaurant appears in your list more than once.
// Return the randomRestaurantList array.

// For Example:
let restaurants = ["Applebees", "Panera Bread", "Popeyes", "Chopt", "Chick-fil-a", "Cheesecake Factory", "Five Guys"]

const randomRestaurant = function(numOfRestaurants){
let randomRestaurantList = [];
// we need a loop to generate a random number and use that number as the index to grab a restauraunt from the array and store it in the randomRestaurantList.
for(let i = 0; i < numOfRestaurants; i++){
    // generates a number from 0 to the last index of the restaurants array
    let randomNum = Math.floor(Math.random() * restaurants.length);
    randomRestaurantList.push(restaurants[randomNum]);
}
return randomRestaurantList;

}



console.log(randomRestaurant(10));