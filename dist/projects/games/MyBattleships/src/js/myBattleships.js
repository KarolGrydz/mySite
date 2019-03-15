//znajduja sie tutaj 3 obiekty
// oraz kilka funkcji wykonawczych 
//kazdy z obiektow bedzie opisany

//Obiekt widok, informuje nas czy trafilismy
//oraz ilosc trafien
var viev = {
	//pojawienie sie komunikatu czy trafiles
	displayMessage: function (msg) {
		var message = document.getElementById("messageArea");
		message.innerHTML = msg;
	},

	//dodaje na plany statek, informacja ze uzytkownik trafil
	displayHit: function (loc) {
		if ((loc>0 || loc===0) && loc<7) {
			loc = "0" + loc;
			var cell = document.getElementById(loc);
			cell.setAttribute("class", "hit");
		}
		var cell = document.getElementById(loc);
		cell.setAttribute("class", "hit");
	},
	//dodaje na planszy "miss", informacja ze uzytkownik zpudlowal
	displayMiss: function (loc) {
		if ((loc>0 || loc===0) && loc<7) {
			loc = "0" + loc;
			var cell = document.getElementById(loc);
			cell.setAttribute("class", "miss");
		}
		var cell = document.getElementById(loc);
		cell.setAttribute("class", "miss");
	},
	//wyswietla ilosc strzalow
	displayNumberofHits: function () {
		var numberHits = controler.playerHits;
		document.getElementById("numberOfHitArea").innerHTML = "Strzełiłeś już: "  +numberHits + " razy!" ;
	}
};

//model operuje plansza, ile mamy statkow,
//rozmiar tablicy, ile statkow zatonelo,
//jak dlugie sa statki, do tego funkcje,
//strzal, zatopiony, generowanie statku, kolzizja z innym statkiem
var model = {
	boardSize: 7, //szerokosc planszy
	numShips: 3, //ilosc statkow
	shipLength: 3, //dlugosc statkow
	shipDown: 0, //ilosc zatopionych statkow
	ships: [{locations: [0, 0, 0], hit: ["", "", ""]}, //pierwszy statek
			{locations: [0, 0, 0], hit: ["", "", ""]}, //drugi statek
			{locations: [0, 0, 0], hit: ["", "", ""]}], //trzeci statek

	//funkcja w sumie glowna ktora opisuje nam strzal i czy trafilismy
	fire: function (target) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var x = 0; x < this.shipLength; x++) {
				if (target == ship.locations[x]) { //sprawdzenie czy trafilismy
					ship.hit[x] = "hit";
					viev.displayHit(target);
					viev.displayMessage("TRAFIONY!");
					if(this.isDown(ship)) {
						viev.displayMessage("Zatopiłeś mój okręt!");
						this.shipDown++;
					};
					return true;
				}
			}
		}
		viev.displayMiss(target);
		viev.displayMessage("Spudłowałeś!");
		return false;
	},

	//funkcja ktora sprawdza nam czy statek zatonol
	isDown: function (ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hit[i] !== "hit") {
				return false;
			};
		};
		return true;
	},

	//tworzy statek, wywolanie rowniez funkcji kolizji
	generateShipLoc: function () {
		var locations;
		for (var i = 0; i< this.numShips; i++){
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
		console.log("Tablica okrętów: ");
		console.log(this.ships);
	},

	//tworzenie miejsca statku
	generateShip: function () {
		var direction = Math.floor(Math.random() * 2);
		var row, col;
		if (direction === 1) {
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		} else{
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];

		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	//sprawdzanie czy na siebie nie najda, juz dziala dobrze
	collision: function (locations) {
		for (var k = 0; k < locations.length; k++) {
			var check = locations[k]
			for (var i = 0; i < this.numShips; i++) {
				var ship = model.ships[i];
				for (var j = 0; j < locations.length; j++) {
					if (ship.locations[j] === locations[k]) {
						return true;
					}
				};
			};
		};
		return false;
	}
};

//obiekt kontroler, zliczuje strzaly, jest tylko jedna funkcja
var controler = {
	playerHits: 0, //Ilosc oddanych strzalow

	checkingTheSameTarget: function (target) {
			if ((target>0 || target===0) && target<7) {
			target = "0" + target;
			if (document.getElementById(target).getAttribute("class")) {return false;}
			return true;
			};
			if (document.getElementById(target).getAttribute("class")) {return false;}
			return true;
			},

	//bardzo wazna funkcja, uruchamia funkcje fire
	startFunction: function (event) {
		var x = event.target.id;
		var target = Number(x);
		if (this.checkingTheSameTarget(target)) {
			this.playerHits++;
			model.fire(target);
			viev.displayNumberofHits();
			if (model.shipDown === 3) {
				if (this.playerHits < 20) {
					alert("ZATOPIŁEŚ WSZYSTKIE STATKI!" + "\nPRAWDZIWY PROFESJONALISTA!!!");
					return window.location.href = "http://kg.glogow.pl/games/MyBattleships/addscore.php?w="+this.playerHits;
				} else if ((this.playerHits >= 20) && (this.playerHits < 40)) {
					alert("ZATOPIŁEŚ WSZYSTKIE STATKI!" + "\nDobrze, ale możesz lepiej!");
					return window.location.href = "http://kg.glogow.pl/games/MyBattleships/addscore.php?w="+this.playerHits;
				} else {
					alert("ZATOPIŁEŚ WSZYSTKIE STATKI!" + "\nKiepso, potrenuj!");
					return window.location.href = "http://kg.glogow.pl/games/MyBattleships/addscore.php?w="+this.playerHits;
				}
			}
		} else {
			alert("Już tutaj strzelałeś!");
		}
	}
};

//dzieki tej funkcji tworzymy statki
function puttingShipsOnMap () {
	model.generateShipLoc();
}

window.onload = puttingShipsOnMap;

//********* Modal content *****************

//Get modal element
var modal = document.getElementById('simplyModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtn2 = document.getElementById('closeModalFooter');

//Listen for click

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
closeBtn2.addEventListener('click', closeModal);

function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}
