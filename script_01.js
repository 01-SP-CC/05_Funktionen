"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
// function test()
// {
//     console.log("Hallo Karsten!");
// }

// test(); // Mehrfaches Aufrufen möglich.

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

// function ausgabeNamen()

// {   
    // what happens in VEGAS ...
    // let firstName = "Sven"; 
    // console.log("Hallo " +  firstName + "!");

// }

// console.log(firstName); // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Asad");
// ausgabeNamenParam("Roxana");
// ausgabeNamenParam("Sven"); // call + Argument(e)
// // Argumente sind Daten für Parameter


// function ausgabeNamenParam(firstName) { // Parameter
//     console.log("Hallo " +  firstName + "!");
// }

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Dave", "Batista");
// ausgabeNamenParams("Jamshid", "Rahmanzani");
// ausgabeNamenParams(prompt("Vorname?"), prompt("Nachname?"))

// function ausgabeNamenParams(firstName, familyName) {
//     console.log("Hallo " +  firstName + " " + familyName + "!");
// }

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob) --> Begründer: Cecil Martin aka Uncle Bob (Nice to Know)
// SRP single responsibility principle

ausgabeNamenParams2("Jamshid", "Rahmanzani");

function ausgabeNamenParams2(firstName, familyName) {

     // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    
     // 2. Funktionalität: string output
    console.log(outputStr);
}

