var lancioUtente = parseInt((Math.random () * 6) + 1);
console.log(lancioUtente); 


var lancioAI = parseInt((Math.random () * 6) + 1);
console.log(lancioAI); 


if(lancioUtente > lancioAI){
    var vittoriaUtente = true
    document.getElementById("target").innerHTML= ("il tuo lancio: " + lancioUtente + " contro " + "il lancio del computer: " + lancioAI + " = " + "Hai vinto contro l'inelligenza artificiale, BRAVO!!!"); 
}else if (lancioAI > lancioUtente){
    var vittoriaAI = true
    document.getElementById("target").innerHTML= ("il tuo lancio: " + lancioUtente + " contro " + "il lancio del computer: " + lancioAI + " = " + "L'intelligenza artificiale vince sempre!!!");
}else{
    document.getElementById("target").innerHTML= ("il tuo lancio: " + lancioUtente + " contro " + "il lancio del computer: " + lancioAI + " = " + "C'è stato un pareggio!!!!!!!");
};

console.log(vittoriaUtente);
console.log(vittoriaAI);