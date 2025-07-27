let randomNumber=parseInt(Math.random()*100)+1
// console.log(randomNumber)
const submit =document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const lowOrhi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const Remaining=document.querySelector('.lastResult')

const p = document.createElement('p')

let prevGuess=[]
let numGuess=0
let playGame=true

if(playGame){
  submit.addEventListener('click', function(e){
  e.preventDefault();
  const guess=userInput.value
  console.log(guess)
  validateGuess(guess)
  })
}

function validateGuess(guess){
  if (isNaN(guess)){
    alert('Plese enter an vaild number')

  }
  else if(guess<1){
    alert('Please enter a number more than 1')
  }
  else if(guess>100){
    alert('Plese a enter a number smaller than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess===10){
       displayGuess(guess)
       displayMessage(`Game over ,Random number was ${guess}`);
       endGame();
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  
   if (guess===randomNumber){
     displayMessage(`you guess the right ${guess}`)
     endGame()
   }
   else if(guess<randomNumber){
     displayMessage(`your guess is too smaller`)
     
   }
   else if (guess>randomNumber){
     displayMessage(`your guess is too bigger ${guess}`)
   }
}

function displayGuess(guess){
   userInput.value=''
   guessSlot.innerHTML +=`${guess},`;
   numGuess++
   Remaining.innerHTML=`${10-numGuess}`
}
function displayMessage(message){
   lowOrhi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value = '';  // Fix input clearing
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start a New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame(); // Now this works because the button exists
}

function newGame(){
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function(){
    randomNumber = parseInt(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    Remaining.innerHTML = '10';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrhi.innerHTML = '';
    playGame = true;
  })
}