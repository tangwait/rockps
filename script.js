function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

const getUserChoice = userChoice => {
    userChoice = userChoice.toLowerCase();
    if (userChoice === 'rock' || userChoice === 'scissors' || userChoice === 
    'paper') {
        return userChoice;
    } else {
        console.log('Please type: rock, paper or scissors');
    }
}

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return "Computer picked " + userChoice + " tie";
        }

        if (userChoice === 'rock') {
            if (computerChoice === 'paper')
            return 'Computer picked ' + computerChoice + ' you lose!'; 

        }   
        
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors')
            return 'Computer picked ' + computerChoice + ' you lose!';

        
        }   
        
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock')
            return 'Computer picked ' + computerChoice + ' you lose!';
        }

        else {
        return 'Computer picked ' + computerChoice + ' you win!';
        }
    }
    const game = () => {
        const userChoice = getUserChoice('paper');
        let computerChoice = getComputerChoice();
        console.log('You played ' + userChoice);

        console.log(determineWinner(userChoice, computerChoice));
    };
