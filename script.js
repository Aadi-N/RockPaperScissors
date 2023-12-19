// Rock Paper Scissors
const display = document.getElementById("display");
let playerScore = 0;
let robotScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function result(playerChoice) {
    let robotChoice = getRandomInt(3);
    let result = playRound(playerChoice, robotChoice);

    if(result == 0) {
        display.value = "Tie";
    }
    else if(result == 1) {
        display.value = "Player Wins";
        playerScore += 1;
    }
    else if(result == -1) {
        display.value = "Robot Wins";
        robotScore += 1;
    }

    // Victory Condition Check
    if(playerScore >= 3) {
        alert("Player Wins!");
    }
    else if(robotScore >= 3) {
        alert("Robot Wins :(");
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