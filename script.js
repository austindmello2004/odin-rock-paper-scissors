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
    const div = document.querySelector('div');
    const roundResultMessage = document.createElement('p');
    function playRound(humanChoice, computerChoice){
        if(humanScore === 5 || computerScore === 5) return;
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()
        if(humanChoice === computerChoice){
            roundResultMessage.textContent = "It is a draw";
        }
        else if(humanChoice == 'rock' && computerChoice == 'paper' || 
            humanChoice == 'paper' && computerChoice == 'scissors' || 
            humanChoice == 'scissors' && computerChoice == 'rock'){
            roundResultMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
            computerScore++;
        }
        else{
            roundResultMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`
            humanScore++;
        }
        if(computerScore === 5 || humanScore === 5){
            const humanScoreMessage = document.createElement('p');
            humanScoreMessage.textContent = `Your score is: ${humanScore}`;
            computerScoreMessage = document.createElement('p');
            computerScoreMessage.textContent = `Your score is: ${computerScore}`;
            const displayResultMessage = document.createElement('p');
            if(computerScore === humanScore){
                displayResultMessage.textContent = "The game was a draw!"
            }
            else if(computerScore < humanScore){
                displayResultMessage.textContent = "Congratulations! You win!"
            }
            else{
                displayResultMessage.textContent = "Sorry! You lost! Better luck next time!"
            }
            roundResultMessage.textContent = ''
            div.append(displayResultMessage);
            return;
        }
        div.append(roundResultMessage);
    }
    // for(let i = 0; i < 5; i++){
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice()
    //     playRound(humanSelection, computerSelection);
    // }
    const button1 = document.createElement("button");
    button1.textContent = 'Rock'
    const button2 = document.createElement("button");
    button2.textContent = 'Paper'
    const button3 = document.createElement("button");
    button3.textContent = 'Scissors'
    div.appendChild(button1);
    div.appendChild(button2);
    div.appendChild(button3);

    button1.addEventListener('click', (e) => {
        playRound(e.target.textContent, getComputerChoice())
    })
    button2.addEventListener('click', (e) => {
        playRound(e.target.textContent, getComputerChoice())
    })
    button3.addEventListener('click', (e) => {
        playRound(e.target.textContent, getComputerChoice())
    })
    // console.log(`Your Score is: ${humanScore}`)
    // console.log(`Computer Score is: ${computerScore}`)
    // if(computerScore === humanScore){
    //    console.log("The game was a draw!")
    // }
    // else if(computerScore < humanScore){
    //     console.log("Congratulations! You win!")
    // }
    // else{
    //     console.log("Sorry! You lost! Better luck next time!")
    // }   
}
playGame()