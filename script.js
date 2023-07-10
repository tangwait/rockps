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
        return 'Computer picked ' + computerChoice + ' you win!';
    }
    const game = () => {
        let userChoice = prompt('pick rock, paper, scissors');
        let computerChoice = getComputerChoice();
        console.log('You played ' + userChoice);

        console.log(determineWinner(userChoice, computerChoice));
    };

