const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.textContent = userChoice

    genrateComputerChoice()
    getResult()
}  ) )

function genrateComputerChoice(){
   const randomNumber = Math.floor(Math.random() * possibleChoices.length ) + 1 
   
   if(randomNumber == 1){
       computerChoice = 'rock'
   }

   if(randomNumber == 2){
    computerChoice = 'scissors'
}

if(randomNumber == 3){
    computerChoice = 'paper'
}

computerChoiceDisplay.innerHTML = computerChoice 


}

function getResult(){
    if( computerChoice == userChoice) {
        result = 'Its a draw ❌'
    }
    if (computerChoice === 'rock' && userChoice == 'paper'){
        result = '❤ You Win ❤'
    }
    if (computerChoice === 'rock' && userChoice == 'scissors'){
        result = 'Computer  wins 🖥🖥'
    }
    if (computerChoice === 'scissors' && userChoice == 'paper'){
        result = 'Computer  wins 🖥🖥'
    }
    if (computerChoice === 'paper' && userChoice == 'scissors'){
        result = ' ❤ You Win ❤ '
    }
    if (computerChoice === 'scissors' && userChoice == 'rock'){
        result = 'Computer  wins 🖥🖥'
    }

    resultDisplay.innerHTML = result
   
}