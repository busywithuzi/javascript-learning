let balance;
let input;
let feedback;

let userBalance = 1000

onload = () => {
    balance = document.getElementById("balance")
    input = document.getElementById("amount")
    feedback = document.getElementById("feedback")

    balance.textContent = userBalance
}


function withdrawMoney() {
    let inputAmount = parseInt(input.value)

    if (input.value === "") {
        feedback.textContent = "Bitte gebe eine Zahl ein!"
    } else if (inputAmount < 0) {
        feedback.textContent = "Keine negativen Zahlen!"
    } else if (inputAmount === 0) {
        feedback.textContent = "Du kannst 0$ nicht auszahlen!"
    } else if (inputAmount > userBalance) {
        feedback.textContent = "Nicht genügend Geld vorhanden " + "Kontostand: " + balance.textContent
    } else if (inputAmount <= userBalance) {
        feedback.textContent = "Du hast " + inputAmount + "$ abgehoben!"
        userBalance = userBalance - inputAmount
        balance.textContent = userBalance
    }

}

function depositMoney() {
    let inputAmount = parseInt(input.value)

    if (input.value === "") {
        feedback.textContent = "Bitte gebe eine Zahl ein!"
    } else if (inputAmount < 0) {
        feedback.textContent = "Keine negativen Zahlen!"
    } else if (inputAmount === 0) {
        feedback.textContent = "Du kannst 0$ nicht einzahlen!"
    } else if (inputAmount >= 0) {
        feedback.textContent = "Du hast " + inputAmount + "$ eingezahlt!"
        userBalance = userBalance + inputAmount
        balance.textContent = userBalance
    }
}