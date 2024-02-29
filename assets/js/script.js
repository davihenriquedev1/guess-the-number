"use strict";
let random = Math.floor(Math.random() * 100 + 1);
let round = 1;
let currentGuess = 0;
let roundEl = document.querySelector('#round');
let guessArea = document.querySelector('#guess-area');
let guessBox = document.querySelector('#guess-box');
let input = document.querySelector('#input-number');
let submit = document.querySelector('#submit-number');
let gameArea = document.querySelector('.game-area');
let infoArea = document.querySelector('.info-area');
let resultArea = document.querySelector('.result-area');
let resultNumber = document.querySelector('.result-area .number');
let titleRes = document.querySelector('#title-res');
let msgRes = document.querySelector('#msg-res');
let numberCardGame = document.querySelector('.game-area .number-card .number');
let restartButtons = document.querySelectorAll('.restart');
let alerta = document.querySelector('#clue');
roundEl.innerHTML = `Tentativa ${round.toString()}`;
function isANumber(n) {
    return /^\d+$/.test(n);
}
function guess() {
    if (isANumber(input.value)) {
        currentGuess = parseInt(input.value);
        if (currentGuess && currentGuess > 0 && currentGuess <= 100) {
            let guessP = document.createElement('p');
            guessP.classList.add('guess-number');
            guessP.innerHTML = currentGuess.toString();
            guessBox.appendChild(guessP);
            if (currentGuess === random) {
                gameArea.style.display = 'none';
                infoArea.style.display = 'none';
                resultNumber.innerHTML = random.toString();
                titleRes.innerHTML = 'PARABÉNS';
                titleRes.style.color = 'chartreuse';
                msgRes.innerHTML = `Você venceu na ${round.toString()}ª tentativa`;
                resultArea.style.display = 'flex';
            }
            else if (currentGuess !== random && round < 10) {
                numberCardGame.innerHTML = 'Tente Novamente';
                round++;
                roundEl.innerHTML = `Tentativa ${round.toString()}`;
                input.value = '';
            }
            else if (currentGuess !== random && round >= 10) {
                gameArea.style.display = 'none';
                infoArea.style.display = 'none';
                resultNumber.innerHTML = random.toString();
                titleRes.innerHTML = 'QUE PENA';
                titleRes.style.color = 'red';
                msgRes.innerHTML = `Você perdeu a ${round.toString()}ª e última tentativa`;
                resultArea.style.display = 'flex';
                input.value = '';
            }
            alerta.classList.remove('alerta');
        }
        else {
            alerta.classList.add('alerta');
            input.value = '';
        }
    }
    else {
        alerta.classList.add('alerta');
        input.value = '';
    }
}
function handleRestart() {
    resultNumber.innerHTML = '';
    titleRes.innerHTML = '';
    msgRes.innerHTML = '';
    resultArea.style.display = 'none';
    round = 1;
    roundEl.innerHTML = `Tentativa ${round.toString()}`;
    numberCardGame.innerHTML = '?';
    gameArea.style.display = 'flex';
    infoArea.style.display = 'flex';
    guessBox.innerHTML = '';
    random = Math.floor(Math.random() * 100 + 1);
    input.value = '';
}
submit.addEventListener('click', guess);
restartButtons.forEach(button => {
    button.addEventListener('click', handleRestart);
});
