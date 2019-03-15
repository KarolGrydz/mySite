//program posiada dwa obiekty
//jeden odpowiada za widok, a drugi za zmienne plus logike
//jedna funkcja globalna, rozpoczyna zabawe


//funkcja odpoiwedzialna za wyswietlanie
var viev = {
	message: "You clicked me! ",

	//wyswietla ilosc kikniec
	displayNumberOfClick: function (number) {
		var div = document.getElementById("message");
		return div.innerHTML = this.message + number + " times!";
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
				alert("END OF TIME!!!\n" + "You have clicked " + variableOperations.count + "\nYou are the best!!!");
				return location.reload();
			}
			else if ((variableOperations.count < 50) && (variableOperations.count >= 25)) {
				alert("END OF TIME!!!\n" + "You have clicked " + variableOperations.count + "\nNot bad, but you can be better");
				return location.reload();
			}
			else {
				alert("END OF TIME!!!\n" + "You have clicked " + variableOperations.count + "\nPoor, I'am sure you can better");
				return location.reload();
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

	