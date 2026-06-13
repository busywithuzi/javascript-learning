let username;
let email;
let userInput;
let info;
let userOutput;

let eingabe1;
let eingabe2;
let rechnung;

let vergleicht;

onload = (event) => {
    username = document.getElementById("username")
    email = document.getElementById("email")
    userInput = document.getElementById("onInput")
    info = document.getElementById("info")
    userOutput = document.getElementById("ausgabe")

    eingabe1 = document.getElementById("rechnerfeld1")
    eingabe2 = document.getElementById("rechnerfeld2")
    rechnung = document.getElementById("ergebnis")
    vergleicht = document.getElementById("vergleicht")
}

function login() {
    let user = username.value
    let mail = email.value

    info.textContent = "Username: " + user + " Email: " + mail
}

function registerClick() {
    let input = userInput.value
    let passwortLänge = input.length

    if (username.value === "") {
        userOutput.textContent = "Bitte Username eingeben!"
    } else if (email.value === "") {
        userOutput.textContent = "Bitte E-Mail eingeben!"
    } else if (userInput.value === "") {
        userOutput.textContent = "Bitte Passwort eingeben!"
    } else if (passwortLänge < 5) {
        userOutput.textContent = "Passwort muss länger als 5 Zeichen sein!"
    } else if (passwortLänge > 10) {
        userOutput.textContent = "Passwort darf nicht länger als 10 Zeichen sein!"
    } else {
        userOutput.textContent = "Erfolgreich registriert!"
    }
}

function addieren() {
    const zahl1 = parseInt(eingabe1.value)
    const zahl2 = parseInt(eingabe2.value)
    rechnung.textContent = zahl1 + zahl2
}
function subtrahieren() {
    const zahl1 = parseInt(eingabe1.value)
    const zahl2 = parseInt(eingabe2.value)
    rechnung.textContent = zahl1 - zahl2
}
function multiplizieren() {
    const zahl1 = parseInt(eingabe1.value)
    const zahl2 = parseInt(eingabe2.value)
    rechnung.textContent = zahl1 * zahl2
}
function dividieren() {
    const zahl1 = parseInt(eingabe1.value)
    const zahl2 = parseInt(eingabe2.value)
    rechnung.textContent = zahl1 / zahl2

}

function vergleichen() {
    const zahl1 = parseInt(eingabe1.value)
    const zahl2 = parseInt(eingabe2.value)

    if (zahl1 > zahl2) {
        vergleicht.textContent = "Erste Zahl ist größer als die zweite Zahl!"
    } else if (zahl2 > zahl1) {
        vergleicht.textContent = "Zweite Zahl ist größer als erste Zahl!"
    } else if (zahl1 === zahl2) {
        vergleicht.textContent = "Beide Zahlen sind gleich!"
    } else  {
        vergleicht.textContent = "Bitte gebe eine Zahl ein!"
    }
    
}