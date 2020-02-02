var tds = document.querySelectorAll("td");
var ticks = ['X', '0'];
var tickPosition = 0;
var lastPosition = null;
var endGame = false;
var mafiot = false;
var subscribed = false;
var noP1 = 0, noP2 = 0, noG = 0;
var nameP1 = "", nameP2 = "";

Array.from(tds).forEach(function (td) {
	td.addEventListener("click", function () {
		if (this.textContent === "X" || this.textContent === "0" || endGame || !subscribed) {
			return;
		}
		this.textContent = ticks[tickPosition++ % 2];
		lastPosition = this;

		var winner = getGameWinner();
		if (winner === 'e' && tickPosition === 9) {
			console.log('Egal');
			endGame = true;
		}
		if (winner === "0" || winner === "X" || mafiot) {
			console.log(mafiot ? 'Giovanni' : winner);

			document.getElementById("undo").hidden = true;

			if (winner === "0") noP2++;
			else if (winner === "X") noP1++;

			if (mafiot) noG++;

			var p1 = (nameP1 + " " + noP1);
			var p2 = (nameP2 + " " + noP2);
			var g = ("Giovanni " + noG);
			var score = [p1, p2, g];

			var ps = document.querySelectorAll("p");
			for (var i = 0; i < ps.length; ++i) {
				ps[i].textContent = score[i];
			}

			endGame = true;
		}
		
	});
});

function getGameWinner() {
	for (var idx = 0; idx < 9; idx += 3) {
		var row = [tds[idx], tds[idx+1], tds[idx+2]];
		if (areObjectsEqual(...row)) {
			let temp = tds[idx].textContent;
			declareWinner(...row);
			return temp;
		}
	}

	for (var idx = 0; idx < 3; ++idx) {
		var col = [tds[idx], tds[idx+3], tds[idx+6]];
		if (areObjectsEqual(...col)) {
			let temp = tds[idx].textContent;
			declareWinner(...col);
			return temp;
		}
	}
		
	var diag1 = [tds[0], tds[4], tds[8]];
	if (areObjectsEqual(...diag1)) {
		let temp = tds[idx].textContent;
		declareWinner(...diag1);
		return temp;
	}

	var diag2 = [tds[2], tds[4], tds[6]];
	if (areObjectsEqual(...diag2)) {
		let temp = tds[idx].textContent;
		declareWinner(...diag2);
		return temp;
	}

	return "e";
}

function declareWinner(...args) {
	args.forEach(function (el) { el.textContent = '-'});
}

function clear(elem) {
	elem.textContent = "";
}

function areObjectsEqual(a, b, c, key = 'textContent') {
	return a.textContent === b.textContent && b.textContent === c.textContent && (mafiot || a.textContent !== '');
}

function largestNumber(a, b, c) {
	if (a >= b && a >= c) return a
  	if (b >= a && b >= c) return b
    if (c >= a && c >= b) return c
    return 0;
}

document.querySelectorAll("button")[0].addEventListener("click", function () {
		tds.forEach(clear);
		tickPosition = 0;
		lastPosition = null;
		endGame = false;
		mafiot = false;
		document.getElementById("giovanni").classList.remove('active');
		document.getElementById("undo").removeAttribute("hidden");
});

document.getElementById("undo").addEventListener('click', function() {
		if ((lastPosition || {}).textContent) {
			lastPosition.textContent = '';
			tickPosition -= 1;
		}
	});

document.getElementById("giovanni").addEventListener("click", function() {
	mafiot = true;
	this.classList.add('active');
});

document.getElementById("play").addEventListener("click", function() {
	nameP1 = document.getElementById("nume1").value;
	nameP2 = document.getElementById("nume2").value;
	if (nameP1 === "" || nameP2 === "") {
		document.getElementById("sarp").removeAttribute("hidden");
		return;
	} else {
		document.getElementById("nume1").hidden = true;
		document.getElementById("nume2").hidden = true;
		document.getElementById("play").hidden = true;
		document.getElementById("sarp").hidden = true;
		subscribed = true;
	}
})

document.getElementById("reset-leaderboard").addEventListener("click", function() {
	var all = document.querySelectorAll("p");
	for (var i = 0; i < all.length; ++i) {
		all[i].textContent = "";
	}
	noP1 = 0;
	noP2 = 0;
	noG = 0;
});
