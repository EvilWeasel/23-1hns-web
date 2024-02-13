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
    console.log(`Schönes Wetter haben wir, {} übrigens... \n${message}`);
    // Console.WriteLine($"Bla {Test} {Test2}");
}

// Primitve Values => Wertetypen
// Alle Primitven Typen haben eine Klasse (eg. String oder Number) mit Helfermethoden
const my_string = "10"; // Console.ReadLine()
const user_input = Number.parseInt(my_string);
// Boolean
// 0 oder 1; true oder false
const my_bools = false;
if (my_bools) {
    console.log("Dieser Text wird niemals ausgegeben.");
}

// Numbers
// Ints, Floats, Doubles, Decimals, Longs gibt es Nicht!
// In JS gibt es nur einen Datentyp für Zahlen.
let my_number1 = 10;
let my_number2 = 5.2;

// Achtung: Vorsicht!
// Vorallem bei Division muss man in JS Error-Checking einbauen
if (my_number2 != null || my_number2 != 0) {
    const result = my_number1 / my_number2;
}

const num1 = 0.1;
const num2 = 0.2;
console.log(num1 + num2); // Floating-Point Rounding Error
// Verhält sich genau wie im Dezimalsystem:
    // 0.33333 + 0.33333 + 0.33333 = 1
