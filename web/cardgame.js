// cardgame.js contains Card Game's functional code. Deck is imported from deck.js file
import Deck from './deck.js'

const CARD_VALUE_MAP = {
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10,
    "J":11,
    "Q":12,
    "K":13,
    "A":14,
}

const computerCardSlot = document.querySelector(".computer-card-slot")
const computerCountSlot = document.querySelector(".computer-score")
const playerCountSlot = document.querySelector(".player-score")
const playerCardSlot1 = document.querySelector(".card-slot1")
const playerCardSlot2 = document.querySelector(".card-slot2")
const playerCardSlot3 = document.querySelector(".card-slot3")
const playerCardSlot4 = document.querySelector(".card-slot4")
const playerCardSlot5 = document.querySelector(".card-slot5")
const playerCardSlot6 = document.querySelector(".card-slot6")
const playerCardSlot7 = document.querySelector(".card-slot7")
const playerCardSlot8 = document.querySelector(".card-slot8")
const playerCardSlot9 = document.querySelector(".card-slot9")
const playerCardSlot10 = document.querySelector(".card-slot10")
const playerCardSlot11 = document.querySelector(".card-slot11")
const playerCardSlot12 = document.querySelector(".card-slot12")
const playerCardSlot13 = document.querySelector(".card-slot13")

// cardOn variables are used to allow click card only one time. 
// Only first click count scores, if player click cark many times the same card
let cardOn1 = true
let cardOn2 = true
let cardOn3 = true
let cardOn4 = true
let cardOn5 = true
let cardOn6 = true
let cardOn7 = true
let cardOn8 = true
let cardOn9 = true
let cardOn10 = true
let cardOn11= true
let cardOn12 = true
let cardOn13= true

let cardVisibly = 2000
let playerDeck, computerDeck, pickupComputerCard, pickupComputerCardIndex
let computerScore = 0
let playerScore = 0

// Add listeners to the cards

playerCardSlot1.addEventListener('click', () => {cardOn1 = listenCard(cardOn1, playerDeck.cards[0], playerCardSlot1)})

playerCardSlot2.addEventListener('click', () => {cardOn2 = listenCard(cardOn2, playerDeck.cards[1], playerCardSlot2)})

playerCardSlot3.addEventListener('click', () => {cardOn3 = listenCard(cardOn3, playerDeck.cards[2], playerCardSlot3)})

playerCardSlot4.addEventListener('click', () => {cardOn4 = listenCard(cardOn4, playerDeck.cards[3], playerCardSlot4)})

playerCardSlot5.addEventListener('click', () => {cardOn5 = listenCard(cardOn5, playerDeck.cards[4], playerCardSlot5)})

playerCardSlot6.addEventListener('click', () => {cardOn6 = listenCard(cardOn6, playerDeck.cards[5], playerCardSlot6)})

playerCardSlot7.addEventListener('click', () => {cardOn7 = listenCard(cardOn7, playerDeck.cards[6], playerCardSlot7)})

playerCardSlot8.addEventListener('click', () => {cardOn8 = listenCard(cardOn8, playerDeck.cards[7], playerCardSlot8)})

playerCardSlot9.addEventListener('click', () => {cardOn9 = listenCard(cardOn9, playerDeck.cards[8], playerCardSlot9)})

playerCardSlot10.addEventListener('click', () => {cardOn10 = listenCard(cardOn10, playerDeck.cards[9], playerCardSlot10)})

playerCardSlot11.addEventListener('click', () => {cardOn11 = listenCard(cardOn11, playerDeck.cards[10], playerCardSlot11)})

playerCardSlot12.addEventListener('click', () => {cardOn12 = listenCard(cardOn12, playerDeck.cards[11], playerCardSlot12)})

playerCardSlot13.addEventListener('click', () => {cardOn13 = listenCard(cardOn13, playerDeck.cards[12], playerCardSlot13)})


// This function is executed, when the player clicks on the card
function listenCard(cardOn, playerCards, playerCardSlot) {
    if(cardOn) {
        // Pick up first card of equal suit from computers desk
        pickupComputerCard = computerDeck.cards.find(card => card.suit === playerCards.suit)
        pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerCards.suit)
      
        // If computer's desk runs out the equal suit, computer's first card is picked up
        if(pickupComputerCard == undefined) {
        pickupComputerCard = computerDeck.cards[0]
        pickupComputerCardIndex = 0
       }
    
       // Check the winner card and count score
        if (isRoundWinner(playerCards, pickupComputerCard)){
            playerScore++       
        } else {
            computerScore++
        }
    
        // Update score slots 
        computerCountSlot.innerText = `Computer ${computerScore}`
        playerCountSlot.innerText = `Player ${playerScore}`
    
        //Show computer's card
        showComputerCard(pickupComputerCard)      
    
        // After 2 seconds turn off player's and computer's card on desk
        setTimeout(() => {
        deletePickupComputerCard()
        cleanPlayerCardSlot(playerCards,playerCardSlot)
        console.log(computerDeck.cards)
        }, cardVisibly)
        }
        return false
}

// Clean computer's card slot on desk and delete computer's card 
function deletePickupComputerCard() {
    computerCardSlot.innerHTML = ''
    computerCardSlot.appendChild(pickupComputerCard.getEmptyComputerCardHTML())
    computerDeck.cards.splice(pickupComputerCardIndex, 1)
    }

// Clean player's card slot on desk
 function cleanPlayerCardSlot(card, slot) {
    slot.innerText = ''
    slot.appendChild(card.getEmptyCardHTML())
 }   
    
  
// Show card in computer card slot
function showComputerCard(card) {
    computerCardSlot.innerHTML = ''
    computerCardSlot.appendChild(card.getHTML())
    }


// If suit is equal, verified witch value is bigger. Otherwise return always true.
function isRoundWinner(cardOne, cardTwo) {
    if(cardOne.suit === cardTwo.suit){
        return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
    } else {
        return true
    }
    
}

// Start game
startGame()

// Declare decks, shuffle deck and deal the cards
function startGame() {
    const deck = new Deck();
    deck.shuffle();

    playerDeck = new Deck(deck.cards.slice(0,13))
    computerDeck = new Deck(deck.cards.slice(13,26)) 
   
    computerCardSlot.appendChild(computerDeck.cards[0].getEmptyComputerCardHTML())
    playerCardSlot1.appendChild(playerDeck.cards[0].getHTML())
    playerCardSlot2.appendChild(playerDeck.cards[1].getHTML())
    playerCardSlot3.appendChild(playerDeck.cards[2].getHTML())
    playerCardSlot4.appendChild(playerDeck.cards[3].getHTML())
    playerCardSlot5.appendChild(playerDeck.cards[4].getHTML())
    playerCardSlot6.appendChild(playerDeck.cards[5].getHTML())
    playerCardSlot7.appendChild(playerDeck.cards[6].getHTML())
    playerCardSlot8.appendChild(playerDeck.cards[7].getHTML())
    playerCardSlot9.appendChild(playerDeck.cards[8].getHTML())
    playerCardSlot10.appendChild(playerDeck.cards[9].getHTML())
    playerCardSlot11.appendChild(playerDeck.cards[10].getHTML())
    playerCardSlot12.appendChild(playerDeck.cards[11].getHTML())
    playerCardSlot13.appendChild(playerDeck.cards[12].getHTML())

}
