'use strict';

// document.querySelector('.number').innerText = scretNumber;
var scretNumber = Math.floor(Math.random() * 20) + 1;
var score = Number(document.querySelector('.score').innerText);

function displayMessage(message) {
    document.querySelector('.message').innerText = message;
}

function checkResult() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('🚫 Please fill a Number!');
    } else if (guess !== scretNumber) {
        if (score > 1) {
            // document.querySelector('.message').innerText = guess > scretNumber ? '❌ Too high!' : '❌ Too small!';
            displayMessage(guess > scretNumber ? '❌ Too high!' : '❌ Too small!');
            document.querySelector('.score').innerText = --score;
        } else {
            displayMessage('😥 You lose the game!!!');
            document.querySelector('.score').innerText = 0;
        }
    } else {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#45B649';
        document.querySelector('.number').innerText = scretNumber;
        var highscore = Number(document.querySelector('.highscore').innerText);
        if (score > highscore) {
            document.querySelector('.highscore').innerText = score;
        }
    }
}

function playAgain() {
    scretNumber = Math.floor(Math.random() * 21) + 1;
    score = 10;
    displayMessage('Start Guessing...');
    document.querySelector('.number').innerText = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').innerText = score;
    document.querySelector('body').style.backgroundColor = '#000000e6';
}

document.querySelector('.check').addEventListener('click', checkResult);
document.querySelector('.again').addEventListener('click', playAgain);