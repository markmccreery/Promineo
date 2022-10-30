const VALUES = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const SUITS = ['Diamonds','Hearts','Clubs','Spades'];


class Card {
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
    actualCard () {
        switch (this.value) {
            case 1: 
                return 'Ace';
            case 11: 
                return 'Jack';
            case 12: 
                return'Queen'
            case 13: 
                return'King'
            default:
                return this.value;
            }
        } 
}
        


class Deck {
    constructor(cards = newDeck()){
        this.cards = cards;
    }
    get numberofCards(){
        return this.cards.length;
    } 
    shuffle() {
        for (let i = this.numberofCards -1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
    drawCard() {
    return this.cards.shift();}
};

/*This function allows for all of the cards to be in the array*/
function newDeck() {
    return VALUES.flatMap(value => {
        return SUITS.map(suit => {
            return new Card(value, suit);
        })
    })
}

const deck = new Deck();
deck.shuffle();
console.log(deck.cards);

/*I need to figure out how to split the deck in between the two players.  Then when one player wins the hand, 
the opposing player's card goes into the other player's deck.  I will have to create another array/object to represent
the players and their deck.*/
const deckMidpoint = Math.ceil(deck.numberofCards/2);
player1Deck = new Deck(deck.cards.slice(0, deckMidpoint));
player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberofCards));
let player1Score = 0;
let player2Score = 0;

//This shows that the deck has been split evenly into 26 cards.
//console.log(player1Deck, player2Deck);

//Now I need to figure out how to draw the top card of each deck:
//console.log(player1Deck.drawCard(), player2Deck.drawCard());


function compareCards() {
    
    let player1Card = player1Deck.drawCard();
    let player2Card = player2Deck.drawCard(); 

    if (player1Card.value > player2Card.value){
        console.log(`Player one card: ${player1Card.actualCard()}.  Player two card: ${player2Card.actualCard()}.`);
        console.log(`Player one wins the hand.  Player one now has ${player1Score += 1} points.`);
        return;
       } else if (player2Card.value > player1Card.value){
        console.log(`Player one card: ${player1Card.actualCard()}.  Player two card: ${player2Card.actualCard()}.`);
        console.log(`Player two wins the hand. Player two now has ${player2Score += 1} points.`);
        return;
       } else {
        console.log(`Player one card: ${player1Card.actualCard()}.  Player two card: ${player2Card.actualCard()}.`);
        console.log(`Tie!  Player one has ${player1Score} points.  Player two has ${player2Score} points.`);
        return;
       }
    }
   
   
   
    /* if (player1Card.value > player2Card.value){
    console.log(`Player one card: ${player1Card.value} of ${player1Card.suit}.  Player two card: ${player2Card.value} of ${player2Card.suit}.`);
    console.log(`Player one wins the hand.  Player one now has ${player1Score += 1} points.`);
    return;
   } else if (player2Card.value > player1Card.value){
    console.log(`Player one card: ${player1Card.value} of ${player1Card.suit}.  Player two card: ${player2Card.value} of ${player2Card.suit}.`);
    console.log(`Player two wins the hand. Player two now has ${player2Score += 1} points.`);
    return;
   } else {
    console.log(`Player one card: ${player1Card.value} of ${player1Card.suit}.  Player two card: ${player2Card.value} of ${player2Card.suit}.`);
    console.log(`Tie!  Player one has ${player1Score} points.  Player two has ${player2Score} points.`);
    return;
   }
} */

function determineWinner(){
    if (player1Deck.numberofCards === 0){
        if (player1Score > player2Score){
            return console.log(`Player 1 wins with a score of ${player1Score} over Player 2's score of ${player2Score}.`);
        } else if (player2Score > player1Score){
            return console.log(`Player 2 wins with a score of ${player2Score} over Player 1's score of ${player1Score}.`);
        } else {
            return console.log(`It's a tie!  Both players have scored a score of 13 points each.`)
        }
    } return;
}

//function called before it being declared;
gameOfWar(); 


function gameOfWar (){
    while (player1Deck.numberofCards >= 0){
        //player1Deck.drawCard().value, player2Deck.drawCard().value;
        determineWinner();
        compareCards();
        console.log 
    (`Player 1: ${player1Deck.numberofCards} cards remaining. 
      Player 2: ${player2Deck.numberofCards} cards remaining.`);
       }
    }
    







