// This file (cardgame.js) contains Card Game's functional code. 
// Code made by Martti Hämäläinen 10.10.2022

// Card game's deck is imported from deck.js file
import Deck from './deck.js'

// Value array for comparing card values
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

// declare values from index.html file's class attributes
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

// cardOn variables are used to allow program counts scores only on first click. 
//Count scores when cardOn value is true
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

let cardVisibly = 1000 // Change time whow long played cards are visibly on desk
let playerDeck, computerDeck // Player and computer decks
let pickupComputerCard, pickupComputerCardIndex // Picked up card from computer deck and it's index
let computerScore = 0 // Computer score
let playerScore = 0 // Player score

// Add listeners to the cards. 
// Funtion listenCard receive three parameters: boolean cardOne-parameter, player's deck object and computer's deck object
// Function listenCard return false
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
// Funtion receive three parameters: boolean cardOne-parameter, player's deck object and computer's deck object
// Function return false. Function executed only on the first click when the carOn argument is true.
function listenCard(cardOn, playerCard, playerCardSlot) {
    if(cardOn) { 

        //Find card equal suit and higher value and assign it to pickupComputerCard
        pickupComputerCard = computerDeck.cards.find(card => card.suit === playerCard.suit && card.value > playerCard.value)
           
        // If there is no card with higher value in computer's deck, some card with equal suit is picked up
        // and assign it to pickupComputerCard
        if(pickupComputerCard == undefined) {
            pickupComputerCard = computerDeck.cards.find(card => card.suit === playerCard.suit)
       } 

       // If there is no card with equal suit in computer's deck, lowest card is picked up
       // and assign it to pickupComputerCard
       if(pickupComputerCard == undefined){
        pickupComputerCard = computerDeck.cards.reduce((previous, current) => {
            return isLowerOrEqualValue(previous, current) ? previous : current
          })
       }

       // Find computer's card index and assign it to pickupComputerCardIndex 
       pickupComputerCardIndex = computerDeck.cards.findIndex(card => card === pickupComputerCard)
    
       // Check the winner card and count the score
        if (isRoundWinner(playerCard, pickupComputerCard)){
            playerScore++       
        } else {
            computerScore++
        }
    
        // Update score slots 
        computerCountSlot.innerText = `Computer ${computerScore}`
        playerCountSlot.innerText = `Player ${playerScore}`
    
      
        showComputerCard(pickupComputerCard) //Show computer's card on desk
    
        // After 1 seconds (cardVisibly parameter) turn off player's and computer's card on desk
        setTimeout(() => {
        deletePickupComputerCard() // Turn off computer's card adn remove it from deck
        cleanPlayerCardSlot(playerCard, playerCardSlot) // Turn off player's card
        }, cardVisibly)
        }
        return false
}

// Clean computer's card slot on desk and delete computer's card from deck
function deletePickupComputerCard() {
    computerCardSlot.innerHTML = ''
    computerCardSlot.appendChild(pickupComputerCard.getEmptyComputerCardHTML())
    computerDeck.cards.splice(pickupComputerCardIndex, 1)
    }

// Clean player's card slot on desk
// receive two parameters: player card object and class attribute 
 function cleanPlayerCardSlot(card, slot) {
    slot.innerText = ''
    slot.appendChild(card.getEmptyCardHTML())
 }   
    
  
// Show card in computer card slot
// receive card object parameter
function showComputerCard(card) {
    computerCardSlot.innerHTML = ''
    computerCardSlot.appendChild(card.getHTML())
    }


// If cards suit are equal verified values and return true if card one value is higher. 
// If card two value is higher return false. If suits are not equal return always true.
// Receive two card object parameters and return boolean value
function isRoundWinner(cardOne, cardTwo) {
    if(cardOne.suit === cardTwo.suit){
        return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
    } else {
        return true
    }  
}

// Verified card values and return true if card one value is higher or equal. 
// If card two value is higher return false
// Receive two card object parameters and return boolean value
function isLowerOrEqualValue(cardOne, cardTwo) {    
        return CARD_VALUE_MAP[cardOne.value] <= CARD_VALUE_MAP[cardTwo.value]   
}


startGame() // Start game

// Declare decks, shuffle deck and deal the cards
function startGame() {
    const deck = new Deck() // Declare deck and assign it to deck parameter
    deck.shuffle() // Shuffle deck

    playerDeck = new Deck(deck.cards.slice(0,13)) // Declare player's deck, 13 cards
    computerDeck = new Deck(deck.cards.slice(13,26)) // Declare computer's deck, 13 cards
   
    // Show 13 player's cards and one computer empty card on desk
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
