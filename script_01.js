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

ausgabeNamen();

function ausgabeNamen()

{   
    // what happens in VEGAS ...
    let firstName = "Sven"; 
    console.log("Hallo " +  firstName + "!");

}

// console.log(firstName); // Fehler: Scope!