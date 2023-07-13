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
        const buttons = document.querySelectorAll('button');
        let computerChoice = getComputerChoice();
        console.log('You played ' + userChoice);
        console.log(determineWinner(userChoice, computerChoice));
    //}
    if (userScore>computerScore)
        return 'You win! ' + userScore + ' to ' + computerScore
    if (userScore === computerScore)
        return 'Tie game! ' + userScore + ' to ' + computerScore
    if (userScore<computerScore)
        return 'You lose! ' + userScore + ' to ' + computerScore
};

document.getElementById('rock.button').addEventListener(click, function() {
    userChoice = 'rock';
});
document.getElementById('paper.button').addEventListener(click, function() {
    userChoice = 'paper';
});
document.getElementById('scissors.button').addEventListener(click, function() {
    userChoice = 'scissors';
});

let userScore = 0;
let computerScore = 0;
let userChoice = '';
