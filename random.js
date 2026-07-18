
let num = Math.random() * 10 + 1;
let randomNumber = Math.floor(num);


let attemptsLeft = 5;
let guessCount = 0;

function submitGuess() {
    let guess = parseInt(document.getElementById('guess-input').value);

    if (!guess || guess < 1 || guess > 10) {
        document.getElementById('message').textContent = 'Please enter a number between 1 and 10.';
        return;
    }

    attemptsLeft--;
    guessCount++;


    let dot = document.getElementById('dot-' + guessCount);
    dot.className = guess === randomNumber ? 'dot correct' : 'dot used';

    
    document.getElementById('attempts-left').textContent = attemptsLeft;

    
    let hint = guess === randomNumber ? 'Correct!' : guess < randomNumber ? 'Go higher' : 'Go lower';
    document.getElementById('history').innerHTML =
        '<div>' + guessCount + '. You guessed ' + guess + ' — ' + hint + '</div>'
        + document.getElementById('history').innerHTML;

    
    if (guess === randomNumber) {
        document.getElementById('message').textContent = 'Correct! You guessed it!';
        endGame();
    } else if (attemptsLeft === 0) {
        document.getElementById('message').textContent = 'Out of attempts! The number was ' + randomNumber + '.';
        endGame();
    } else {
        document.getElementById('message').textContent = guess < randomNumber ? 'Go higher!' : 'Go lower!';
    }

    document.getElementById('guess-input').value = '';
}

function endGame() {
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('guess-input').disabled = true;
}

function resetGame() {
    
    num = Math.random() * 10 + 1;
    randomNumber = Math.floor(num);

    attemptsLeft = 5;
    guessCount = 0;

    document.getElementById('attempts-left').textContent = 5;
    document.getElementById('message').textContent = '';
    document.getElementById('history').innerHTML = '';
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').disabled = false;
    document.getElementById('submit-btn').disabled = false;

    for (let i = 1; i <= 5; i++) {
        document.getElementById('dot-' + i).className = 'dot';
    }
}


document.getElementById('guess-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') submitGuess();
});
