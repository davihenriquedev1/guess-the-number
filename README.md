# Adivinhe o Número

Este é um jogo simples de adivinhar o número em que os jogadores tentam adivinhar 
um número aleatório entre 1 e 100. O sistema é projetado para funcionar em um navegador 
da web e inclui uma interface HTML e JavaScript para interação com o jogador. Aqui está um 
resumo do funcionamento do sistema:

## Funcionamento

1. Quando o jogo é carregado, um número aleatório entre 1 e 100 é gerado e armazenado na variável 
random. A variável round é inicializada como 1 para acompanhar o número de tentativas.
2. O jogador interage com a interface, digitando um palpite em um campo de entrada e clicando no botão 
"confirmar".
3. O código JavaScript verifica se o valor inserido é um número válido entre 1 e 100 utilizando a função 
isANumber.
4. Se o palpite for válido, o jogo verifica se o palpite do jogador é igual ao número aleatório (random).
    • Se for igual, a interface muda para mostrar uma mensagem de vitória com o número de tentativas e o número correto. 
    As áreas do jogo e da informação são ocultadas.
    • Se não for igual e o jogador ainda não excedeu 10 tentativas, a interface é atualizada para mostrar um novo palpite 
    e o número de tentativas é incrementado.
    • Se não for igual e o jogador já fez 10 tentativas, a interface muda para mostrar uma mensagem de derrota, exibindo o 
    número correto e informando que foi a última tentativa. As áreas do jogo e da informação são ocultadas.
    • Se o palpite não for válido (não for um número ou está fora do intervalo de 1 a 100), um aviso é exibido na interface.
5. O botão "Reiniciar" permite que o jogador recomece o jogo, recarregando a página.

## Fluxo do Jogo:

1. O jogador vê a interface com um campo para digitar um palpite e um botão "confirmar".
2. O jogador insere um palpite válido e clica em "confirmar".
3. O jogo verifica o palpite:
    • Se correto, exibe uma mensagem de vitória.
    • Se errado e há tentativas restantes, solicita um novo palpite.
    • Se errado e não há mais tentativas, exibe uma mensagem de derrota.
4. O jogador pode optar por reiniciar o jogo clicando no botão "Reiniciar".

Acesse o site aqui:
https://davihenriquelima.github.io/guess-the-number/

