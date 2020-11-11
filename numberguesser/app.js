let min = 14,
    max = 69,
    correctGuess = getRandomNum(min, max),
    remainingGuesses = 3;

const minVal = document.querySelector('.min-num'),
      maxVal = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      game = document.getElementById('game');
    
minVal.textContent = min;
maxVal.textContent = max;



game.addEventListener('mousedown', function(e){
    // console.log(e.target);
    let target = e.target;
    if(target.className === "play-again"){
        location.reload();
    }
})

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess > max || guess < min){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        return;
    }
    if(guess === correctGuess){
        guessInput.style.borderColor = 'green';
        guessInput.disabled = true;
        guessBtn.value = 'PLAY AGAIN';
        guessBtn.className = 'play-again';
        setMessage(`${correctGuess} is correct, YOU WIN!`, 'green');
    } else {
        remainingGuesses -= 1;
        if(remainingGuesses === 0){
            guessInput.style.borderColor = 'red';
            setMessage(`You LOST! ${correctGuess} was the correct number`, 'red');
            guessInput.disabled = true;
            guessBtn.value = 'PLAY AGAIN';
            guessBtn.className = 'play-again';
        }
        else{
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, ${remainingGuesses} guesses remaining`, 'red');
        }
    }
})

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNum(min, max){
    return (Math.floor(Math.random()*(max-min+1)+min));
}