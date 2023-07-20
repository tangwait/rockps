function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Computer picked " + userChoice + " tie";
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return 'Computer picked ' + computerChoice + ' you lose!'
        }
        userScore++;
        return 'Computer picked ' + computerChoice + ' you win!';
    }    
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return 'Computer picked ' + computerChoice + ' you lose!';
        }   
        userScore++;
        return 'Computer picked ' + computerChoice + ' you win!'
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'Computer picked ' + computerChoice + ' you lose!';
        }
        userScore++;
        return 'Computer picked ' + computerChoice + ' you win!'
    }
}
    
const game = () => {
    // for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        console.log('You played ' + userChoice);
        let result = determineWinner(userChoice, computerChoice);
        console.log(result);
        updateDescription();
        updateScores();
    //}
    if (userScore>computerScore)
        return 'You win! ' + userScore + ' to ' + computerScore
    if (userScore === computerScore)
        return 'Tie game! ' + userScore + ' to ' + computerScore
    if (userScore<computerScore)
        return 'You lose! ' + userScore + ' to ' + computerScore
};

let computerChoice = '';
let userChoice = '';
let userScore = 0;
let computerScore = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rock-button').addEventListener('click', function() {
        userChoice = 'rock';
        console.log(game());
        updateScores();
        updateDescription();
    });
    document.getElementById('paper-button').addEventListener('click', function() {
        userChoice = 'paper';
        console.log(game());
        updateScores();
        updateDescription();
    });
    document.getElementById('scissors-button').addEventListener('click', function() {
        userChoice = 'scissors';
        console.log(game());
        updateScores();
        updateDescription();
    });
});

const updateScores = () => {   
    const userScoreElement = document.getElementById('user-Score');
    const computerScoreElement = document.getElementById('computer-Score');

    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}

const updateDescription = () => {
    const userChoiceElement = document.getElementById('user-choice');
    const computerChoiceElement = document.getElementById('computer-choice');

    userChoiceElement.textContent = 'You played ' + userChoice;
    computerChoiceElement.textContent = 'Computer played ' + computerChoice;
};

