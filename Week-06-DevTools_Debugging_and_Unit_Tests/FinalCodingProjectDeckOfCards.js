const SUITS= ['Diamonds','Hearts','Clubs','Spades'];
const VALUES = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];

//In order to compare values, I need to convert strings to numbers so they can be compared;


class Card {
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
        
    }
}

class Deck {
    constructor(cards = fullDeck()){
        this.cards = cards;
    }
    get numberofCards(){
        return this.cards.length;
    } 
    pop(){
        return this.cards.shift();
    }
    push(card){
        return this.cards.push(card);
    }
    shuffle() {
        for (let i = this.numberofCards -1; i > 0; i--) {
            let newIndex = Math.floor(Math.random() * (i + 1));
            let oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}

/*This function allows for all of the cards to be in the array*/

function fullDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}

const deck = new Deck ();
deck.shuffle();
//console.log(deck.cards);

/*I need to figure out how to split the deck in between the two players.  Then when one player wins the hand, 
the opposing player's card goes into the other player's deck.  I will have to create another array/object to represent
the players and their deck.*/

let player1Deck, player2Deck;

startGame();
function startGame() {
    const deck = new Deck();
    deck.shuffle();
    
    for (let i = 0; i < deck.length; i++){
        if(i % 2 === 0){
            player1Deck.push(deck[i]);
        } else {
            player2Deck.push(deck[i]);
        }
    
    const player1Card = player1Deck.shift(i);
    const player2Card = player2Deck.shift(i);
    let player1Score = 0;
    let player2Score = 0;

while (player1Deck > 0 && player2Deck > 0){
    if (player1Card.value > player2Card.value){
        return player1Score += 1;
    } else if (player2Card.value > player1Card.value){
        return player2Score += 1;
    } else {
        return;
        }
    } if (player1Score > player2Score){
        return "Player 1 wins with a score of " + player1Score + " over " + player2Score + '.';
    } else if (player2Score > player1Score){
        return "Player 1 wins with a score of " + player2Score + " over " + player1Score + '.';
    } else {
        return "It was a tie!  Both teams scored " + player1Score + " points.";
    }
}}

console.log(startGame(fullDeck()));



