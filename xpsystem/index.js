
let xpDisplay;
let xpInput;
let xpFeedback;
let lastAction;

let currentXP = 0

xpDisplay = document.getElementById("current-xp")
xpInput = document.getElementById("xp-input")
xpFeedback = document.getElementById("message-field")
lastAction = document.getElementById("last-action-field")
updateXP()


function updateXP() {
    xpDisplay.textContent = currentXP
    xpInput.value = ""
}

function validateInput(input) {
    if (xpInput.value === "") { // Hier muss ich xpInput.value benutzen da dieser ein String ist und inputValue wäre eine Nummer.
        return "Gebe eine Zahl ein!"
    }
    if (isNaN(input)) {
        return "Bitte gebe eine Zahl ein!"
    }
    if (input < 0) {
        return "Keine negativen Zahlen!"
    }
    if (input === 0) {
        return "Gebe eine gültige Zahl ein!"
    }

    return null
}

function addXp () {
    let inputValue = parseInt(xpInput.value)
    let errorMessage = validateInput(inputValue)

    if (errorMessage !== null) {
        xpFeedback.textContent = errorMessage
        lastAction.textContent = "Fehler!"
        xpInput.value = ""
        return
    }
    currentXP = currentXP + inputValue
    xpFeedback.textContent = "Du hast erfolgreich " + inputValue + "XP hinzugefügt!"
    lastAction.textContent = inputValue + "XP hinzugefügt"
    updateXP()

}

function removeXp () {
    let inputValue = parseInt(xpInput.value)
    let errorMessage = validateInput(inputValue)

    if (errorMessage !== null) {
        xpFeedback.textContent = errorMessage
        lastAction.textContent = "Fehler!"
        xpInput.value = ""
        return
    }
    if (inputValue > currentXP) {
        xpFeedback.textContent = "Du hast nicht genug XP um " + xpInput.value + "XP abzuziehen!"
        lastAction.textContent = "Fehler!"
        xpInput.value = ""
        return
    }

    currentXP = currentXP - inputValue
    xpFeedback.textContent = "Du hast erfolgreich " + xpInput.value + "XP abgezogen!"
    lastAction.textContent = inputValue + "XP abgezogen"
    xpInput.value = ""
    updateXP()
}

function resetXp () {
    currentXP = 0
    xpFeedback.textContent = "Zurücksetzen erfolgreich!"
    lastAction.textContent = "Zurücksetzen"
    xpInput.value = ""
    updateXP()
}