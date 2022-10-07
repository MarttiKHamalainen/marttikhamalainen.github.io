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

// Add listener to the card 1
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot1.addEventListener('click', () => {
    
    if(cardOn1) {
    // Pick up first card of equal suit from computer's desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[0].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[0].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[0], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[0],playerCardSlot1)
    console.log(computerDeck.cards)
    }, cardVisibly)

    cardOn1 = false
    }
})

// Add listener to the card 2
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot2.addEventListener('click', () => {
    
    if(cardOn2) {
    // Pick up first card of equal suit from computers desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[1].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[1].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[1], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[1],playerCardSlot2)
    console.log(computerDeck.cards)
    }, cardVisibly)

    cardOn2 = false
    }
})

// Add listener to the card 3
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot3.addEventListener('click', () => {
    
    if(cardOn3) {
    // Pick up first card of equal suit from computer's desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[2].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[2].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[2], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[2],playerCardSlot3)
    console.log(computerDeck.cards)
    }, cardVisibly)  

    cardOn3 = false
    }
})

// Add listener to the card 4
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot4.addEventListener('click', () => {
    
    if(cardOn4) {
    // Pick up first card of equal suit from computer's desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[3].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[3].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[2], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[3],playerCardSlot4)
    }, cardVisibly) 
    
    cardOn4 = false
    }
})

// Add listener to the card 5
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot5.addEventListener('click', () => {
    
    if(cardOn5) {
    // Pick up first card of equal suit from computer's desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[4].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[4].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[4], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[4],playerCardSlot5)
    }, cardVisibly) 
    
    cardOn5 = false
    }
})

// Add listener to the card 6
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot6.addEventListener('click', () => {
    
    if(cardOn6) {
    // Pick up first card of equal suit from computers desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[5].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[5].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[5], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[5],playerCardSlot6)
    }, cardVisibly)  

    cardOn6 = false
    }
})

// Add listener to the card 7
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot7.addEventListener('click', () => {
    
    if(cardOn7) {
    // Pick up first card of equal suit from computers desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[6].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[6].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[6], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[6],playerCardSlot7)
    }, cardVisibly) 
    
    cardOn7 = false
    }
})

// Add listener to the card 8
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot8.addEventListener('click', () => {
    
    if(cardOn8) {
    // Pick up first card of equal suit from computer's desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[7].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[7].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[7], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[7],playerCardSlot8)
    }, cardVisibly) 
    
    cardOn8 = false
    }
})

// Add listener to the card 9
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot9.addEventListener('click', () => {
    
    if(cardOn9) {
    // Pick up first card of equal suit from computer's desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[8].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[8].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[8], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[8],playerCardSlot9)
    }, cardVisibly)  

    cardOn9 = false
    }
})

// Add listener to the card 10
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot10.addEventListener('click', () => {
    
    if(cardOn10) {
    // Pick up first card of equal suit from computer's desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[9].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[9].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[9], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[9],playerCardSlot10)
    }, cardVisibly)  

    cardOn10 = false
    }
})

// Add listener to the card 11
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot11.addEventListener('click', () => {
    
    if(cardOn11) {
    // Pick up first card of equal suit from computer's desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[10].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[10].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[10], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[10],playerCardSlot11)
    }, cardVisibly)  

    cardOn11 = false
    }
})

// Add listener to the card 12
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot12.addEventListener('click', () => {
    
    if(cardOn12) {
    // Pick up first card of equal suit from computer's desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[11].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[11].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[11], pickupComputerCard)){
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
    cleanPlayerCardSlot(playerDeck.cards[11],playerCardSlot12)
    }, cardVisibly) 
    
    cardOn12 = false
    }
})


// Add listener to the card 13
// BAD SOLUTION!! I have copied this listener code 13 times
// I try to make this code better
// ------------------------------------------------- 

playerCardSlot13.addEventListener('click', () => {
    
    if(cardOn13) {
    // Pick up first card of equal suit from computers desk
    pickupComputerCard = computerDeck.cards.find(card => card.suit === playerDeck.cards[12].suit)
    pickupComputerCardIndex = computerDeck.cards.findIndex(card => card.suit === playerDeck.cards[12].suit)
  
    // If computer's desk runs out the equal suit, computer's first card is picked up
    if(pickupComputerCard == undefined) {
    pickupComputerCard = computerDeck.cards[0]
    pickupComputerCardIndex = 0
   }

   // Check the winner card and count score
    if (isRoundWinner(playerDeck.cards[12], pickupComputerCard)){
        playerScore++       
    } else {
        computerScore++
    }

    // Update score slots 
    computerCountSlot.innerText = `Computer ${computerScore}`
    playerCountSlot.innerText = `Player ${playerScore}`

    //Show computer's card
    showComputerCard(pickupComputerCard)      

    // After 2 seconds turn off player's and computers card on desk
    setTimeout(() => {
    deletePickupComputerCard()
    cleanPlayerCardSlot(playerDeck.cards[12],playerCardSlot13)
    }, cardVisibly)  

    cardOn13 = false
    }
})


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
