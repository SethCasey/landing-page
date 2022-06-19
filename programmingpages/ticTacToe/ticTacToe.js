const PlayerFactory = (num, symbol) => {
    this.num = num;
    this.symbol = symbol;
    return {num, symbol,};
};

const PlayerOne = PlayerFactory(1, "X");
const PlayerTwo = PlayerFactory(2, "O");

boardStatus = [];

GameBoardInitialize = () => {

    for (let x = 0; x < 9; x++) {
        //fill array with "Z" so that it does not have holes,
        //and replace the "Z" with player symbol when clicked
        boardStatus[x] = "Z";
    };
    
    currentPlayer = PlayerOne;

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
        });
    };

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

    this.updateTurnDisplay = (currentPlayer) => {
        turn = document.getElementById("turn");
        turn.textContent = currentPlayer.num;
    };
    updateTurnDisplay(currentPlayer);

    this.updateArray = (x, currentPlayer) => {
        boardStatus[x] = currentPlayer.symbol;
        console.log(boardStatus);
    };

    this.checkForFilled = () => {
        let counter = 0;
        for (let x = 0; x < 9; x++) {
            if (boardStatus[x] == "X" || boardStatus[x] == "O") {
                counter++;
            } else {
                continue;
            };
        };

        if (counter == 9) {
            for (let x = 0; x < 9; x++) {
                boardStatus[x] = "Z";
                let square = document.getElementById(x);
                square.textContent = "";
                currentPlayer = PlayerOne;
                updateTurnDisplay(currentPlayer);
            };
        };
    };

    this.checkForWin = () => {
        //need to create array of possible win combos?
        //then check boardStatus against win combos, match
        //means win, clear board, tally score for winner?
    };
};

GameBoardInitialize();