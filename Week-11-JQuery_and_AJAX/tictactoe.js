$('window').on('DOMContentLoaded', () => {
    const blocks = $('.block').toArray();
    console.log(blocks);
    const playerDisplay = $('.display-player');
    const resetButton = $('#restart');
    const announcer = $('.announcer');
    
    
    /*
    const blocks = Array.from(document.querySelectorAll('.block'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#restart');
    const announcer = document.querySelector('.announcer');
    */
    let board = ["","","","","","","","",""];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';
    
    /*
    This will show what positions that the board will read the block values
    [0][1][2]
    [3][4][5]
    [6][7][8]
    */
  
    const winConditions = [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6],
    ];
    
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <=7; i++) {
            const winCondition = winConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === ''){
                continue;
            } 
        if (a === b && b === c){
            roundWon = true;
            break;
        } 
    };
    
    if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON)
        isGameActive = false;
        return;
    };
    
    if (!board.includes('')){
        announce(TIE);
    }
}

const announce = (type) => {
    switch(type){
            case PLAYERO_WON:
                announcer.text = 'Player <span class="playerO">O</span> Won!';
                break;
                case PLAYERX_WON:
                    announcer.text = 'Player <span class="playerX">X</span> Won!';
                    break;
                case TIE:
                    announcer.text = 'Tie...';
                    }
                    announcer.removeClass('hide');
                };
                
                const isValidAction = (block) => {
                    if ($(".block").text === 'X' || $(".block").text === 'O'){
                        return false;
                    }
                    return true;
                };
                
                const updateBoard = (index) => {
                    board[index] = currentPlayer;
    };
    
    const changePlayer = () => {
        playerDisplay.removeClass(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.text = currentPlayer;
        playerDisplay.addClass(`player${currentPlayer}`);
    };

   
        
    

    const resetBoard = () => {
        board = ['','','','','','','','',''];
        isGameActive = true;
        announcer.addClass('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }
    
        blocks.forEach(block => {
            block
            .text = '';
            $('.block').removeClass('PlayerX');
            $('.block').removeClass('PlayerO');
        });
    };
  
    const userAction = (block, index) => {
        if(isValidAction(block) && isGameActive) {
            $('.block').text = currentPlayer;
            $('.block').addClass(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    blocks.forEach( (block,index) => {
        $('.block').on('click', () => userAction(block, index));
   });
   
   resetButton.on('click', resetBoard);
   //resetButton.addEventListener('click',resetBoard);

})

    







   
