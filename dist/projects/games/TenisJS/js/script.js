const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const cw = canvas.width = 1000;
const ch = canvas.height = 500;

const ballSize = 20;
let ballX = (cw / 2) - (ballSize / 2);
let ballY = (ch / 2) - (ballSize / 2);

const paddelHeight = 100;
const paddelWidth = 20;

const playerX = 70;
const aiX = 910;

if (localStorage.getItem('player')) {
	console.log("storage jest ustawiony");
} else {
	localStorage.setItem('player', 0);
	localStorage.setItem('ai', 0);
}

if (localStorage.player == 5 || localStorage.ai == 5 ) {
	localStorage.setItem('player', 0);
	localStorage.setItem('ai', 0);
}

let playerY = 200;
let aiY = 200;

let playerPoints = Number(localStorage.getItem('player'));
let aiPoints = Number(localStorage.getItem('ai'));

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 1;
let ballSpeedY = 1;

function player() {
	ctx.fillStyle = '#7FFF00';
	ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}

function AI() {
	ctx.fillStyle = 'yellow';
	ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
}

function table() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, cw, ch);

	for (let linePosition = 20; linePosition < ch; linePosition += 30) {
		ctx.fillStyle = 'gray';
		ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);
	}
}

function points() {
	if (ballX <= 0) {
		aiPoints += 1;
		localStorage.setItem('ai', aiPoints);
		alert(`Punkt dla komputera!
				Wynik to ${playerPoints} : ${aiPoints}`);
		location.reload();
	}

	if (ballX + ballSize >= cw) {
		playerPoints += 1;
		localStorage.setItem('player', playerPoints);
		alert(`Punkt dla gracza!
				Wynik to ${playerPoints} : ${aiPoints}`);
		location.reload();
	}
}

function ball() {
	ctx.fillStyle = 'white';
	ctx.fillRect(ballX, ballY, ballSize, ballSize);

	ballX += ballSpeedX;
	ballY += ballSpeedY;

	if (ballY <= 0 || ballY + ballSize >= ch) {
		ballSpeedY = -ballSpeedY;
		speedUp();
	}

	if (ballX <= 0 || ballX + ballSize >= cw) {
		points();
	}

	if (ballY >= (playerY - (paddelHeight / 2) ) && ballY <= (playerY + (paddelHeight) ) ) {
		if (ballX < playerX + paddelWidth ){
			ballSpeedX = -ballSpeedX;
			speedUp();
		}
	}
	 
	if (ballY >= (aiY - (paddelHeight / 2) ) && ballY <= (aiY + (paddelHeight) ) ) {
		if (ballX > aiX - paddelWidth) {
			ballSpeedX = -ballSpeedX;
			speedUp();
		}	
	}
}

function speedUp() {
	if (ballSpeedX > 0 && ballSpeedX <= 20) {
		ballSpeedX += 1;
	} else if(ballSpeedX < 0 && ballSpeedX >= -16) {
		ballSpeedX -= 1;
	}

	if (ballSpeedY > 0 && ballSpeedY <= 20) {
		ballSpeedY += 1;
	} else if(ballSpeedY < 0 && ballSpeedY >= -16) {
		ballSpeedY -= 1;
	}
}

function aiPosition() {
	const middlePaddel = aiY + paddelHeight/2;
	const middleBall = ballY + ballSize/2;

	if (ballX > 500) {
		if (middlePaddel - middleBall > 200) {
			aiY -= 30; 
		} else if (middlePaddel - middleBall > 50) {
			aiY -= 15;
		} else if (middlePaddel - middleBall < -200) {
			aiY += 15;
		} else if (middlePaddel - middleBall < -50) {
			aiY += 30;
		}
	} else if(ballX <= 500 && ballX > 150) {
		if (middlePaddel - middleBall > 100) {
			aiY -= 3;
		} else if (middlePaddel - middleBall < -100) {
			aiY += +3;
		}
	}
}	

const topCanvas = canvas.offsetTop;

canvas.addEventListener('mousemove', (e) => {
	playerY = (e.clientY - topCanvas) - paddelHeight / 2;

	if (playerY >= ch - paddelHeight) {
		playerY = ch - paddelHeight;
	}

	if (playerY <= 0) {
		playerY = 0;
	}
})

function game() {
	table();
	ball();
	player();
	AI();
	aiPosition();
}

setInterval(game, 1000 / 60);
