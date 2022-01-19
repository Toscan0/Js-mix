import { initializeBricks, drawBricks, collisionDetection } from './bricks.js';
import { canvas, clearCanvas } from './canvas.js';
import { x, y, dx, dy, drawBall, checkColision } from './ball.js';
import { drawPaddle } from './paddle.js';
import { drawScore, drawLives } from './score.js';
import { rightPressed, leftPressed } from './user-input.js';

initializeBricks();

function handleUserInput() {
    if (rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if (leftPressed) {
        paddleX -= 7;
        if (paddleX < 0) {
            paddleX = 0;
        }
    }
}



function draw() {
    clearCanvas();

    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    checkColision();
    handleUserInput();
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}


draw();