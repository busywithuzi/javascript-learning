
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

function addXp () {
    let inputValue = parseInt(xpInput.value)

    if (xpInput.value === "") { // Hier muss ich xpInput.value benutzen da dieser ein String ist und inputValue wäre eine Nummer.
        xpFeedback.textContent = "Gebe eine Zahl ein!"
        return
    }
    if (inputValue < 0) {
        xpFeedback.textContent = "Keine negativen Zahlen!"
        return
    }
    if (inputValue === 0) {
        xpFeedback.textContent = "Gebe eine gültige Zahl ein!"
        return
    }

    currentXP = currentXP + inputValue
    xpFeedback.textContent = "Du hast erfolgreich " + inputValue + "XP hinzugefügt!"
    lastAction.textContent = inputValue + "XP hinzugefügt"
    updateXP()

}

function removeXp () {
    let inputValue = parseInt(xpInput.value)

    if (xpInput.value === "") { // Hier muss ich xpInput.value benutzen da dieser ein String ist und inputValue wäre eine Nummer.
        xpFeedback.textContent = "Gebe eine Zahl ein!"
        return
    }
    if (inputValue < 0) {
        xpFeedback.textContent = "Keine negativen Zahlen!"
        return
    }
    if (inputValue === 0) {
        xpFeedback.textContent = "Gebe eine gültige Zahl ein!"
        return
    }
    if (inputValue > currentXP) {
        xpFeedback.textContent = "Du hast nicht genug XP um " + xpInput.value + "XP abzuziehen!"
        return
    }

    currentXP = currentXP - inputValue
    xpFeedback.textContent = "Du hast erfolgreich " + xpInput.value + "XP abgezogen!"
    lastAction.textContent = inputValue + "XP abgezogen"
    updateXP()
}

function resetXp () {
    currentXP = 0
    xpFeedback.textContent = "Zurücksetzen erfolgreich!"
    lastAction.textContent = "Zurücksetzen"
    updateXP()
}