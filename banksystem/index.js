let balance;
let input;
let feedback;
let lastAction;

let withdrawTransaction;
let depositTransaction;
let transactions;

let withdrawCount = 0
let depositCount = 0
let transactionCount = 0

let withdraws;
let deposits;

let allwithdraws = 0
let alldeposits = 0

let highestwithdraw;
let highestdeposit;

let biggestwithdraw = 0
let biggestdeposit = 0

let currentStatus;

let defaultBalance = 1000
let userBalance = defaultBalance

onload = () => {
    balance = document.getElementById("balance")
    input = document.getElementById("amount")
    feedback = document.getElementById("feedback")
    lastAction = document.getElementById("lastaction")

    withdrawTransaction = document.getElementById("withdrawtransaction")
    depositTransaction = document.getElementById("deposittransaction")
    transactions = document.getElementById("transactions")

    withdraws = document.getElementById("withdraws")
    deposits = document.getElementById("deposits")

    highestwithdraw = document.getElementById("highestwithdraw")
    highestdeposit = document.getElementById("highestdeposit")

    currentStatus = document.getElementById("status")

    updateStatus()
    updateBalance()
    updateStats()
}   

function updateBalance() {
    balance.textContent = userBalance + "$"
}

function updateStats() {
    withdrawTransaction.textContent = "Auszahlungen: " + withdrawCount
    depositTransaction.textContent = "Einzahlungen: " + depositCount
    transactions.textContent = "Transaktionen: " + transactionCount

    withdraws.textContent = "Insgesamt ausgezahlt: " + allwithdraws + "$"
    deposits.textContent = "Insgesamt eingezahlt: " + alldeposits + "$"

    highestwithdraw.textContent = "Höchste Auszahlung: " + biggestwithdraw + "$"
    highestdeposit.textContent = "Höchste Einzahlung: " + biggestdeposit + "$"
}

function updateStatus() {
    if (userBalance === 0) {
        currentStatus.textContent = "Status: Pleite"
        return
    }
    if (userBalance > 0 && userBalance < 500) {
        currentStatus.textContent = "Status: Niedrig"
        return
    }
    if (userBalance >= 500 && userBalance < 1000) {
        currentStatus.textContent = "Status: Okay"
        return
    }
    if (userBalance >= 1000 && userBalance < 2000) {
        currentStatus.textContent = "Status: Stabil"
        return
    }
    if (userBalance >= 2000) {
        currentStatus.textContent = "Status: Sehr gut"
        return
    }
}       

function validateAmount(amount) {
    if (input.value === "") {
        return "Bitte gebe eine Zahl ein!"
    }
    if (isNaN(amount)) {
        return "Fehler! Gib eine gültige Zahl ein!"
    }
    if (amount < 0) {
        return "Keine negativen Zahlen!"
    }
    if (amount === 0) {
        return "Fehler! Gib eine gültige Zahl ein!"
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

    allwithdraws = allwithdraws + inputAmount
    withdrawCount = withdrawCount + 1
    transactionCount = transactionCount + 1

    if (inputAmount > biggestwithdraw) {
        biggestwithdraw = inputAmount
    }
    updateStats()
    updateStatus()
}

function depositMoney() {
    let inputAmount = parseInt(input.value)
    let errorMessage = validateAmount(inputAmount)

    if (errorMessage !== null) {
        feedback.textContent = errorMessage
        return
    }
    feedback.textContent = "Du hast " + inputAmount + "$ eingezahlt!"
    userBalance = userBalance + inputAmount
    updateBalance()
    lastAction.textContent = "Letzte Aktion: " + inputAmount + "$ eingezahlt!"
    input.value = ""

    alldeposits = alldeposits + inputAmount
    transactionCount = transactionCount + 1
    depositCount = depositCount + 1

    if (inputAmount > biggestdeposit) {
        biggestdeposit = inputAmount
    }

    updateStats()
    updateStatus()

}

function resetAll() {
    withdrawCount = 0
    depositCount = 0
    transactionCount = 0
    allwithdraws = 0
    alldeposits = 0
    biggestwithdraw = 0
    biggestdeposit = 0
    updateStats()

    userBalance = defaultBalance
    updateBalance()
    updateStatus()

    feedback.textContent = "Balance zurückgesetzt!"
    lastAction.textContent = "Letzte Aktion: Konto zurückgesetzt"
    input.value = ""

}
