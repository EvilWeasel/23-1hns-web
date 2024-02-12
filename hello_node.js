// Default Hello World
console.log("Hello World!");
console.log("Test");

// Deklaration und Initialisierung der Variablen
// !!!!ACHTUNG!!!!!
// Das var-keyword benutzt man heute nicht mehr! Es gibt keine Ausnahmen!
var x = 10;

// Ganz normales deklarieren und initialisieren eine Variablen
// Variable ist mutable (modifizierbar)
let y = "Hello Antikapitalister Untergrund!"
let y2 = "!!!";
// Concatenation // Verkettung
let q = y + y2;
console.log(q);

// Variable ist unmutable (nicht veränderbar[e Referenz])
const z = true;

// String Interpolation
console.log(`Test Interpolation ${x} und dann noch ${z}`);

greeting("Hier könnte Ihre Werbung stehen!");

// In JavaScript gibt es zwar Datentypen, werden aber nicht vom Interpreter überprüft.
// Heißt: Keine Typensicherheit // No Strong-Typing
// Bevor der Interpreter irgendeine Anweisung ausführt, wenn man das Script startet, werden alle function-Definitions an den Anfang des Scripts geschoben - Quasi, als erstes werden die Funktionen "ausgeführt" oder besser "deklariert".
// Dieser Prozess nennt sich "Hoisting"
function greeting(message) {
    console.log("Hallo und Wilkommen!");
    console.log(`Schönes Wetter haben wir, übrigens... \n${message}`);
}