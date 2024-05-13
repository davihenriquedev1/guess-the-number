// Variáveis Gobais

let random = 0;
let round = 1;
let currentGuess;
let remainingAttWarning = document.querySelector('#remaining-attempts--warning') as HTMLParagraphElement;
const totalAttempts = 10;

// Elementos as serem manipulados

let initial = document.querySelector('#initial') as HTMLDivElement;
let initialButtonsArea = document.querySelector('#initial-buttons-area') as HTMLDivElement;
let titleBox = document.querySelector('#title-box') as HTMLDivElement;
let initialButtons = document.querySelector('#initial-buttons') as HTMLDivElement;
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
let numberCardGame = document.querySelector('.game-area .number') as HTMLDivElement;
let startButtons = document.querySelectorAll('.start') as NodeList;
let alerta = document.querySelector('#clue') as HTMLLabelElement;

// funções

function genRandomNumber() {
    random = Math.floor(Math.random() * 100) + 1;
}

function isANumber(n:any) {
    return /^\d+$/.test(n);
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

    if(isANumber(currentGuess)) {
        if(currentGuess > 0 && currentGuess <= 100) {
            let guessP = document.createElement('p') as HTMLParagraphElement;
            guessP.classList.add('guess-number');
            guessP.innerHTML = currentGuess.toString();
            guessBox.appendChild(guessP);

            if(currentGuess !== random && round<10) {
                numberCardGame.innerHTML = `TENTE NOVAMENTE ${currentGuess < random ? '(Mais)' : '(Menos)'}`;
                let remainingAttempts = totalAttempts - round;
                remainingAttWarning.innerHTML = `(Você tem ${remainingAttempts} tentativa${remainingAttempts === 1? '' : 's'})`
                round++;
                roundEl.innerHTML = `Tentativa ${round.toString()}`;
            } else if (currentGuess === random){
                showResult('PARABÉNS', 'chartreuse', `Você venceu na ${round}ª tentativa`);
            } else if (currentGuess !== random && round >=10) {
                showResult('QUE PENA', 'red', `Você perdeu na ${round}ª tentativa`);
            }

            input.value = '';
            alerta.classList.remove('alerta');

        } else {
            alerta.classList.add('alerta');
            input.value = '';
        }
    } else  {
        alerta.classList.add('alerta');
        input.value = '';
    }
}

function handleStart() {
    if(!(initial.style.display === 'none')) {
        initial.style.display = 'none';
        titleBox.style.display = 'none';
        initialButtons.style.display = 'none';
    } else if (!(resultArea.style.display = 'none')){
        resultArea.style.display = 'none';
        resultNumber.innerHTML = '';
        titleRes.innerHTML = '';
        msgRes.innerHTML = '';
    }
    
    alerta.classList.remove('alerta');
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

function initialArea() {
    // Exibe o título com uma transição de opacidade
    titleBox.style.display = 'flex';
    setTimeout(() => {
        titleBox.style.opacity = '1';
        // Após um curto intervalo, oculta o título gradualmente
        setTimeout(() => {
            titleBox.style.opacity = '0';
            initialButtons.style.display = 'flex';
            // Define a exibição dos botões iniciais apenas após o título ter desaparecido completamente
            setTimeout(() => {
                titleBox.style.display = 'none';
                initialButtons.style.opacity = '1';
            }, 2000);
        }, 3000);
    }, 2000);
}

window.addEventListener('load', initialArea);

startButtons.forEach(button => {
    button.addEventListener('click', handleStart);
});

input.addEventListener('keyup', (e:KeyboardEvent)=> {
   if(e.key.toLowerCase() === 'enter') {
    guess();
   }
});
submit.addEventListener('click', guess);
