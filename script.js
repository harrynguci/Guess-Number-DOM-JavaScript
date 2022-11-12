'use strict';

let numberGuess = Math.trunc(Math.random() * 20) + 1;

let gameScore = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!!!');
  } else if (guess === numberGuess) {
    displayMessage('Correct Number !!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = gameScore;
    }
  } else if (guess !== numberGuess) {
    if (gameScore > 1) {
      guess > numberGuess ? displayMessage('lower !!!') : displayMessage('higher !!!'); 
      gameScore--;   
      document.querySelector('.score').textContent = gameScore;   
      }else{
        displayMessage('loser !!!')
      }
    }
  }
);

document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  numberGuess = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.message').textContent = 'Start guessing...!!!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
