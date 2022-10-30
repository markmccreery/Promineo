/* Testing - running one piece of code to make sure that if it changes it doesn't affect the rest of the code.
Test driven development - where you write the tests first then write the programming afterwards;*/

/* describe is a useful way to group tests together;
In order to test and to get the variables to compare a king and a 2 for example is to convert the numerical value of a king to a string;

Since this is a capstone project, there is no video for the game.

I'd suggest starting with comments for base instructions.

Using OOP classes, you might look into having a

-player class
-deck class (methods within for create deck, shuffle deck, and deal deck)
-class for game (this is going to be the game logic)*/

/*function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
*/

/* player1deck = [];
player2deck = [];


for (let i = 0; i < deck.length; i++){
    if(i % 2 === 0){
        player1deck.push(deck[i]);
    } else {
        player2deck.push(deck[i]);
    }
}
}
