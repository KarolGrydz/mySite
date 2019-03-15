window.addEventListener('load', init);

//Global variables

//Avaible levels
const level = {
	easy: {
		time: 2,
		wordsEasy: [
		'hello',
		'say',
		'house',
		'home',
		'tree',
		'bird',
		'cat',
		'about',
		'above',
		'able',
		'acid',
		'act',
		'add',
		'age',
		'aid',
		'and',
		'any',
		'arise',
		'art',
		'belt',
		'bed',
		'beer',
		'big',
		'bend',
		'bike',
		'cash',
		'cash',
		'chain',
		'chef',
		'code',
		'cop',
		'cost',
		'crew',
		'desk',
		'dig',
		'do',
		'door',
		'even',
		'extra',
		'eye',
		'far',
		'fear',
		'feel',
		'fee',
		'fill',
		'fine',
		'fix',
		'girl',
		'gift',
		'go',
		'gold',
		'god',
		'gray',
		'hair',
		'hall'
	]
	},

	medium: {
		time: 3,
		wordsMedium: [
		'fashion',
		'father',
		'favorite',
		'feeling',
		'female',
		'front',
		'fully',
		'funny',
		'grant',
		'grave',
		'great',
		'green',
		'hard',
		'health',
		'honey',
		'honor',
		'horror',
		'hospital',
		'inner',
		'inside',
		'install'
	]
	},

	hard: {
		time: 5,
		wordsHard: [
		'involvement',
		'japanese',
		'journalist',
		'judgment',
		'knowledge',
		'laboratory',
		'landscape',
		'language',
		'leadership',
		'legislation',
		'legitimate',
		'limitation',
		'literature',
		'maintenance',
		'manufacturing',
		'measurement',
		'membership',
		'mortgage',
		'motivation',
		'neighborhood',
		'nevertheless',
		'nonetheless'
	]
	}
}

//DOM elements
const wordInput = document.querySelector('#word-input');
const seconds = document.querySelector('#seconds');
const currentWord = document.querySelector('#current-word');
const message = document.querySelector('#message');
const currentTime = document.querySelector('#time');
const currentScore = document.querySelector('#score');
const highScore = document.querySelector('#high-score');
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');
let currentLevel = level.easy.time;
let words = level.easy.wordsEasy;
let count;
let status;

let time = currentLevel;
let score = 0;
let isPlaying;

easy.addEventListener('click', () => { 
	currentLevel = level.easy.time; 
	words = level.easy.wordsEasy; 
	window.clearInterval(count); 
	window.clearInterval(status); 
	init(); 
});
medium.addEventListener('click', () => { 
	currentLevel = level.medium.time; 
	words = level.medium.wordsMedium; 
	window.clearInterval(count); 
	window.clearInterval(status);
	init(); 
});
hard.addEventListener('click', () => { 
	currentLevel = level.hard.time; 
	words = level.hard.wordsHard; 
	window.clearInterval(count); 
	window.clearInterval(status);
	init(); 
});

//To change level

//init func
function init() {
	//Show numre of seconds
	seconds.innerHTML = currentLevel;
	//Highscore
	showHighscore();
	//Load word from array
	showWord(words);
	//Start matching on input
	wordInput.addEventListener('input', startMatch);
	//Call a countdown everysec
	count = setInterval(countdown, 1000);
	//check the status of the game
	status = setInterval(checkStatus, 50);
}

//Start the match
function startMatch() {
	if (matchWords()) {
		isPlaying = true;
		time = currentLevel + 1;
		showWord(words);
		wordInput.value = '';
		score++;
		if (score > localStorage.highestScore) {
			localStorage.highestScore = score;
			highScore.innerHTML = localStorage.highestScore;
		}
	}

	//dont show -1 for score
	if (score === -1) {
		currentScore.innerHTML = 0;
	} else {
		currentScore.innerHTML = score;
	}
	
}

//Match currentWord to wordInput
function matchWords() {
	if (wordInput.value === currentWord.innerHTML) {
		message.innerHTML = 'Correct!!!';
		return true;
	} else {
		message.innerHTML = '';
		return false;
	}
}

//Pick and show random word
function showWord(words) {
	//Generate random array index
	const randIndex = Math.floor(Math.random() * words.length);
	//Output a random word
	currentWord.innerHTML = words[randIndex];
}

//countdown functions
function countdown() {
	//time is not timeout
	if (time > 0) {
		time--;
	} else if( time === 0) {
		isPlaying = false;
	}
	//show time
	currentTime.innerHTML = time;
}

function checkStatus() {
	if (!isPlaying && time === 0) {
		message.innerHTML = 'Game Over!!!';
		score = -1;
	}
}

function showHighscore() {
	if (typeof(Storage) !== "undefined") {
	    if (localStorage.highestScore) {

	    	highScore.innerHTML = localStorage.highestScore;
	    } else {
	    	localStorage.setItem('highestScore', 0);
	    }
	} else {
	    highScore.innerHTML = 'Sorry, but your web browser dont support localStorage, please change or update your browser.'
	}
}