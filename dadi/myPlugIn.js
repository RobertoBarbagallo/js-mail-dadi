var risultatiUtente = [];
var risultatiAI = [];
var quantitaVittorieUtente = [];
var quantitaVittorieAI = [];

var lanci = prompt ("Benvenuto nella simulazione di un lancio di dadi contro l'Intelligenza artificiale. Inserisci il numero di lanci da effettuare");

var numeroLanci = parseInt (lanci);

console.log(numeroLanci);

var i = 0;


if (Number.isNaN(numeroLanci)){
    document.getElementById("target").innerHTML= ("Hai immesso un valore non numerico, riprova utilizzando le cifre della tasiera!");
}else{
  
    for (i=0; i <numeroLanci; i++) {
       
        var lancioUtente = parseInt((Math.random () * 6) + 1);

        risultatiUtente.push(lancioUtente);

        var lancioAI = parseInt((Math.random () * 6) + 1);

        risultatiAI.push (lancioAI);

        document.getElementById("target").innerHTML+= ("<h1 class='risultato'>" + (i + 1) + "° lancio " + lancioUtente + " a " + lancioAI + "</h1>");

        console.log(lancioUtente);
        console.log(lancioAI);
            if (lancioUtente>lancioAI){

            document.getElementById("target").innerHTML+= "<p class='verde'>" + "vinci" + "</p>";
             }else if (lancioUtente<lancioAI){

            document.getElementById("target").innerHTML+= "<p class='rosso'>" + "perdi" + "</p>"; 
            
             }else{
            document.getElementById("target").innerHTML+= "<p class='giallo'>" + "pareggio" + "</p>";
             }

             var counter = "1";

             if (lancioUtente>lancioAI){
                 quantitaVittorieUtente.push (counter);
             }else if(lancioUtente<lancioAI){
                 quantitaVittorieAI.push (counter);
             }else{
                quantitaVittorieUtente.push (counter);
                quantitaVittorieAI.push (counter);
             }
        
    };
};

if (quantitaVittorieUtente.length>quantitaVittorieAI.length){

    document.getElementById("risultatofinale").innerHTML= ("Hai vinto!!" + quantitaVittorieUtente.length + " partite su " + numeroLanci);

}else if (quantitaVittorieUtente.length<quantitaVittorieAI.length){
    document.getElementById("risultatofinale").innerHTML= ("Hai perso!!");
}else{
    document.getElementById("risultatofinale").innerHTM = ("Avete pareggiato");
}




console.log (risultatiUtente);
console.log (risultatiAI);
