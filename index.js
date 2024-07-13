let cards = []
let card = 0
let sum = 0
let isAlive = false
let hasBlackjack = false
let message = ""
const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const errorEl = document.getElementById("error-el")
const error = document.getElementById("error")

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
	errorEl.classList.remove("error-bg")
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i] + " "
    }
    
    if (sum <= 20) {
        message = "You're still in the game. \n Another card?"
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
		error.hidden = false
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

function closeError() {
	error.hidden = true
}