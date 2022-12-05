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
        return 'loss'
    }
    else if ((computerFinal) == (playerFinal)) {
        return 'tie'
    }
    else if (
        (playerFinal == "rock" && computerFinal == "scissors") ||
        (playerFinal == "scissors" && computerFinal == "paper") ||
        (playerFinal == "paper" && computerFinal == "rock")
      ) {
        return 'won'
    }
}

let countLOSS = 0
let countWIN = 0
let countTIE = 0

let Rockbutton = document.createElement('button')
let Paperbutton = document.createElement('button')
let Scissorsbutton = document.createElement('button')
let body = document.querySelector('body')

Rockbutton.setAttribute('class', 'btn')
Rockbutton.setAttribute('id','Rock')
Rockbutton.textContent = 'Rock'
body.appendChild(Rockbutton)

Paperbutton.setAttribute('class', 'btn')
Paperbutton.setAttribute('id','Paper')
Paperbutton.textContent = 'Paper'
body.appendChild(Paperbutton)

Scissorsbutton.setAttribute('class', 'btn')
Scissorsbutton.setAttribute('id','Scissors')
Scissorsbutton.textContent = 'Scissors'
body.appendChild(Scissorsbutton)

const buttons = body.querySelectorAll('button')

buttons.forEach((button)=>{button.addEventListener('click',function(e){
    playerSelection = button.id
    computerSelection = getComputerChoice()
    playRound(computerSelection, playerSelection)
}
)})


//for (let i = 0; i < 5; i++) {
//    computerSelection = getComputerChoice()
//    playerSelection = prompt('ROCK PAPER OR SCISSORS MAN? FAST')
//    roundResult = playRound(computerSelection, playerSelection)
//    if (roundResult == 'loss'){
//        countLOSS++
//        console.log('You have lost ' + countLOSS + ' times brudda')
//    }
//    else if (roundResult == 'won'){
//        countWIN++
//        console.log('You have won ' + countWIN + ' times brudda')
//    }
//    else if (roundResult == 'tie'){
//        countTIE++
//        console.log('You have tied ' + countTIE + ' times brudda')
//    }
// }
// if (countLOSS > countWIN) {
//    console.log('Ya lost brudda.')
// }
// if (countLOSS < countWIN) {
//    console.log('YOU WON BRUDDA!')
// }
// if (countLOSS == countWIN) {
//    console.log('That is a tie brudda!')
// }