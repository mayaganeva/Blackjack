let cards = []
let card = 0
let sum = 0
let isAlive = false
let hasBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let errorEl = document.getElementById("error-el")

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    errorEl.innerText = ""
    renderGame()
    console.log(firstCard)
}

function renderGame() {
    isAlive = true
    hasBlackjack = false
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i] + " "
    }
    
    if (sum <= 20) {
        message = "You're still in the game. Another card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game. Play again?"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    } else {
        errorEl.textContent = "You can't draw a new card. Click START GAME to begin a new game."
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}