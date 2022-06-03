const makeRequest = async () => {
    let response = await fetch("https://reqres.in/api/users/23");
    let usersJson = response.json();
    return usersJson;
}

makeRequest().then(users => {
    console.log(users);
})