const Gameboard = (() => {
    'use strict';
    // placeholder to fill board to start with
    let gameStatus = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    // let gameStatus = [];
    // for (let x = 0; x < 9; x++) {
    //     gameStatus.push(" ");
    // }
    return {
        gameStatus: gameStatus
    };
})();

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

const displayUpdate = (player) => {
    for (x = 0; x < 9; x++) {
        let square = document.getElementById(x);
        square.textContent = Gameboard.gameStatus[x];
        square.addEventListener("click", () => {
            //or should i add event listener here?
            //need to take whoever's turn it is, and 
            //push their symbol into the proper place
            //in the array
        })
    };
};

displayUpdate();

const gameController = () => {
    for (x = 0; x < gameStatus.length(); x++) {
        //should I add event listeners here?
    }
};