function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let computerChoice = getComputerChoice();