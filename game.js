'use strict';

var scretNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.number').innerText = scretNumber;
var score = Number(document.querySelector('.score').innerText);

function checkResult() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').innerText = '🚫  Please fill a Number!';
    }
    else if (guess > scretNumber) {
        if (score > 1) {
            document.querySelector('.message').innerText = '❌ Too high!';
            document.querySelector('.score').innerText = --score;
        } 
        else {
            document.querySelector('.message').innerText = '😥 You lose the game!!!';
            document.querySelector('.score').innerText = 0;
        }
    }
    else if (guess < scretNumber) {
        if (score > 1) {
            document.querySelector('.message').innerText = '❌ Too small!';
            document.querySelector('.score').innerText = --score;
        } 
        else {
            document.querySelector('.message').innerText = '😥 You lose the game!!!'
            document.querySelector('.score').innerText = 0;
        }
    }
    else {
        document.querySelector('.message').innerText = '🎉 Correct Number!';
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
    document.querySelector('.number').innerText = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').innerText = 'Start Guessing...';
    document.querySelector('.score').innerText = score;
    document.querySelector('body').style.backgroundColor = '#000000e6';
}

document.querySelector('.check').addEventListener('click', checkResult);
document.querySelector('.again').addEventListener('click', playAgain);