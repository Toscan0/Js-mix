import { canvas, ctx } from './canvas.js';

export { drawScore, drawLives, gameOver };

var score = 0;

var lives = 3;

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function gameOver() {
    lives--;
    if (!lives) {
        alert("GAME OVER");
        document.location.reload();
    }
    else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
    }
}