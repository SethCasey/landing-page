const Player = (playerNum, color, symbol) => {
    playerNum = (num) => {playerNum = num};
    color = (color) => {color = color};
    symbol = (symbol) => {symbol = symbol}
    return {
        num: playerNum(),
        color: color(),
        symbol: symbol()
    };
};

const PlayerOne = Object.assign({}, Player, {num: 1, color: "black", symbol: "X"});
const PlayerTwo = Object.assign({}, Player, {num: 2, color: "green", symbol: "O"});


const Gameboard = (() => {
    'use strict';
    // placeholder to fill board to start with
    let gameStatus = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    // let gameStatus = [];
    // for (let x = 0; x < 9; x++) {
    //     gameStatus.push(" ");
    // }
    let currentPlayer = PlayerOne.num;
    let turn = () => {
        if (currentPlayer == 1) {
            currentPlayer = PlayerTwo.num;
        } else {
            currentPlayer = PlayerOne.num;
        }
    };
    let move = () => {
        //add here the logic of checking whether a square is used. 
        //if it is unused, then add player's symbol
        //call Gameboard.turn() to change player's turn to the next
    };
    return {
        gameStatus: gameStatus,
        currentPlayer,
        turn
    };
})();

const displayUpdate = () => {
    for (x = 0; x < 9; x++) {
        let square = document.getElementById(x);
        square.textContent = Gameboard.gameStatus[x];
        square.addEventListener("click", () => {
            Gameboard.move();
        })
    };
    let currentTurn = document.getElementById("turn");
    console.log(Gameboard.currentPlayer);
    currentTurn.textContent = Gameboard.currentPlayer;
};

displayUpdate();

const gameController = () => {
    for (x = 0; x < gameStatus.length(); x++) {
        //should I add event listeners here?
    }
};