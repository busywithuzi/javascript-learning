let balance;
let input;
let feedback;
let lastAction;

let defaultBalance = 1000
let userBalance = defaultBalance

onload = () => {
    balance = document.getElementById("balance")
    input = document.getElementById("amount")
    feedback = document.getElementById("feedback")
    lastAction = document.getElementById("lastaction")

    balance.textContent = userBalance
}

function updateBalance() {
    balance.textContent = userBalance
}

function validateAmount(amount) {
    if (amount === "") {
        return "Bitte gebe eine Zahl ein!"
    }
    if (amount < 0) {
        return "Keine negativen Zahlen!"
    }
    if (amount === 0) {
        return "Du kannst 0$ nicht auszahlen!"
    }
    
    return null
}

function withdrawMoney() {
    let inputAmount = parseInt(input.value)
    let errorMessage = validateAmount(inputAmount)

    if (errorMessage !== null) {
    feedback.textContent = errorMessage
    return
    }
    if (inputAmount > userBalance) {
    feedback.textContent = "Nicht genügend Geld vorhanden Kontostand: " + userBalance
    return
    }

    feedback.textContent = "Du hast " + inputAmount + "$ ausgezahlt!"
    userBalance = userBalance - inputAmount
    updateBalance()
    lastAction.textContent = "Letzte Aktion: " + inputAmount + "$ ausgezahlt!"
    input.value = ""
}

function depositMoney() {
    let inputAmount = parseInt(input.value)
    let errorMessage = validateAmount(inputAmount)

    if (errorMessage !== null) {
    feedback.textContent = errorMessage
    return
    }

// hier kommt nur noch die Einzahlung
    feedback.textContent = "Du hast " + inputAmount + "$ eingezahlt!"
    userBalance = userBalance + inputAmount
    updateBalance()
    lastAction.textContent = "Letzte Aktion: " + inputAmount + "$ eingezahlt!"
    input.value = ""
}

function resetMoney() {
    userBalance = defaultBalance
    updateBalance()

    feedback.textContent = "Balance zurückgesetzt!"
    lastAction.textContent = "Letzte Aktion: Konto zurückgesetzt"
    input.value = ""

}