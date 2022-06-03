const makeRequest = async () => {
    let response = await fetch("https://reqres.in/api/users/23");
    // if the response is bad
    if(!response.ok){
        throw new Error(`There is an error with status ${response.status}`)
    }
    let usersJson = response.json();
    return usersJson;
}

makeRequest().then(users => {
    console.log(users);
}).catch(error => {
    console.log(error);
})