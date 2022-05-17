// First hint
let wins = 0;
let losses = 0;
let ties = 0;

const getUserChoice = function(){
    let userChoice = prompt("please choose 'r' for rock, 'p' for paper, or 's' for scissors");
    return userChoice;
}

getUserChoice();


// Second hint
const getComputerChoice = function(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if(randomNum === 0){
        computerChoice = "r";
    } else if (randomNum === 1){
        computerChoice = "s"
    } else if (randomNum === 2){
        computerChoice = "p"
    }
    return computerChoice;
}




