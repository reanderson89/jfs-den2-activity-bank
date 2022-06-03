


const requestUsers = async () => {
    let response = await fetch("https://reqres.in/api/users");
    let usersJson = await response.json();
    return usersJson;
}

// requestUsers().then(users => {
//     console.log(users);
// })

const anotherFunc = async () => { 
    let users = await requestUsers();
    console.log(users);
}

anotherFunc();

// let users = requestUsers().then(users => {
//     console.log(users);
// });





