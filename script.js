let humanScore = 0, computerScore = 0;
function getComputerChoice(){
    let computerChoice;
    let number = Math.floor(Math.random() * 3)
    if(number === 0){
        computerChoice = "Rock"
    }
    else if(number === 1){
        computerChoice = "Paper"
    }
    else{
        computerChoice = "Scissors"
    }
    return computerChoice;
}
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: ");
    return humanChoice;
}        
function playGame(){
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()
        if(humanChoice === computerChoice){
            console.log("It is a draw")
        }
        else if(humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'rock'){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        }
        else{
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        }
    }
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection);
    }
    console.log(humanScore)
    console.log(computerScore)
    if(computerScore === humanScore){
        console.log("The game was a draw!")
    }
    else if(computerScore < humanScore){
        console.log("Congratulations! You win!")
    }
    else{
        console.log("Sorry! You lost! Better luck next time!")
    }
}
playGame()
/*
let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();
playRound(humanSelection, computerSelection);   
*/