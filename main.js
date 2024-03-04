
// // SELFWORK 1

// let num = 2;
// while (num <= 20){
//     console.log(num);
//     num = num + 2;
// }


// // SELFWORK 2

// for (let num = 2; num <= 20; num += 2) {
//     console.log(num);
// }


// for (let numero = 1; numero <= 20; numero++) {
//     if (numero % 2 !== 0) {
//         console.log(numero);
//     }
// }


// // SELFWORK 3

// let vendingmachine
// while ( vendingmachine !== "1" && vendingmachine !== "2" && vendingmachine !== "3" ) {


//     vendingmachine = prompt('selezionare un prodotto: \n inserire "1" per ACQUA \n inserire "2" per COCA COLA \n inserire "3" per BIRRA');
//     if (vendingmachine == 1) {
//         console.log("E’ stata selezionata l’acqua");
//         alert('E’ stata selezionata l’acqua');
//     }

//     else if (vendingmachine == 2) {
//         console.log('E’ stata selezionata coca cola');
//         alert('E’ stata selezionata coca cola');
//     }
//     else if (vendingmachine == 3) {
//         console.log('E’ stata selezionata birra');
//         alert('E’ stata selezionata birra');
//     } else {
//     }
// }



// SELFWORK 4 - MARIO BROSS


let startGame = prompt("SUPER MARIO \n (1) START \n (2) ESCI");
let life = 3;
let fungo = 0;

while (startGame != '1' && startGame != '2') {
    startGame = prompt("SUPER MARIO \n (1) START \n (2) ESCI");
}

// Preme tasto 1 
if (startGame == '1') {
    alert("SALVA LA PRINCIPESSA PEACH!");
    let enemy = prompt("Attento c'e' un GOOMBA! Premi: \n (1) Salta oltre \n (2) Salta sopra al nemico per eliminarlo");
    switch (enemy) {
        case '1':
        let lostlife = Math.random();
        let survive = 0.3;
        if (lostlife < survive) {
            alert("C'e' mancato poco! Sei riuscito a schivare il GOOMBA.");
        } else {            life = life - 1;
            alert("Hai perso una vita! Te ne rimangono " + life);
        }
        break;
        case '2':
        alert("L'hai fatto fuori! Continua cosi");
        break;    
        default:
        break;
    }
    
    let enemy2 = prompt("Una pianta carnivora! Premi: \n (1) Salta mentre sta uscendo dal tubo \n (2) Salta appena rientra nel tubo");
    switch (enemy2) {
        case '1':
        let lostlife = Math.random();
        let survive = 0.3;
        if (lostlife < survive) {
            alert("Hai miracolosamente schivato la morte!");
        } else {
            life = life - 1;
            alert("Hai perso una vita! Te ne rimangono " + life);
        }
        break;
        case '2':
        alert("Sei passato oltre senza problemi");
        break;    
        default:
        break;
    }
    
    let trovafungo = Math.random();
    let trovato = 0.5;
    if (trovafungo < trovato) {
        alert("Hai trovato un fungo! 🍄");
        fungo = 1;
    }
    
    let enemy3 = prompt("una fila di Goomba viene nella tua direzione: \n (1) salta su tutti per ucciderli \n (2) fai un salto lungo per oltrepassarli");
    switch (enemy3){
        case '1':
        alert("Hai ucciso tutti, bel colpo!");
        break;    
        case '2':
        let lostlife = Math.random();
        let survive = 0.3;
        if (lostlife < survive) {
            alert("Rischioso ma ce l'hai fatta");
        } else {
            if (fungo == 1) {
                alert("Sei stato colpito ma grazie al fungo non sei morto");
            }
            else{
                life = life - 1;
                if (life == 0) {
                    alert("Hai perso la tua ultima vita \n GAME OVER ");
                }
                else {
                    alert("Hai perso una vita! Te ne rimangono " + life);
                }
            }
        }
        break;
        default:
        break;
    }
    if (life != 0) {
        alert("COMPLIMENTI SEI ARRIVATO AL CASTELLO! 🏰 MA...LA PRINCIPESSA NON E' QUI! 🤷‍♂️")
    }
} else { // Preme 2
    alert("Torna presto a giocare!");
}

