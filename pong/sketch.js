let playerY, compY, ballX, ballY, ballSpeedX, ballSpeedY;
let paddleHeight = 100;
let paddleWidth = 10;
let ballSize = 20;
let compSpeed = 4; // Velocidade da raquete do computador
let barHeight = 15; // Altura das barras superior e inferior
let speedIncreaseRate = 1.1; // Taxa de aumento de 10%

function setup() {
  createCanvas(800, 400);
  resetBall();
  playerY = height / 2 - paddleHeight / 2;
  compY = height / 2 - paddleHeight / 2;
}

function draw() {
  background(0);

  // Desenha as barras horizontais (superior e inferior)
  fill(255);
  rect(0, 0, width, barHeight); // Barra superior
  rect(0, height - barHeight, width, barHeight); // Barra inferior

  // Desenha as raquetes
  rect(30, playerY, paddleWidth, paddleHeight); // Jogador
  rect(width - 40, compY, paddleWidth, paddleHeight); // Computador

  // Desenha a bola
  ellipse(ballX, ballY, ballSize, ballSize);

  // Movimento da bola
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Rebote nas paredes superior e inferior (barras)
  if (ballY - ballSize / 2 < barHeight || ballY + ballSize / 2 > height - barHeight) {
    ballSpeedY *= -1;
  }

  // Verifica colisão com a raquete do jogador
  if (ballX - ballSize / 2 < 30 + paddleWidth && ballY > playerY && ballY < playerY + paddleHeight) {
    ballSpeedX *= -1;
    ballX = 30 + paddleWidth + ballSize / 2; // Corrige a posição para evitar "colar" na raquete

    // Aumenta a velocidade da bola em 10%
    ballSpeedX *= speedIncreaseRate;
    ballSpeedY *= speedIncreaseRate;
  }

  // Verifica colisão com a raquete do computador
  if (ballX + ballSize / 2 > width - 40 && ballY > compY && ballY < compY + paddleHeight) {
    ballSpeedX *= -1;
    ballX = width - 40 - ballSize / 2; // Corrige a posição para evitar "colar" na raquete
    
     // Aumenta a velocidade da bola em 10%
    ballSpeedX *= speedIncreaseRate;
    ballSpeedY *= speedIncreaseRate;
  }

  // Gols (quando a bola sai da tela)
  if (ballX - ballSize / 2 < 0 || ballX + ballSize / 2 > width) {
    resetBall();
  }

  // Movimento do jogador
  playerY = constrain(mouseY - paddleHeight / 2, barHeight, height - barHeight - paddleHeight);

  // Movimento do computador
  moveCompToBall();
}

// Faz a raquete do computador seguir a bola, mas com uma velocidade limitada
function moveCompToBall() {
  let targetY = ballY - paddleHeight / 2; // O computador tenta seguir o centro da bola

  if (compY < targetY) {
    compY += compSpeed; // Movimenta para baixo
  } else if (compY > targetY) {
    compY -= compSpeed; // Movimenta para cima
  }

  // Constrange a posição da raquete do computador para que ela fique entre as barras
  compY = constrain(compY, barHeight, height - barHeight - paddleHeight);
}

// Reinicia a bola no centro com movimento aleatório
function resetBall() {
  ballX = width / 2;
  ballY = height / 2;
  ballSpeedX = random(3, 5) * (random() > 0.5 ? 1 : -1);
  ballSpeedY = random(2, 4) * (random() > 0.5 ? 1 : -1);
}
