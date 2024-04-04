"use strict";
let random = 0;
let round = 1;
let currentGuess;
let remainingAttWarning = document.querySelector('#remaining-attempts--warning');
const totalAttempts = 10;
let initial = document.querySelector('#initial');
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
let numberCardGame = document.querySelector('.game-area .number');
let startButtons = document.querySelectorAll('.start');
let alerta = document.querySelector('#clue');
function genRandomNumber() {
    random = Math.floor(Math.random() * 100 + 1);
}
function isANumber(n) {
    return /^\d+$/.test(n);
}
function showResult(title, color, message) {
    gameArea.style.display = 'none';
    infoArea.style.display = 'none';
    resultNumber.innerHTML = random.toString();
    titleRes.innerHTML = title;
    titleRes.style.color = color;
    msgRes.innerHTML = message;
    resultArea.style.display = 'flex';
}
function guess() {
    currentGuess = parseInt(input.value);
    if (currentGuess !== undefined && isANumber(currentGuess)) {
        if (currentGuess > 0 && currentGuess <= 100) {
            let guessP = document.createElement('p');
            guessP.classList.add('guess-number');
            guessP.innerHTML = currentGuess.toString();
            guessBox.appendChild(guessP);
            if (currentGuess !== random && round < 10) {
                numberCardGame.innerHTML = `TENTE NOVAMENTE ${currentGuess < random ? '(Mais)' : '(Menos)'}`;
                let remainingAttempts = totalAttempts - round;
                remainingAttWarning.innerHTML = `(Você tem ${remainingAttempts} tentativa${remainingAttempts === 1 ? '' : 's'})`;
                round++;
                roundEl.innerHTML = `Tentativa ${round.toString()}`;
            }
            else if (currentGuess === random) {
                showResult('PARABÉNS', 'chartreuse', `Você venceu na ${round}ª tentativa`);
            }
            else if (currentGuess !== random && round >= 10) {
                showResult('QUE PENA', 'red', `Você perdeu na ${round}ª tentativa`);
            }
            input.value = '';
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
function handleStart() {
    initial.style.display = 'none';
    resultArea.style.display = 'none';
    alerta.classList.remove('alerta');
    resultNumber.innerHTML = '';
    titleRes.innerHTML = '';
    msgRes.innerHTML = '';
    remainingAttWarning.innerHTML = `(Você tem ${totalAttempts} tentativas)`;
    guessBox.innerHTML = '';
    input.value = '';
    round = 1;
    roundEl.innerHTML = `Tentativa ${round.toString()}`;
    numberCardGame.innerHTML = '?';
    gameArea.style.display = 'flex';
    infoArea.style.display = 'flex';
    genRandomNumber();
}
submit.addEventListener('click', guess);
startButtons.forEach(button => {
    button.addEventListener('click', handleStart);
});
