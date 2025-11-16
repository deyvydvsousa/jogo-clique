const target = document.getElementById('target');
const scoreDisplay = document.getElementById('scoreDisplay');
const startButton = document.getElementById('start-btn');
const finalScore = document.getElementById('finalScore');

let score = 0
let playing = true;
let gameTimeout; // Variável para armazenar o timeout do jogo

function moveAlvo(){
  const x = Math.random() * (window.innerWidth - target.offsetWidth);
  const y = Math.random() * (window.innerHeight - target.offsetHeight);

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
};

function iniciarJogo(){
  // Esconde o botão
  startButton.style.display = 'none';

  // Esconde a div de resultado
  finalScore.style.display = 'none';

  // Reseta as variáveis
  score = 0;
  playing = true;
  scoreDisplay.textContent = `${score}`;

  // Move o alvo para a primeira posição
  moveAlvo();

  // Inicia o temporizador de 10 segundos
  gameTimeout = setTimeout(() => {
    playing = false;
    target.style.display = 'none'; // Esconde o alvo

    // Mostra a div de resultado
    finalScore.style.display = 'block';

    // reseta o botão
    startButton.style.display = 'block';
    target.style.display = 'block';
  }, 10000);
};

startButton.addEventListener('click', iniciarJogo);

target.addEventListener('click', () => {
  if (!playing) return;
  score++
  scoreDisplay.textContent = `${score}`
  moveAlvo();
});
