var emailValide = ["fabio@boolean.it", "roberto@boolean.it", "giacomo@boolean.it", "diana@boolean.it", "sergio@boolean.it", "antonio@boolean.it", "gabriella@boolean.it", "michela@boolean.it"];
var tentativoNuovaIscrizione = false;
var richiestaNuovaIscrizione = [];
var nuovaAutenticazione = false;



var emailInserita = prompt("Inserisci la tua email per accedere al sito");
var i = 0;
var trovato = false;



console.log("Elenco originale delle email che possono accedere al sito: " + emailValide);

for (var i = 0; i < emailValide.length; i++) {
    if (emailInserita == emailValide[i]) {
        trovato = true
    } else {
        tentativoNuovaIscrizione = true
    }
};


console.log("L'email inserita è valida: " + trovato);
console.log("L'email inserita non è valida:  " + tentativoNuovaIscrizione);

var nuovaAutenticazione = false;

if (trovato) {
    document.getElementById("target").innerHTML = emailInserita + " è una email valida, a breve verrai reindirizzato";
} else {

    var richiestaNuovaIscrizione = prompt(emailInserita + " non è una email valida, prova ad iscriverti al volo inserendo nuovamente la tua mail");
    if (emailInserita === richiestaNuovaIscrizione) {
        document.getElementById("target").innerHTML = emailInserita + " è ora una email valida, a breve verrai reindirizzato - Grazie per esserti iscritto";
        nuovaAutenticazione = true;
        emailValide.push(richiestaNuovaIscrizione);
    } else {
        document.getElementById("target").innerHTML = emailInserita + ", la prima mail che hai inserito, è diversa da " + richiestaNuovaIscrizione + " prova a ricaricare la pagina";
    };

};

console.log("Prima email inserita: " + emailInserita);
console.log("Secondo tentativo, se corrisponde al primo ci sarà una nuova autenticazione: " + richiestaNuovaIscrizione);
console.log("E'stata eseguita una nuova autenticazione: " + nuovaAutenticazione);
console.log("Elenco delle mail valide, controllare se è presente una nuova iscrizione!: " + emailValide.join(', '));
