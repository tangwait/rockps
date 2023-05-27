function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let computerChoice = getComputerChoice();

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 
    'paper') {
        return userInput;
    } else {
        console.log('Please type: rock, paper or scissors');
    }
}