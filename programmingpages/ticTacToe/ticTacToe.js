const PlayerFactory = (name, num, symbol, score = 0) => {
//TODO: Allow players to set customizable name (Instead of One or Two)
	//Allow creation of AI through toggle button? button?
	//this would be cool...
    this.name = name;
    this.num = num;
    this.symbol = symbol;
    this.score = score;
    return {name, num, symbol, score};
};

const PlayerOne = PlayerFactory("One", 1, "X");
const PlayerTwo = PlayerFactory("Two", -1, "O");

boardStatus = [];

GameBoardInitialize = () => {
    
    for (let x = 0; x < 9; x++) {
        //fill array with "Z" so that it does not have holes,
        //and replace the "Z" with player symbol when clicked
        boardStatus[x] = 0;
    };

    //resets EVERYTHING with the button
    let resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", (e) => {
        PlayerOne.score = 0;
        PlayerTwo.score = 0;
        clearBoard();
    });
    
    currentPlayer = PlayerOne;

    //set up event listeners for tic tac toe board
    for (let x = 0; x < 9; x++) {
        let square = document.getElementById(x);
        square.addEventListener("click", (e) => {
            console.log(`Button ${x} clicked`);
            if (square.textContent == "") {
                square.textContent = currentPlayer.symbol;
                updateArray(x, currentPlayer);
                changePlayer();
                updateTurnDisplay(currentPlayer);
            } else {
                alert("Nope! Already played!");
                checkForFilled();
            };
            checkForWin();
        });
    };

    //changes the player from one to the other
    this.changePlayer = () => {
        if (currentPlayer == PlayerOne) {
            currentPlayer = PlayerTwo;
            //console.log(currentPlayer);
        } else {
            currentPlayer = PlayerOne;
            //console.log(currentPlayer);
        };
        return currentPlayer;
    };

    //updates the display at the top of the page to display
    //the current player
    this.updateTurnDisplay = (currentPlayer) => {
        turn = document.getElementById("turn");
        turn.textContent = currentPlayer.name;
        scorePlayerOne = document.getElementById("player1score");
        scorePlayerOne.textContent = (`Player 1 Score: ${PlayerOne.score}`);
        scorePlayerTwo = document.getElementById("player2score");
        scorePlayerTwo.textContent = (`Player 2 Score: ${PlayerTwo.score}`);
    };
    updateTurnDisplay(currentPlayer);

    //updates the array with the current board
    this.updateArray = (x, currentPlayer) => {
        boardStatus[x] = currentPlayer.num;
        console.log(boardStatus);
    };

    //checks for whether the board is filled and no more
    //moves are present
    this.checkForFilled = () => {
        let counter = 0;
        for (let x = 0; x < 9; x++) {
            if (boardStatus[x] == 1 || boardStatus[x] == -1) {
                counter++;
            } else {
                continue;
            };
        };

        if (counter == 9) {
            clearBoard();
        };
    };

    //clears the board when called, and array, and updates the
    //display
    this.clearBoard = () => {
        for (let x = 0; x < 9; x++) {
            boardStatus[x] = 0;
            let square = document.getElementById(x);
            square.textContent = "";
            currentPlayer = PlayerOne;
            updateTurnDisplay(currentPlayer);
        };
    };

    //checks for 3 in a row - left to right, top to bottom,
    //and diagonals
    this.checkForWin = () => {
        let totaller = 0;
        let winMessage = (player) => {
            alert(`Player ${player.name} has won!`);
        };
        let winTotaller = () => {
            if (totaller == 3 || totaller == -3) {
                if (totaller == 3) {
                    winMessage(PlayerOne);
                    scoreAdder(PlayerOne);
                } else if (totaller == -3) {
                    winMessage(PlayerTwo);
                    scoreAdder(PlayerTwo);
                };
                clearBoard();
                return 1;
            } else {
                return 0;
            };
        };
        
        //this loop checks the horizontals for 3 in a row
        for (let y = 0; y < 9; y += 3) {
            for (let x = y; x < (y + 3); x++) {
                totaller += boardStatus[x];
            };
            winTotaller(totaller);
            totaller = 0;
        };

        //this loop checks the verticals for 3 in a row
        for (let y = 0; y < 3; y++) {
            for (let x = y; x < 9; x += 3) {
                totaller += boardStatus[x];
            };
            winTotaller(totaller);
            totaller = 0;
        };

        //this loop checks the TL to BR diagonal
        for (let y = 0; y < 9; y += 4) {
            totaller += boardStatus[y];
        }
        winTotaller(totaller);
        totaller = 0;

        //this loop checks the TR to BL diagonal
        for (let x = 2; x < 7; x+=2) {
            totaller += boardStatus[x];
        };
        winTotaller(totaller);
        totaller = 0;
    };

    //adds one to the player with which the method is called
    this.scoreAdder = (player) => {
        player.score += 1;
    };

};

GameBoardInitialize();
