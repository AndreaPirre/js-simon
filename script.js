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

});


// FUNCTION
// mi creo una funzione che mi genera nimeri listaNumCasuali

function generaNumeri(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
