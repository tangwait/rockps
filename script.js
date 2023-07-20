function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return updateTie();
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return updateComputerWinner();
        }
        userScore++;
        return updateUserWinner();
    }    
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return updateComputerWinner();
        }   
        userScore++;
        return updateUserWinner();
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return updateComputerWinner();
        }
        userScore++;
        return updateUserWinner();
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
    const announcementElement = document.getElementById('announcement');

    userChoiceElement.textContent = 'You played ' + userChoice;
    computerChoiceElement.textContent = 'Computer played ' + computerChoice;
};

const updateUserWinner = () => {
    const announcementElement = document.getElementById('announcement');

    announcementElement.textContent = "You win!";
}

const updateComputerWinner = () => {
    const announcementElement = document.getElementById('announcement');

    announcementElement.textContent = 'Computer wins!';
}

const updateTie = () => {
    const announcementElement = document.getElementById('announcement');

    announcementElement.textContent = `You both picked ${userChoice}, tie!`;
}