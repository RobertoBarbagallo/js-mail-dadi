var emailValide = ["fabio@boolean.it", "roberto@boolean.it", "giacomo@boolean.it", "diana@boolean.it", "sergio@boolean.it", "antonio@boolean.it", "gabriella@boolean.it", "michela@boolean.it"];

var emailInserita = prompt ("Inserisci la tua email per accedere al sito");

var autenticazione = emailValide.includes(emailInserita);


if (autenticazione === true) {
    document.getElementById("target").innerHTML= emailInserita + " è una email valida, a breve verrai reindirizzato";
}else{
    var richiestaNuovaIscrizione = prompt (emailInserita + " non è una email valida, prova ad iscriverti al volo inserendo nuovamente la tua mail");
    
    emailValide.push(richiestaNuovaIscrizione);

    var richiestaNuovaRegistrazione = emailValide.includes(richiestaNuovaIscrizione);

    if (autenticazione === true){
        document.getElementById("target").innerHTML= emailInserita + "è una email valida, a breve verrai reindirizzato";
    }else if ((richiestaNuovaRegistrazione === true) && (richiestaNuovaIscrizione === emailInserita)){
        document.getElementById("target").innerHTML= emailInserita + " è ora una email valida, a breve verrai reindirizzato - Grazie per esserti iscritto";
    }else{
        document.getElementById("target").innerHTML= emailInserita + ", la prima mail che hai inserito è diversa da " + richiestaNuovaIscrizione + " prova a ricaricare la pagina";

    }

}
console.log(emailInserita);
console.log(richiestaNuovaIscrizione)
console.log(emailValide);