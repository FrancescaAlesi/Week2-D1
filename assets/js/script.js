/*REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const NOME = 'Francesca';
const COGMONE = 'Alesi';

console.log(`Ciao, mi chiamo ${NOME} ${COGMONE}`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 10;
let b = 3;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`); 
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const annoNascita = 2007;
const annoCorrente = 2026;
const etaOggi = annoCorrente - annoNascita;
const etatra10anni = etaOggi + 10;
const eta5annifa = etaOggi - 5; 

console.log(`Oggi ho ${etaOggi} anni.`);
console.log(`Tra 10 anni avrò ${etatra10anni} anni.`);
console.log(`5 anni fa avevo ${eta5annifa} anni.`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let eta;
eta = 19;
const maggiorenne = eta >=18;

console.log(`Età: ${eta} - Maggiorenne: ${maggiorenne}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let testo = "Ciao mondo";
let numero = 42;
let boolean = true;
//Restituisce "object": è un bug storico della prima versione di JS, mantenuto per retrocompatibilità.
let undefined;
let myNull = null;

console.log(`testo è di tipo: ${typeof testo}`);
console.log(`numero è di tipo: ${typeof numero}`);
console.log(`attivo è di tipo: ${typeof boolean}`);
console.log(`valoreNullo è di tipo: ${typeof undefined}`);
console.log(`nonDefinito è di tipo: ${typeof myNull}`);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number= 5;
let stringa = "5";

// "==" converte i tipi prima di confrontare, "===" controlla valore e tipo senza convertire.
console.log(`numero == stringa?  ${number == stringa}`);
console.log(`numero === stringa? ${number === stringa}`);

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Previsione: "53", il '+' concatena perché trova una stringa
// Previsione: 2, il '-' forza la conversione della stringa in numero
// Previsione: 2, true viene convertito nel numero 1 (1 + 1)
// Previsione: 20, l'operatore '*' converte entrambe le stringhe in numeri

console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);
console.log("10" * "2");

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n;
n = 12;

console.log(`n è pari: ${n % 2 === 0}`);
console.log(`n è pari E divisibile per 3: ${n % 2 === 0 && n % 3 ===0}`);
console.log(`n è divisibile per 3: ${n % 3 === 0}`);

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const c = 5;
const d = 5;
const e = 5; 
const perimetro = c + d + e;
let tipo;

if (c === d && d === e) {
  tipo = "equilatero";
} else if (c === d || c === e || d === e) {
  tipo = "isoscele";
} else {
  tipo = "scaleno";
}
console.log(`Triangolo ${tipo}, perimetro ${perimetro}`);