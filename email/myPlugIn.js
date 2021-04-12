var emailValide = ["fabio@boolean.it", "roberto@boolean.it", "giacomo@boolean.it", "diana@boolean.it", "sergio@boolean.it", "antonio@boolean.it", "gabriella@boolean.it", "michela@boolean.it"];
var nuoveIscrizioni = [];
var emailInserita = prompt("Inserisci la tua email per accedere al sito");
var i = 0;
var trovato = false;

for (var i = 0; i < emailValide.length; i++) {
    if (emailInserita == emailValide[i]) {
        trovato = true
    } else {
        nuoveIscrizioni.push(emailInserita);
    }
};
console.log("nuova iscrizione " + nuoveIscrizioni)
console.log(trovato)
if (trovato) {
    document.getElementById("target").innerHTML = emailInserita + " è una email valida, a breve verrai reindirizzato";
} else {

    if (nuoveIscrizioni.length > 1) {
        var richiestaNuovaIscrizione = prompt(emailInserita + " non è una email valida, prova ad iscriverti al volo inserendo nuovamente la tua mail");
        if (emailInserita === richiestaNuovaIscrizione) {
            document.getElementById("target").innerHTML = emailInserita + " è ora una email valida, a breve verrai reindirizzato - Grazie per esserti iscritto";
        } else {
            document.getElementById("target").innerHTML = emailInserita + ", la prima mail che hai inserito, è diversa da " + richiestaNuovaIscrizione + " prova a ricaricare la pagina";
        }

    } else {
        console.log("ERROR");
    };
};

console.log(emailInserita);
console.log(richiestaNuovaIscrizione);
console.log(emailValide);
