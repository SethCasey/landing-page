const Gameboard = (() => {
    'use strict';

    let gameStatus = [];
    for (let x = 0; x < 9; x++) {
        gameStatus.push(" ");
    }
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

const displayController = () => {
    
}