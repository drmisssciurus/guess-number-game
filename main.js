const userNumberOutput = document.querySelector('.field-form-input'),
      checkButton = document.querySelector('.field-form-btn'),
      newNumberButton = document.querySelector('.field-again-btn'),
      resultOutput = document.querySelector('.result-check-out'),
      clueOutput = document.querySelector('.result-help-out'),
      attemptsOutput = document.querySelector('.result-count-out');

// Function for create random number

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const computerNumber = getRandomNumber();

let clickCount = 0;

//user output function

function compareNumbers() {
    console.log(computerNumber);
    attemptsOutput.innerHTML = clickCount;

    checkButton.addEventListener('click', () => {
        if(!userNumberOutput.value) {
            return clueOutput.innerHTML = 'Add some number please ^•-•^';
        }

        if((Number(userNumberOutput.value) > 100) || (Number(userNumberOutput.value) < 0)) {
            return clueOutput.innerHTML = "That wasn't a deal :(";
        }

        if(computerNumber !== Number(userNumberOutput.value)) {
            clickCount++
        }

        if (computerNumber < Number(userNumberOutput.value))  {
            console.log('many');
            clueOutput.innerHTML = 'Higher';
        } else if (computerNumber > Number(userNumberOutput.value)) {
            console.log('low');
            clueOutput.innerHTML = 'Lower';
        } else if (computerNumber == Number(userNumberOutput.value)) {
            console.log('good');
            clueOutput.innerHTML = 'Good!';
            resultOutput.innerHTML = 'Congratulations! You guessed the number!';
        }

        return attemptsOutput.innerHTML = clickCount;
    })
}

compareNumbers();

function newGame() {
    newNumberButton.addEventListener('click', () => {
        console.log(getRandomNumber());
        
    });
}

newGame();