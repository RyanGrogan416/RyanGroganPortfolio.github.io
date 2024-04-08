const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case (0):
      return 'rock';
      break;
    case (1):
      return 'paper';
      break;
    case (2):
      return 'scissors';
      break;
  }
}

let userScore = 0;
let AIScore = 0;
const score = (winner) => {
  return winner === 'user' ? userScore++ : AIScore++;
}

// determining the winner then call the display functions.
const determineWinner = (userChoice) => {
  const comp = getComputerChoice();
  if (userChoice == comp) {
    displayTie(userChoice);
  } else 
  if (userChoice === 'rock' && comp === 'scissors' 
  || userChoice === 'scissors' && comp === 'paper' 
  || userChoice === 'paper' && comp === 'rock') {
    displayWinner(userChoice);
  } else {
    displayLoser(userChoice);
  }
}

// all of the display functions 
const returnButtonToNormal = (userChoice) => {

  const choiceButton = document.querySelector(`.${userChoice}`);
  // change the background back to white
  //choiceButton.style.backgroundColor = 'white';
  // make event listeners to emulate the styles cases
  choiceButton.addEventListener('mouseenter', () => {
    choiceButton.style.backgroundColor = 'grey';
    choiceButton.style.color = 'white';
  });
  choiceButton.addEventListener('mouseleave', () => {
    choiceButton.style.backgroundColor = 'white';
    choiceButton.style.color = 'black';
  });
  choiceButton.addEventListener('mouseup', () => {
    choiceButton.style.backgroundColor = 'white';
    choiceButton.style.color = 'black';
  })
  choiceButton.addEventListener('mousedown', () => {
    choiceButton.style.backgroundColor = 'black';
    choiceButton.style.color = 'white';
  });
}

const disableButtons = () => {
  document.querySelector('.rock')
    .removeEventListener('click',
      () => {
        playGame('paper')
      });
  document.querySelector('.paper')
    .removeEventListener('click',
      () => {
        playGame('paper')
      });
  document.querySelector('.scissors')
    .removeEventListener('click',
      () => {
        playGame('paper')
      });
}

// winner and loser displays
const displayWinner = (userChoice) => {
  score('user');
  document.querySelector(`.${userChoice}`).style.backgroundColor = 'green';
  document.querySelector(`.${userChoice}`).style.color = 'white';
  document.querySelector('.userScore').innerHTML = userScore;
  document.querySelector('.display').innerHTML = 'winner';
}

const displayTie = (userChoice) => {
  document.querySelector('.display').innerHTML =  'tie';
  document.querySelector(`.${userChoice}`).style.backgroundColor = 'yellow';
  document.querySelector(`.${userChoice}`).style.color = 'black';
}

const displayLoser = (userChoice) => {
  score();
  document.querySelector(`.${userChoice}`).style.backgroundColor = 'red';
  document.querySelector('.AIScore').innerHTML = AIScore;
  document.querySelector('.display').innerHTML =  'loser';
}

// access to the text that would display text to the HTML
const displayTextIterater = (displayText) => {
  document.querySelector('.display').innerHTML = `${displayText}`;
}

// setting the setTimeout to take place in the seperate delay function to run then the function that gets pased in will run. 
function timeout() {
  return new Promise((resolve) => {
    setTimeout(() => {resolve()}, 1000)
  });
}

async function delay(fn){
  await timeout();
  return fn;
}

// creating a promise for the readability of the file 
// and to display everything in the intended order
// 1 play the game 
// 2 use the rock paper scissors shoot prompt
// 3 display winner or loser 
const playGame = (choice) => {
  delay(displayTextIterater('rock'));
  delay(displayTextIterater('paper'));
  delay(displayTextIterater('scissors'));
  delay(displayTextIterater('shoot'));
  delay(determineWinner(choice));
  delay(returnButtonToNormal(choice));
}

// event listenters 
const enableListeners = () => {
  document.querySelector('.rock')
    .addEventListener('click', 
      () => {
        playGame('rock')
      });
  document.querySelector('.paper')
    .addEventListener('click', 
      () => {
        playGame('paper')
      });
  document.querySelector('.scissors')
    .addEventListener('click', 
      () => {
        playGame('scissors');
      });
}

// opens the options up for the game to be played
enableListeners();

