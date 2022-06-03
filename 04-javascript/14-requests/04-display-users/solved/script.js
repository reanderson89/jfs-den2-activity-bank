const makeRequest = async () => {
    let response = await fetch("https://reqres.in/api/users");
    // if the response is bad
    if(!response.ok){
        throw new Error(`There is an error with status ${response.status}`)
    }
    let usersJson = response.json();
    return usersJson;
}

const renderCards = async () => {
    // create DOM element to append my cards too
    let displayUser = document.getElementById("displayUsers");
    // handle promise from the makeRequest function
    let users = await makeRequest();
    // this just makes it so that I can access the array of users directly instead of having to do users.data every time.
    let usersArr = users.data;
    // this forEach() loops through the array and creates a new div element for each user. It then adds a data-id attribute so that I can keep track of who is who. I added some classes to the div for styling purposes.
    usersArr.forEach(user => {
        let userCard = document.createElement("div");
        userCard.setAttribute("data-id", user.id);
        userCard.classList.add("col-3","m-5")
        // Using template literals to inject the user variables where I need them to display in the card
        userCard.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${user.avatar}" class="card-img-top" alt="picture of person">
  <div class="card-body">
    <h3>${user.first_name} ${user.last_name}</h3>
    <p class="card-text">${user.email}</p>
  </div>
</div>`
// last step is to append each userCard that is created to the displayUser element so they will display on the page
    displayUser.appendChild(userCard);

    });

}

renderCards();