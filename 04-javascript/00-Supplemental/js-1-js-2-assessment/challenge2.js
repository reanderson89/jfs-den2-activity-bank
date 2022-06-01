// Below are the items available for sale at a local computer store:



// Write a function called itemPrice that is defined with 1 parameter: item
// The function will use a switch statement to return the price of the item passed in.
// Check to make sure that all arguments passed in are of data type string
// If an argument is not of data type string, a message should be logged to the console informing the user that all entries must be of type string.
// If the item passed into the function is not in the store, then a statement informing the user of this should be logged to the console.

// For Example:

const itemPrice = function(item){

    if(typeof item !== "string"){
        return "All entries must be of type string."
    }

    item = item.toLowerCase().trim();


    switch(item) {
        case "computer":
          return "$500";
          
        case "mouse":
          return "$10"

        case "tablet":
          return "$250"

        case "case":
          return "$25"

        case "router":
          return "$100"

        default:
          // code block
          console.log("This item does not exist in the store")
      }


}


console.log(itemPrice(23)); // fails
console.log(itemPrice("  Mouse")); // passes, returns $10


