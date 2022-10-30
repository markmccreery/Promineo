let currentTurn = "X";
let isGameActive = true;
let cells = ["cell0","cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8"];

let isValidAction = (cells) => {
    let i = this.index;
    if (cells[i] === 'X' || cells[i] === 'O'){
        return false;
    }
    return true;
};


function initializeCell(cellId) {
    const cellElement = $(`#${cellId}`)
    console.log(cellId)
    cellElement.text("")
    cellElement.on("click", () => {
        if (isValidAction && isGameActive) {
        //turn the space
        console.log("change the cell to", currentTurn);
        cellElement.text(currentTurn);
        validation();
        //change the turn
        currentTurn = currentTurn === "X" ? "O" : "X";
        console.log("toggle the currentTurn to", currentTurn);
        //display current turn
        console.log("change the element currentTurn to", currentTurn);
        
        $('#currentTurn').text(currentTurn);
    }
})
}


function initializeGame() {
cells.forEach((cellId) => {
    initializeCell(cellId)
})
$("#restart").on("click", () => {
    $(".gamecell").text("");
    isGameActive = true;
    $('#currentTurn').text("X");
    currentTurn = "X";
    $(".announcer").empty();
    $(".announcer").addClass("hide");
})
};

initializeGame();

const winConditions = [
   ["cell0", "cell1", "cell2"],
   ["cell3", "cell4", "cell5"],
   ["cell6", "cell7", "cell8"],
   ["cell0", "cell3", "cell6"],
   ["cell1", "cell4", "cell7"],
   ["cell2", "cell5", "cell8"],
   ["cell0", "cell4", "cell8"],
   ["cell2", "cell4", "cell6"],
];

const validation = () => {
    let roundWon = false;
    for (let i = 0; i <= 7; i++){
    const winCondition = winConditions[i];
    const a = cells[winCondition[0]];
    const b = cells[winCondition[1]];
    const c = cells[winCondition[2]];

    if (a === "X" || a === "O") {
        if (a === b && b === c) {
            roundWon = true;
        }
    }
    if (roundWon === true) {
        isGameActive = false;
        $('.announcer').removeClass('hide');
        $('.announcer').append(`Player ${currentTurn} has won!`);
        return;
    } if (cells.includes('')) {
        isGameActive = false;
        $('.announcer').removeClass('hide');
        $('.announcer').append(`It's a tie ... please play again.`);
        return;
    }
}
 

}



