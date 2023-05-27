function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

const computerChoice = getComputerChoice();

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 
    'paper') {
        return userInput;
    } else {
        console.log('Please type: rock, paper or scissors');
    }
}

const determineWinner = (userInput, computerChoice) => {
    if (userInput === computerChoice) {
        return "Computer picked " + userInput + " tie";
    }

    if (userInput === 'rock') {
        if (computerChoice === 'paper')
        return 'Computer picked ' + computerChoice + ' you lose!'; 
    
    }   
    
    if (userInput === 'paper') {
        if (computerChoice === 'scissors')
        return 'Computer picked ' + computerChoice + 'you lose!';

    
    }   
    
    if (userInput === 'scissors') {
        if (computerChoice === 'rock')
        return 'Computer picked ' + computerChoice + 'you lose!';
    }

    else {
    return 'Computer picked ' + computerChoice + ' you win!';
    }
}

