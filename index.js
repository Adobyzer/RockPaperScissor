let hands = ["rock", "paper", "scissor"]

let winnerUser = "Buddy just  easy clapped the BOT big GG"
let winnerBot = "OUFF BOT WIN HEHE next time user!"
let tie = "TIE GAME FAME"

const scorePlayer = document.getElementById("player-score")

let valeurPlayer = 0
let valeurComputer = 0

const scoreComputer = document.getElementById("computer-score")

// Create a function that returns a random item from the array
function getComputerChoice() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

function playRound(playerSelection,computerSelection){
    let userInput = playerSelection.toLowerCase()
    let computerChoice = computerSelection
    
    scorePlayer.textContent = valeurPlayer
    scoreComputer.textContent = valeurComputer

    scorePlayer.classList.add("player-score-text")
    scoreComputer.classList.add("computer-score-text")

    scorePlayer.setAttribute("style","text-align : center; font-size : 40px; font-family: system-ui; ")
    scoreComputer.setAttribute("style","text-align : center; font-size : 40px; font-family: system-ui; ")



    console.log("computer "+computerChoice)
    //ROCK PAPER SCISSOR
    //tie
    if(userInput == computerChoice){
        return tie
    }
    
    //user win
    else if(userInput == "rock" && computerChoice == "scissor" ||
    userInput == "paper" && computerChoice == "rock" ||
    userInput == "scissor" && computerChoice == "paper"){
        valeurPlayer++;
        scorePlayer.textContent = valeurPlayer
        return winnerUser
    }
    
    //bot win
    else{
        valeurComputer++;
        scoreComputer.textContent = valeurComputer
        return winnerBot
    }
    
}


function rock(){
    console.log("user choose rock")
    document.getElementById("text").textContent = playRound("rock",getComputerChoice())

}

function paper(){
    console.log("user choose paper")
    document.getElementById("text").textContent = playRound("paper",getComputerChoice())
}

function scissor(){
    console.log("user choose scissor")
    document.getElementById("text").textContent = playRound("scissor",getComputerChoice())
}
