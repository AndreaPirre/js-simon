// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


$(document).ready(function() {

var listaNumCasuali = [];
var listaNumPrompt = [];
var numCasuale;
var numPrompt;

// devo creare un ciclo che mi crei numeri 5 random

for (var i = 0; i < 5; i++) {
    numCasuale = generaNumeri(1, 100);
    console.log(numCasuale);
    // attraverso un push aggiungo il numero casuale generato nell'array dei numeri listaNumCasuali
    listaNumCasuali.push(numCasuale);
}
console.log(listaNumCasuali);

// creo un alert che mi stampa i 5 numeri che l'utente deve ricordare
 alert("Ciao Utente! Metti alla prova la tua memoria, prova a memeorizzare questi numeri: " + listaNumCasuali);

// ora devo impostare un timer che duri 30 secondi

setTimeout(function() {
    for (var i = 0; i < 5; i++) {
      numPrompt = parseInt(prompt("Ora prova ad inserire i numeri che ricordi: "));
      for (var f = 0; f < listaNumCasuali.length; f++) {
        if (numPrompt == listaNumCasuali[f]) {
          listaNumPrompt.push(numPrompt);
        }
      }

    }
    alert("Hai indovinato " + listaNumPrompt.length + " numeri. Esattamente i numeri: " + listaNumPrompt)
    console.log(listaNumPrompt)
}, 30000)
});


// FUNCTION
// mi creo una funzione che mi genera nimeri listaNumCasuali

function generaNumeri(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
