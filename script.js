const computerChoices= [
    'Rock',
    'Paper',
    'Scissors'
    ]

function getComputerChoice(){ 
    let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    return computerSelection
    }

function playRound(computerSelection, playerSelection){
    computerFinal = computerSelection.toLowerCase();
    playerFinal = playerSelection.toLowerCase();
    if (
        (computerFinal == "rock" && playerFinal == "scissors") ||
        (computerFinal == "scissors" && playerFinal == "paper") ||
        (computerFinal == "paper" && playerFinal == "rock")
      ) {
        return 'Ya lost brudda.'
    }
    else if ((computerFinal) == (playerFinal)) {
        return 'That is a tie!'
    }
    else {
        return 'YOU WON BRUDDA!'
    }
}

for (let i = 0; i < 6; i++) {
    computerSelection = getComputerChoice()
    playerSelection = 'scissors'
    roundResult = playRound(computerSelection, playerSelection)
    let countLOSS = 0
    let countWIN = 0
    if (roundResult == 'Ya lost brudda.'){
        countWIN++
        console.log(countWIN)
    }
    if (roundResult == 'YOU WON BRUDDA!'){
        countLOSS++
        console.log(countLOSS)
    }
 }
