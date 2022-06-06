const postUsers = () => {
    return fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            name: "Susan",
            job: "Teacher"
        })
    })
}



postUsers().then(response => {
    return response.json()
}).then(data => {
    console.log(data);
})


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