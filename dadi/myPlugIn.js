var risultatiUtente = [];
var risultatiAI = [];
var quantitaVittorieUtente = 0;
var quantitaVittorieAI = 0;


var lanci = prompt("Benvenuto nella simulazione di un lancio di dadi contro l'Intelligenza artificiale. Inserisci il numero di lanci da effettuare");

var numeroLanci = parseInt(lanci);

console.log(numeroLanci);



if (Number.isNaN(numeroLanci)) {
    document.getElementById("target").innerHTML = ("Hai immesso un valore non numerico, riprova utilizzando le cifre della tasiera!");
} else {

    for (i = 0; i < numeroLanci; i++) {

        var lancioUtente = parseInt((Math.random() * 6) + 1);

        risultatiUtente.push(lancioUtente);

        var lancioAI = parseInt((Math.random() * 6) + 1);

        risultatiAI.push(lancioAI);

        document.getElementById("target").innerHTML += ("<h1 class='risultato'>" + (i + 1) + "° lancio " + lancioUtente + " a " + lancioAI + "</h1>");

        console.log(lancioUtente);
        console.log(lancioAI);
        if (lancioUtente > lancioAI) {
            document.getElementById("target").innerHTML += "<p class='verde'>" + "vinci" + "</p>";
            quantitaVittorieUtente += 1
        } else if (lancioUtente < lancioAI) {
            document.getElementById("target").innerHTML += "<p class='rosso'>" + "perdi" + "</p>";
            quantitaVittorieAI += 1

        } else {
            document.getElementById("target").innerHTML += "<p class='giallo'>" + "pareggio" + "</p>";
        };
       
    };
};

if (quantitaVittorieUtente > quantitaVittorieAI) {
    document.getElementById("risultatofinale").innerHTML = ("Hai vinto " + quantitaVittorieUtente + " partite su " + numeroLanci + " !!!");
} else if (quantitaVittorieUtente < quantitaVittorieAI) {
    document.getElementById("risultatofinale").innerHTML = ("Hai perso!!!");
} else {
    document.getElementById("risultatofinale").innerHTML = ("Avete pareggiato!!!");
};

console.log(quantitaVittorieUtente)
console.log(quantitaVittorieAI)
console.log(risultatiUtente);
console.log(risultatiAI);
