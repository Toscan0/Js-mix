import { Canvas } from './canvas.js';
import { Aircraft } from './aircraft.js';
import { UserInput } from './user-input.js';

const canvas = new Canvas("gameCanvas", 1800, 320);

const playerStartPos = [5, canvas.canvasHeight / 2];
const player = new Aircraft(playerStartPos[0], playerStartPos[1], "player");

const userInput = new UserInput();

function start() {
    // draw player start pos
    player.drawAircraft(canvas.ctx);

    // Start listined - Todo myabe pass this to player code
    userInput.eventListener();
}

function update() {
    canvas.clearCanvas();

    player.drawAircraft(canvas.ctx);
    player.movePlayer(userInput.upPressed, userInput.downPressed);

    requestAnimationFrame(update);
}

start();
update();