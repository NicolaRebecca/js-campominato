// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


computerNum = [];
userNum = [];
maxNum = 16;
userMaxNum = 100 - maxNum;

function getRandomNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


while (computerNum.length < maxNum) {
    var element = getRandomNum(1,100);
    if (!computerNum.includes(element)) {
        computerNum.push(element);
    }
}

while (userNum.length < userMaxNum && !computerNum.includes(numero)) {
    var numero = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
    if (numero < 1 || numero > 100) { 
        alert('Il numero deve essere compreso tra 1 e 100');
    } else if (computerNum.includes(numero)) {
        alert('Hai pestato una mina! medic!!!');
    } else if (userNum.includes(numero)) {
        alert('Hai inserito un numero già usato!');
    } else {
        userNum.push(numero);
    }

}

document.getElementById('result').innerHTML = 'Hai totalizzato un punteggio di ' + userNum.length;


