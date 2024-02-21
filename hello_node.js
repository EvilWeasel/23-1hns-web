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
    console.log(`Schönes Wetter haben wir
        , {} übrigens... \n${message}`);
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
} else if (false) {

} else {
    
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


// Strings 
// Verkettungen von Chars - Char-Array in C#
// In JavaScript gibt es nur Strings, keine Chars

const my_string1 = "ABC";
const my_string2 = 'ABC'; // const string = "sdfkljl'
const my_string3 = 'ERROR: Variable "x" is not valid....';
// Interpolated String - Template String
// Kann über mehrere Zeilen gehen, aber mit übernahme der Formattierung
const my_interpolated = `${my_string1} ${my_string2}`;
// public string test = $"{var1} buxtehude {var2}";

let variable_string = "abc";
variable_string = "def"; // Hier wird der Variablen eine neue Referenz auf einen neuen String gegeben.
// Der String "abc" ist wie alle Strings immutable (nicht veränderbar)
console.log(variable_string);

// String-Methoden
console.log(variable_string.toUpperCase());

/**
 * NULL VS Undefined
 * 
 * Undefined bekommt man meist, wenn eine Variable Deklariert aber NICHT Initialisiert ist oder es irgendeinen anderen Fehler von JS gibt.
 * NULL ist ein Signal, dass ich einen Fehler beim Aufrufen einer Funktion oder Methode gemacht habe.
 * NULL verwendet man als Signal an andere Entwickler, dass man die Methode oder Funktion mit falschen Parametern oder ähnliches aufgerufen hat.
 */

// Nur Deklaration
let oma;
//console.log(oma);
let emoji = get_emoji("so lala...");
if (emoji != null) {
    console.log(emoji);
}


function get_emoji(feeling) {
    if (feeling == "sad") {
        return "🥲";
    }
    else if (feeling == "happy") {
        return "😀";
    }
    else {
        return null;
    }
}

// Komplexe Datentypen => Referenztypen

// Date
let now = new Date();
// let minute = now.getMinutes();
const feierabend = now.setHours(16);
console.log(new Date(feierabend).toLocaleTimeString());

// Konvertiere String in Datum
const my_time = new Date("1.1.2020");
console.log(my_time.toLocaleDateString());

// console.log(new Date().toLocaleTimeString());

/**
 * Eine ganz einfache Klasse, ganz ähnlich wie in C#
 * 
 * Unterschiede: Keine Access-Modifier - Kein public, private
 * Getter und Setter nur als "Syntactic Sugar" - Wenig Sinn wegen fehlenden Access-Modifier
 * Keine Deklaration von Properties und Feldern außerhalb des Konstruktors - Konstruktor gibt alle Eigenschafter der Instanz vor.
 */
class Weinbergschnecke {
    // in C#: Weinbergschnecke(string name, int schleimmenge) {}
    constructor(name, schleimmenge) {
        this.name = name;
        // in ml
        this.schleimmenge = schleimmenge;
    }
    get reichweite() {
        if (this.schleimmenge < 10) {
            return 0;
        }
        return this.schleimmenge / 10;
    }
    set tanken(menge) {
        this.schleimmenge = this.schleimmenge + menge;
    }
    schlunzen() {
        if (this.schleimmenge >= 10) {
            console.log(`${this.name} schlunzt 1 Meter nach vorne.`);
            this.schleimmenge = this.schleimmenge - 10;
        } else {
            console.log(`${this.name} hat nicht genug schleim und kann sich nicht mehr bewegen.`);
        }
    }
    schlunzen_essen(callbackfn) {
        this.schlunzen();
        callbackfn();
    }
}

const schnegge = new Weinbergschnecke("Josef", 30);
console.log(schnegge.name);
schnegge.schlunzen();
schnegge.schlunzen();
console.log(schnegge.schleimmenge);
console.log(schnegge.reichweite);

schnegge.tanken = 10;
console.log(schnegge.schleimmenge);

schnegge.schlunzen_essen(_ => {
    console.log("Die Schnecke isst einen Salat");
});

schnegge.schlunzen_essen(_ => {
    console.log("Blabla");
});
// schnegge.schlunzen_essen();

// Generator Functions
let my_array = [1,2,3,4,5];

my_array.forEach(elem => {
    console.log(elem);
});

// C#: foreach(elem in my_array) { Console.WriteLine(elem) }
let xy = 10;
while (xy > 0) {
    console.log(xy);
    xy = xy - 1;
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


function* quadratzahlen_generator() {
    let i = 1
    while (true) {
        yield i**2;
        i += 1;
    }
}

let number_generator = quadratzahlen_generator();
console.log(number_generator);

for (let i = 0; i < 5; i++) {
    console.log(number_generator.next().value);
}

console.log(number_generator.next().value);
let number_generator2 = quadratzahlen_generator();
console.log(number_generator2.next().value);

console.log("example: lamda vs functions");

function add1(x, y) {
    return x + y;
}

let add2 = (x, y) => x + y;

console.log(add1(5,4));
console.log(add2(40, 2));
console.log(((x, y) => x + y)(5,2));

name = "Hansi"; 
let zoo = {
    name: "Karl",
    dog: {
        name: "Kevin",
        woof: (x) => {
            console.log(`Hund ${this.name} sagt WOOF!`);
        },
        bark() {
            console.log(`Hund ${this.name} sagt WOOF!`);
        }
    }
};


zoo.dog.woof(5);
zoo.dog.bark();


let liste = [1,2,3,4,5,6];

let only_even = liste.filter((value,index,arry) => {
    return value % 2 == 0;
});
console.log(liste);
console.log(only_even);