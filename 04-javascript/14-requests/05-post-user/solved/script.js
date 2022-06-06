// DOM variables
let submitBtn = document.getElementById("submit")
// two inputs to grab users info
let empName = document.getElementById("name")
let empJob = document.getElementById("job")
// place to display message for response
let displayMessage = document.getElementById("message")
let myForm = document.forms["myForm"];

const postUsers = (emp) => {
    return fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(emp)
    })
}


const addEmp = async (e) => {
    e.preventDefault();
    console.log(myForm[0].value);
    // the below code will generate an object with key/value pairs based off of the id's used in the html and then pass the object to the postUsers() function
    let formObj = {};
    for (let i = 0; i <myForm.length -1; i++){
         formObj[myForm[i].id] = myForm[i].value; 
    }
    let response = await postUsers(formObj);
    if(response.ok){
        let data = await response.json();
        console.log(data);
        displayMessage.innerHTML = `${data.name} was added to the directory.`
    } else {
        displayMessage.innerHTML = "There was an error adding your employee, please try again."
    }

}

submitBtn.addEventListener("click", addEmp);


// postUsers().then(response => {
//     return response.json()
// }).then(data => {
//     console.log(data);
// })




// let person = {
//     name: "Ted",
//     job: "Coach"
// }
// console.log(person);
// console.log(typeof person);

// // turns an object into a string
// let personJSON = JSON.stringify(person);
// console.log(personJSON);
// console.log(typeof personJSON);

// // turns a string back into an object
// let personUnStringed = JSON.parse(personJSON);

// console.log(personUnStringed);




// Full "CRUD"

// Create: POST
// Read: GET
// Update: PUT
// Delete: DELETE