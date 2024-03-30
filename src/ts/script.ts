// Variáveis globais
let random = 0 
let round = 1;
let currentGuess ;
let remainingAttWarning = document.querySelector('#remaining-attempts--warning') as HTMLParagraphElement;
const totalAttempts = 10;

// Elementos
let initial = document.querySelector('#initial') as HTMLDivElement
let roundEl = document.querySelector('#round') as HTMLDivElement;
let guessArea = document.querySelector('#guess-area') as HTMLDivElement;
let guessBox = document.querySelector('#guess-box') as HTMLDivElement;
let input = document.querySelector('#input-number') as HTMLInputElement;
let submit = document.querySelector('#submit-number') as HTMLInputElement;
let gameArea = document.querySelector('.game-area') as HTMLDivElement;
let infoArea = document.querySelector('.info-area') as HTMLDivElement;
let resultArea = document.querySelector('.result-area') as HTMLDivElement;
let resultNumber = document.querySelector('.result-area .number') as HTMLDivElement;
let titleRes = document.querySelector('#title-res') as HTMLDivElement;
let msgRes = document.querySelector('#msg-res') as HTMLDivElement;
let numberCardGame = document.querySelector('.game-area .number-card .number') as HTMLDivElement;
let startButtons = document.querySelectorAll('.start') as NodeList;
let alerta = document.querySelector('#clue') as HTMLLabelElement;

//funções

function genRandomNumber() {
    random = Math.floor(Math.random()*100 +1);
}

function isANumber(n:any):boolean {
    return /^\d+$/.test(n)
}

function showResult(title:string, color:string, message:string) {
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

    if(currentGuess !== null && isANumber(currentGuess)) {

        if(currentGuess > 0 && currentGuess <= 100) {
            let guessP = document.createElement('p') as HTMLParagraphElement ;
            guessP.classList.add('guess-number');
            guessP.innerHTML = currentGuess.toString();
            guessBox.appendChild(guessP);
    
            if (currentGuess !== random && round<10) {
                numberCardGame.innerHTML = `TENTE NOVAMENTE ${currentGuess < random ? '(Mais!)':'(Menos!)'} `;
                let remainingAttempts = totalAttempts - round;
                remainingAttWarning.innerHTML = `Você tem ${remainingAttempts} tentativas`;
                round++;
                roundEl.innerHTML = `Tentativa ${round.toString()}`;

            } else if (currentGuess === random) {
                showResult('PARABÉNS', 'chartreuse', `Você venceu na ${round}ª tentativa`);

            } else if (currentGuess !== random && round >= 10) {
                showResult('QUE PENA', 'red', `Você perdeu a ${round}ª e última tentativa`);
            }

            input.value = '';
            alerta.classList.remove('alerta');

        } else {
            alerta.classList.add('alerta');
            input.value = '';
        }
    } else {
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

    remainingAttWarning.innerHTML = `Você tem ${totalAttempts} tentativas`;
    
    guessBox.innerHTML = ''
    input.value = '';

    round = 1
    roundEl.innerHTML = `Tentativa ${round.toString()}`;
    numberCardGame.innerHTML = '?';
    gameArea.style.display = 'flex';
    infoArea.style.display = 'flex';

    genRandomNumber();
}

submit.addEventListener('click', guess);

startButtons.forEach( button => {
    button.addEventListener('click', handleStart)
})