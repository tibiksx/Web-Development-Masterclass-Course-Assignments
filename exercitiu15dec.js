alert("*sunet-secret*");

var iteme = 0;

var nume = prompt("Care este numele tau de familie?");
var prenume = prompt("Care este prenumele tau?");

if (nume[0] == prenume[0]) {
	iteme++;
}

var varsta = prompt("Cati ani ai?");

if (varsta >= 15 && varsta <= 25) {
	iteme++;
}

var inaltime = prompt("Ce inaltime ai? (in cm)");

if (inaltime >= 180) {
	iteme++;
}

var fecioara = prompt("Care este numele de fecioara al mamei tale?");

if (fecioara[fecioara.length - 1] == 'a') {
	iteme++;
}

if (iteme == 4) {
	console.log("Esti de-al nostru");
} else {
	console.log("Error 404...");
}
