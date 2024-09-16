const userNumberOutput = document.querySelector('.field-form-input'),
      checkButton = document.querySelector('.field-form-btn'),
      newNumberButton = document.querySelector('.field-again-btn'),
      resultOutput = document.querySelector('.result-check-out'),
      clueOutput = document.querySelector('.result-help-out'),
      attemptsOutput = document.querySelector('.result-count-out');

// Variables

let computerNumber = 0;
let clickCount = 0;
let isGameIsReady = false;

// Function for new game

function newGame() {
    computerNumber = Math.floor(Math.random() * 100) + 1;
    userNumberOutput.value = null;
    clickCount = 0;
    clueOutput.innerHTML = "";
    attemptsOutput.innerHTML = clickCount;
    resultOutput.innerHTML = "";
    isGameIsReady = true;
    // console.log(computerNumber);
}

// Function for compare numbers

function compareNumbers() {
    attemptsOutput.innerHTML = clickCount;
    const userNumber = Number(userNumberOutput.value);

    if(!isGameIsReady) {
        attemptsOutput.innerHTML = "";
        return clueOutput.innerHTML = "Press NEW GAME =^^=";
    }

    if(!userNumberOutput.value) {
        return clueOutput.innerHTML = "Add some number please ^•-•^";
    }

    if((userNumber > 100) || (userNumber) < 0) {
        return clueOutput.innerHTML = "That wasn't a deal :(";
    }

    // if(computerNumber !== userNumber) {
    //     clickCount++
    // }

    if (computerNumber < userNumber)  {
        // console.log('many');
        clueOutput.innerHTML = "That would be too much";
    } else if (computerNumber > userNumber) {
        // console.log('low');
        clueOutput.innerHTML = "It won't be enough";
    } else if (computerNumber == userNumber) {
        // console.log('good');
        clueOutput.innerHTML = "Good!";
        resultOutput.innerHTML = "Congratulations! You guessed the number!";
    }

    clickCount++

    return attemptsOutput.innerHTML = clickCount;
}

// Event handlers

newNumberButton.addEventListener('click', newGame);
checkButton.addEventListener('click', compareNumbers);

// Adding handling for pressing the Enter and Space keys

userNumberOutput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        compareNumbers();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        newGame();
    }
});