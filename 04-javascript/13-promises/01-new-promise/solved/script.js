// We will build this together

const { setTimeout } = require("timers");


const hungryPromise = () => {
let hungry = true;

return new Promise((resolve, reject) => {
    if(hungry){
        resolve(100)
    } else {
        reject("I am not hungry")
    }
})
}

const handleSuccess = (message) => {
    console.log(message);
}

const handleFailure = (message) => {
    console.log(message);
}

hungryPromise()
// if successful
.then(handleSuccess)
// if fails
.catch(handleFailure)

let isDarkOut = false;

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isDarkOut){
            resolve("Time for bed")
        } else {
            reject("Go outside!")
        }
    }, 3000);
})

secondPromise
// on success
.then(handleSuccess)
.catch(handleFailure)

console.log("hello");





