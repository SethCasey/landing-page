//a simple game of rock paper scissors, against the computer
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let keepGoing = 1; //used to control the while loops
let win = "You've won!";
let lose = "You've lost!";
let tie = "You've tied!";
let playerScore = 0;
let computerScore = 0;
let player;
let computer;

const rockbtn = document.querySelector('#rockbtn');
const paperbtn = document.querySelector('#paperbtn');
const scissorsbtn = document.querySelector('#scissorsbtn');

rockbtn.addEventListener('click', () => {
    //console.log("The player chose rock");
    let result = singleRound(rock);
    score(result);
}
);
paperbtn.addEventListener('click', () => {
    //console.log("The player chose paper");
    let result = singleRound(paper);
    score(result);
}
);
scissorsbtn.addEventListener('click', () => {
    //console.log("The player chose scissors");
    let result = singleRound(scissors);
    score(result);
}
);


//function called "computerSelection" that randomly returns rock, paper, or scissors
function computerSelection (){ //function to randomize computer's play, return play
    let randomPlay = Math.random()*3; //returns a float between 0 and 1, multiply by 3 to get a range between 0 and 3
    //console.log(randomPlay); //for debugging
    //rock = randomPlay <= 33.33; paper = 33.34 <= randomPlay <= 66.66; scissors = randomPlay >= 66.67 
    if (randomPlay < 1) {
        return rock;
    }
    else if (1 < randomPlay && randomPlay < 2) {
        return paper;
    }
    else {
        return scissors;
    }
}
//console.log("The computer chose",computerSelection());

function singleRound (playerInput) {
    console.log("The player chose",playerInput);
    computer = computerSelection(); //stores computer's play in computer
    console.log("The computer chose",computer);
    if (playerInput === computer) {
        return 2;//2 means player & computer tied
    }else if (playerInput == rock) {
        if (computer == scissors) {
            return 1;//1 means player wins
        } else {
            return 0;//0 means computer wins
        }
    } else if (playerInput == paper) {
        if (computer == rock) {
            return 1;
        } else {
            return 0;
        }
    } else if (playerInput == scissors) {
        if (computer == paper)  {
            return 1;
        } else {
            return 0;
        }
    } else {
        console.log("Error");
    }
}


const playerScoreboard = document.querySelector('#playerScoreboard');
const computerScoreboard = document.querySelector('#computerScoreboard');
const lastRound = document.querySelector('#lastRound');

playerScoreboard.textContent = playerScore;
computerScoreboard.textContent = computerScore;
lastRound.textContent = "You haven't played yet";

function score (result) {
    //let result = singleRound(); //set variable result to whatever singleRound returns
   
        if (result == 1) {//singleRound() returns 1 (win)
            lastRound.textContent = ("You won!");
            playerScore++;
            if (winMessage(playerScore)) {
                gameMessage.textContent = "You've won the game!";
            }
            playerScoreboard.textContent = playerScore;
            computerScoreboard.textContent = computerScore;
        } else if (result == 2){//singleRound() returns 2 (tie)
            lastRound.textContent = ("You tied!");

        } else {//singleRound() returns 0 (loss)
            lastRound.textContent = ("You lost!");
            computerScore++;
            if (winMessage(computerScore)) {
                gameMessage.textContent = "You've lost the game!";
            }
            playerScoreboard.textContent = playerScore;
            computerScoreboard.textContent = computerScore;
        }
        console.log("Your score:",playerScore);
        console.log("The computer's score:",computerScore);
}

const gameMessage = document.querySelector('#winMessage');

function winMessage(score) {
    if (score == 5) {
        return 1;
    } else {
        return 0;
    }
}

const controls = document.querySelector(".controls");

controls.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        } else if (playerScore == 0 || computerScore == 0) {
        gameMessage.textContent = "";
        playerScoreboard.textContent = playerScore;
        computerScoreboard.textContent = computerScore;
    }

})