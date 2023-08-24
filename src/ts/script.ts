//variáveis globais
let random = Math.floor(Math.random()*100 +1); //gerando número aleatório
let round = 1; //iniciando o número de tentativas
let currentGuess = 0; //variável que armazenará o palpite atualpara preencher na tela e verificar se igual a "random"


//elementos
let roundEl = document.querySelector('#round') as HTMLDivElement;
let guessEL = document.querySelector('#guess') as HTMLDivElement;
let input = document.querySelector('#input-number') as HTMLInputElement;
let submit = document.querySelector('#submit-number') as HTMLInputElement;
let gameArea = document.querySelector('.game-area') as HTMLDivElement;
let infoArea = document.querySelector('.info-area') as HTMLDivElement;
let resultArea = document.querySelector('.result-area') as HTMLDivElement;
let resultNumber = document.querySelector('.result-area .number') as HTMLDivElement;
let titleRes = document.querySelector('#title-res') as HTMLDivElement;
let msgRes = document.querySelector('#msg-res') as HTMLDivElement;
let numberCardGame = document.querySelector('.game-area .number-card .number') as HTMLDivElement;
let restart = document.querySelector('.restart') as HTMLButtonElement;
let restart1 = document.querySelector('.restart1') as HTMLButtonElement;
let alerta = document.querySelector('#clue') as HTMLLabelElement;

roundEl.innerHTML = `Tentativa ${round.toString()}`;

//funções

function isANumber(n:any):boolean {
    return /^\d+$/.test(n)
}

function guess() {

    if(isANumber(input.value)) {

        currentGuess = parseInt(input.value);

        if(currentGuess && currentGuess > 0 && currentGuess <= 100) {
            let guessP = document.createElement('p') as HTMLParagraphElement ;
            guessP.classList.add('guess-number');
            guessP.innerHTML = currentGuess.toString();
            guessEL.appendChild(guessP);
    
            if(currentGuess === random) {
                gameArea.style.display = 'none';
                infoArea.style.display = 'none';
                resultNumber.innerHTML = random.toString();
    
                titleRes.innerHTML = 'PARABÉNS';
                titleRes.style.color = 'chartreuse';
                msgRes.innerHTML = `Você venceu na ${round.toString()}ª tentativa`;
                resultArea.style.display = 'flex';
    
            } else if(currentGuess !== random && round<10) {
                numberCardGame.innerHTML = 'Tente Novamente';
                round++;
                roundEl.innerHTML = `Tentativa ${round.toString()}`;
                
                input.value = '';
    
                alerta.classList.remove('alerta');
    
            } else if (currentGuess !== random && round>=10) {
                gameArea.style.display = 'none';
                infoArea.style.display = 'none';
    
                resultNumber.innerHTML = random.toString();
                titleRes.innerHTML = 'QUE PENA';
                titleRes.style.color = 'red';
                msgRes.innerHTML = `Você perdeu a ${round.toString()}ª e última tentativa`;
                resultArea.style.display = 'flex';
    
                input.value = '';
    
                alerta.classList.remove('alerta');
            }
    
        } else {
            alerta.classList.add('alerta');
            
            input.value = '';
        }
    } else {
        alerta.classList.add('alerta');
        
        input.value = '';
    }

}

submit.addEventListener('click', guess);
restart.addEventListener('click', ()=> {
    location.reload();
})
restart1.addEventListener('click', ()=> {
    location.reload();
})