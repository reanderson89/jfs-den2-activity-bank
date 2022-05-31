// Global DOM variables
let displayCompChoice = document.getElementById("displayCompChoice");
let displayVs = document.getElementById("displayVs");
let displayResults = document.getElementById("displayResults");
let displayGamesPlayed = document.getElementById("displayGamesPlayed");
let displayGamesWon = document.getElementById("displayGamesWon");
let displayGamesLost = document.getElementById("displayGamesLost");
let displayGamesTied = document.getElementById("displayGamesTied");

const userObj = {
    wins: 0,
    losses: 0,
    ties: 0,
    _choice: "",
    askUserChoice(){
        let userChoice = "";
        this._choice = userChoice; 
        return userChoice;
    }
}

const compObj = {
    wins: 0,
    losses: 0,
    ties: 0,
    _choice: "",
    generateCompChoice(){
        let randomNum = Math.floor(Math.random() * 3);
        let compChoice;
        if(randomNum === 0){
            compChoice = "Rock";
        } else if (randomNum === 1){
            compChoice = "Scissors"
        } else if (randomNum === 2){
            compChoice = "Paper"
        }

        this._choice = compChoice; 

        return compChoice;
    }
}

const gameObj = {
    gameCounter:0,
    resetColorAndResults(){
        displayGamesWon.parentElement.style.backgroundColor = "white";
        displayGamesWon.parentElement.style.color = "black";
        displayGamesLost.parentElement.style.backgroundColor = "white";
        displayGamesLost.parentElement.style.color = "black";
        displayGamesTied.parentElement.style.backgroundColor = "white";
        displayGamesTied.parentElement.style.color = "black";
        displayResults.innerHTML = ""
    },
    playGame(event){
        
        this.gameCounter++;
        let userChoice = event.target.value;
    let computerChoice = compObj.generateCompChoice();
    displayCompChoice.innerHTML = computerChoice;
    displayVs.innerHTML = `${userChoice}    vs.    ${computerChoice}`
        this.resetColorAndResults();

        setTimeout(function(){
    if ((userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Scissors" && computerChoice === "Paper") || 
            (userChoice === "Paper" && computerChoice === "Rock")) {
            userObj.wins++;
            compObj.losses++;
            displayGamesWon.parentElement.style.backgroundColor = "green";
            displayGamesWon.parentElement.style.color = "white";
            displayResults.innerHTML = `Your ${userChoice} won this match!`
          } else if (userChoice === computerChoice) {
            userObj.ties++;
            compObj.ties++;
            displayGamesTied.parentElement.style.backgroundColor = "yellow";
            displayResults.innerHTML = `The game is a tie`
          } else {
            userObj.losses++;
            compObj.wins++;
            displayGamesLost.parentElement.style.backgroundColor = "red";
            displayGamesLost.parentElement.style.color = "white";
            displayResults.innerHTML = (userChoice === "Scissors" ? `Your Scissors were defeated...` : `Your ${userChoice} was defeated...`)
          }

          displayGamesPlayed.innerHTML = gameObj.gameCounter;
          displayGamesWon.innerHTML = userObj.wins;
          displayGamesLost.innerHTML = userObj.losses;
          displayGamesTied.innerHTML = userObj.ties


        }, 600)


    
    }

    
}















