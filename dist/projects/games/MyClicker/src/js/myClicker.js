//program posiada dwa obiekty
//jeden odpowiada za widok, a drugi za zmienne plus logike
//jedna funkcja globalna, rozpoczyna zabawe


//funkcja odpoiwedzialna za wyswietlanie
var viev = {
	message: "Kliknąłeś mnie! ",

	//wyswietla ilosc kikniec
	displayNumberOfClick: function (number) {
		var div = document.getElementById("message");
		return div.innerHTML = this.message + number + " razy!";
	},

	//odpowiada za wysietlanie czasu
	displayTimeToEndInSeconds: function () {
		var clock = document.getElementById("timer");
		clock.innerHTML = "0" + variableOperations.seconds + ":" + variableOperations.miliSeconds + variableOperations.microSeconds;
	}

};

//logika plus zmienne
var variableOperations = {
	count: 0,	//ilosc klikniec
	close: false,	//zamyka petle
	seconds: 0,	//ilosc sekund
	oneThousen: 1000,	//do sekund
	oneHundred: 100,	//do milisekund
	oneTen: 10,	//do microsekund
	miliSeconds: 0,
	microSeconds: 0,

	//klikniecia
	clicker: function () {
		this.count++;
		return viev.displayNumberOfClick (this.count);
	},

	//licznik
	counterToEnd: function () {
			if (!this.close) { 
				this.close = true;	//tylko raz zadziala funkcja
				for (var i = 0; i < 10; i++) {
					setTimeout(this.startSecond,this.oneThousen);
					this.oneThousen += 1000;	//za sekundy
					for (var j = 0; j < 10; j++) {
						setTimeout(this.startMiliSecond,this.oneHundred);
						this.oneHundred += 100;	//za milisekundy
						for (var k = 0; k < 10; k++) {
							setTimeout(this.startMicroSecond,this.oneTen);
							this.oneTen += 10;	//za microsekundy
						}
					}
			}
		}
	},

	//do sekund oraz zakonczenie
	startSecond: function () {
		viev.displayTimeToEndInSeconds();
		variableOperations.seconds++;
		if (variableOperations.seconds === 10) {
			if (variableOperations.count >= 50) {
				alert("KONIEC CZASU!!!\n" + "Kliknąłeś " + variableOperations.count + "\nJesteś najlepszy");
				return window.location.href = "http://kg.glogow.pl/games/MyClicker/addscore.php?w="+variableOperations.count;
			}
			else if ((variableOperations.count < 50) && (variableOperations.count >= 25)) {
				alert("KONIEC CZASU!!!\n" + "Kliknąłeś " + variableOperations.count + "\nNieźle, ale możesz być lepszy");
				return window.location.href = "http://kg.glogow.pl/games/MyClicker/addscore.php?w="+variableOperations.count;
			}
			else {
				alert("KONIEC CZASU!!!\n" + "Kliknąłeś " + variableOperations.count + "\nKiepsko, na pewno możesz lepiej");
				return window.location.href = "http://kg.glogow.pl/games/MyClicker/addscore.php?w="+variableOperations.count;
			}
		};
	},

	//do mili
	startMiliSecond: function () {
		viev.displayTimeToEndInSeconds();
		variableOperations.miliSeconds++;
		if (variableOperations.miliSeconds === 10) {
			return variableOperations.miliSeconds = 0;
		}
	},

	//do micor
	startMicroSecond: function () {
		viev.displayTimeToEndInSeconds();
		variableOperations.microSeconds++;
		if (variableOperations.microSeconds === 10) {
			return variableOperations.microSeconds = 0;
		}
	}

};
	
	//rozpoczecie
	function start () {
		variableOperations.clicker ();
		variableOperations.counterToEnd();
	};

	