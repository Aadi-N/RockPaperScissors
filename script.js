// Rock Paper Scissors
const display = document.getElementById("display");
const playerScore = document.getElementById("playerScore");
const robotPick = document.getElementById("robotPick");
const robotScore = document.getElementById("robotScore");
let playerWins = 0;
let robotWins = 0;
playerScore.value = 0;
robotScore.value = 0;

// Random Number generator from 0 -> max(non inclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Generates the result of the current choice of the player
// and displays the result
function result(playerChoice) {
    let robotChoice = getRandomInt(3);
    let result = playRound(playerChoice, robotChoice);
    
    // Display the robot pick
    if(robotChoice == 0) {
        robotPick.value = "Rock";
    }
    else if(robotChoice == 1) {
        robotPick.value = "Paper";
    }
    else if(robotChoice == 2) {
        robotPick.value = "Scissors";
    }

    // Check the current round winner and store then display score
    if(result == 0) {
        display.value = "Tie";
    }
    else if(result == 1) {
        display.value = "Player Wins";
        playerWins += 1;
        playerScore.value = playerWins;
    }
    else if(result == -1) {
        display.value = "Robot Wins";
        robotWins += 1;
        robotScore.value = robotWins;
    }

    checkVictory();
}

function checkVictory() {
    if(playerWins >= 3) {
        alert("Player Wins!");
        playerWins = 0;
        robotWins = 0;
        playerScore.value = 0;
        robotScore.value = 0;
    }
    else if(robotWins >= 3) {
        alert("Robot Wins :(");
        playerWins = 0;
        robotWins = 0;
        playerScore.value = 0;
        robotScore.value = 0;
    }
}

// Function returns 0 if tie, 1 if player wins, -1 if robot wins
function playRound(playerChoice, robotChoice) {
    if(playerChoice == robotChoice) {
        return 0;
    }
    else if(playerChoice == 0) {
        if(robotChoice == 1) {
            return -1;
        }
        return 1;
    }
    else if(playerChoice == 1) {
        if(robotChoice == 2) {
            return -1;
        }
        return 1;
    }
    else if(playerChoice == 2) {
        if(robotChoice == 1) {
            return -1;
        }
        return 1;
    }
}