var top_left = document.getElementById("top-left");
var top_middle = document.getElementById("top-middle");
var top_right = document.getElementById("top-right");

var middle_left = document.getElementById("middle-left");
var middle = document.getElementById("middle");
var middle_right = document.getElementById("middle-right");

var bottom_left = document.getElementById("bottom-left");
var bottom_middle = document.getElementById("bottom-middle");
var bottom_right = document.getElementById("bottom-right");

var top_left_value = document.getElementById("top-left-value");
var topLeftFake = document.getElementById("top-left-value-fake");

var top_middle_value = document.getElementById("top-middle-value");
var topMiddleFake = document.getElementById("top-middle-value-fake");

var top_right_value = document.getElementById("top-right-value");
var topRightFake = document.getElementById("top-right-value-fake");

var middle_left_value = document.getElementById("middle-left-value");
var middleLeftFake = document.getElementById("middle-left-value-fake");

var middle_value = document.getElementById("middle-value");
var middleFake = document.getElementById("middle-value-fake");

var middle_right_value = document.getElementById("middle-right-value");
var middleRightFake = document.getElementById("middle-right-value-fake");

var bottom_left_value = document.getElementById("bottom-left-value");
var bottomLeftFake = document.getElementById("bottom-left-value-fake");

var bottom_middle_value = document.getElementById("bottom-middle-value");
var bottomMiddleFake = document.getElementById("bottom-middle-value-fake");

var bottom_right_value = document.getElementById("bottom-right-value");
var bottomRightFake = document.getElementById("bottom-right-value-fake");

var winner = document.getElementById("winner");

let count = 1;
let fakeCount = 1;
let game = true;

var player1TD = document.getElementById("player-one");
var player2TD = document.getElementById("player-two");

var player1Name = document.getElementById("playerOne");
var player2Name = document.getElementById("playerTwo");

var submit = document.getElementById("submit");

let playerOne = "";
let playerTwo = "";

var player1Score = document.getElementById("player-one-score");
var player2Score = document.getElementById("player-two-score");

let playerOneScore = 0;
let playerTwoScore = 0;

var changeNamesButton = document.getElementById("change-names");
var player1Button = document.getElementById("player-one-button");
var player2Button = document.getElementById("player-two-button");
var playerQuestion = document.getElementById("player-question");

var playerInput = document.getElementById("player-input");
var playerSubmit = document.getElementById("player-submit");

function getNames() {
    playerOne = player1Name.value;
    playerTwo = player2Name.value;

    player1Name.style.display = "none";
    player2Name.style.display = "none";

    player1TD.innerHTML = playerOne;
    player2TD.innerHTML = playerTwo;

    submit.style.display = "none";

    playerOneScore = 0;
    playerTwoScore = 0;
    player1Score.innerHTML = playerOneScore;
    player2Score.innerHTML = playerTwoScore;

    winner.innerHTML = "";
    changeNamesButton.style.display = "block";
}
function changeNames() {    
    player1Button.style.display = "block";
    player2Button.style.display = "block";
    playerQuestion.style.display = "block";
}
function player1() {
    playerInput.style.display = "block";
    playerSubmit.style.display = "block";
}
function player2() {
    playerInput.style.display = "block";
    playerSubmit.style.display = "block"; 
}
function newNames() {
    if(player1Button.onclick) {
        playerOne = playerInput.value;
        player1TD.innerHTML = playerOne;
    }
    else if(player2Button.onclick) {
        playerTwo = playerInput.value;
        player2TD.innerHTML = playerTwo;
    }
    player1Button.style.display = "none";
    player2Button.style.display = "none";
    playerQuestion.style.display = "none";
    playerInput.style.display = "none";
    playerSubmit.style.display = "none";  
}
/* 
    Top Left Box
*/
// When the top left box is hovered function
let TL = true;

function topLeftHover() {
    if (game && TL && count % 2 == 1 ) {
        top_left_value.innerHTML = "X";
    } else if(TL && game) {
        top_left_value.innerHTML = "O";
    } 
}
// When the top left box is not hovered anymore function
function topLeftPlayOff() {
    if (game && TL && fakeCount % 2 == 1) {
        top_left_value.innerHTML = ""; 
        fakeCount++;
    } else if(game && TL) {
        top_left_value.innerHTML = "";
        fakeCount++;
    }
}
// When the top left box is clicked function
function topLeftPlay() {
    if (game && TL && count % 2 == 1) {
        // odd number of clicks
        topLeftFake.innerHTML = "X";
        count++;
    } else if(game && TL) {
        // even number of clicks
        topLeftFake.innerHTML = "O";
        count++;
    }
    checkForWin();
    TL = false;
} 
/* 
    Top Left Box End 
*/
/* 
    Beginning of Top Middle 
*/
let TM = true;
function topMiddleHover() {
    if (game && TM && count % 2 == 1) {
         top_middle_value.innerHTML = "X";
    } else if(game && TM) {
        top_middle_value.innerHTML = "O";
    } 
}
function topMiddlePlayOff() {
    if (game && TM && fakeCount % 2 == 1) {
        top_middle_value.innerHTML = ""; 
        fakeCount++;
    } else if(game && TM) {
        top_middle_value.innerHTML = "";
        fakeCount++;
    }
}
function topMiddlePlay() {
    if (game && TM && count % 2 == 1) { 
        // odd number of clicks
         topMiddleFake.innerHTML = "X"; 
         count++;
    } else if(game && TM) {
        // even number of clicks
        topMiddleFake.innerHTML = "O"; 
        count++;
    }
    checkForWin(); 
    TM = false;
}
/* 
    Top Middle End
*/
/* 
    Beginning of Top Right
*/
let TR = true;
function topRightHover() {
    if (game && TR && count % 2 == 1) {
         top_right_value.innerHTML = "X";
    } else if(game && TR) {
        top_right_value.innerHTML = "O";
    } 
}
function topRightPlayOff() {
    if (game && TR && fakeCount % 2 == 1) {
        top_right_value.innerHTML = ""; 
        fakeCount++;
    } else if(game && TR) {
        top_right_value.innerHTML = "";
        fakeCount++;
    }
}
function topRightPlay() {
    if (game && TR && count % 2 == 1) {
         topRightFake.innerHTML = "X"; 
         count++;
    } else if(game && TR) {
        topRightFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
    TR = false;
}
/*
    Top Right End
*/
/* 
    Beginning Middle Left
*/
let ML = true;

function middleLeftHover() {
    if (game && ML && count % 2 == 1) {
        // odd number of clicks
        middle_left_value.innerHTML = "X";
    } else if(game && ML) {
        // even number of clicks
        middle_left_value.innerHTML = "O";
    } 
}
function middleLeftPlayOff() {
    if (game && ML && fakeCount % 2 == 1) {
        // odd number of clicks
        middle_left_value.innerHTML = ""; 
        fakeCount++;
    } else if(game && ML) {
        // even number of clicks
        middle_left_value.innerHTML = "";
        fakeCount++;
    }
}
function middleLeftPlay() {
    if (game && ML && count % 2 == 1) {
         middleLeftFake.innerHTML = "X"; 
         count++;
    } else if(game && ML) {
        middleLeftFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
    ML = false;
}
/* 
    End of Middle Left 
*/
/* 
    Beginning of the Middle
*/
let M = true;
function middleHover() {
    if (game && M && count % 2 == 1) {
        // odd number of clicks
        middle_value.innerHTML = "X";
    } else if(game && M){
        // even number of clicks
        middle_value.innerHTML = "O";
    } 
}
function middlePlayOff() {
    if (game && M && fakeCount % 2 == 1) {
        // odd number of clicks
        middle_value.innerHTML = ""; 
        fakeCount++;
    } else if(game && M) {
        // even number of clicks
        middle_value.innerHTML = "";
        fakeCount++;
    }
}
function middlePlay() {
    if (game && M && count % 2 == 1) {
         middleFake.innerHTML = "X"; 
         count++;
    } else if(game && M) {
        middleFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
    M = false;
}
/*
    End of the Middle
*/
/* 
    Beginning of the Middle Right
*/  
let MR = true;

function middleRightPlayOff() {
    if (game && MR && fakeCount % 2 == 1) {
        middle_right_value.innerHTML = ""; 
        fakeCount++;
    } else if(game && MR) {
        middle_right_value.innerHTML = "";
        fakeCount++;
    }
}
function middleRightHover() {
    if (game && MR && count % 2 == 1) {
        // odd number of clicks
        middle_right_value.innerHTML = "X";
    } else if(game && MR) {
        // even number of clicks
        middle_right_value.innerHTML = "O";
    } 
}
function middleRightPlay() {
    if (game && MR && count % 2 == 1) {
        // odd number of clicks
         middleRightFake.innerHTML = "X"; 
         count++;
    } else if(game && MR) {
        // even number of clicks
        middleRightFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
    MR = false;
}
/*
    End of Middle Right
*/
/*
    Beginning of the Bottom Left
*/
let BL = true;

function bottomLeftPlayOff() {
    if (game && BL && fakeCount % 2 == 1) {
        // odd number of clicks
        bottom_left_value.innerHTML = ""; 
        fakeCount++;
    } else if(game && BL) {
        // even number of clicks
        bottom_left_value.innerHTML = "";
        fakeCount++;
    }
}
function bottomLeftHover() {
    if (game && BL && count % 2 == 1) {
        bottom_left_value.innerHTML = "X";
    } else if(game && BL) {
        bottom_left_value.innerHTML = "O";
    } 
}
function bottomLeftPlay() {
    if (game && BL && count % 2 == 1) {        
        // odd number of clicks
        bottomLeftFake.innerHTML = "X"; 
        count++;
    } else if(game && BL) {
        // even number of clicks
        bottomLeftFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
    BL = false;
}
/* 
    End of Bottom Left
*/
/* 
    Beginning of the Bottom Middle
*/
let BM = true;

function bottomMiddlePlayOff() {
    if (game && BM && fakeCount % 2 == 1) {
        // odd number of clicks
        bottom_middle_value.innerHTML = ""; 
        fakeCount++;
    } else if(game && BM) {
        // even number of clicks
        bottom_middle_value.innerHTML = "";
        fakeCount++;
    }
}
function bottomMiddleHover() {
    if (game && BM && count % 2 == 1) {
        bottom_middle_value.innerHTML = "X";
    } else if(game && BM) {
        bottom_middle_value.innerHTML = "O";
    } 
}
function bottomMiddlePlay() {
    if (game && BM && count % 2 == 1) {        
        // odd number of clicks
        bottomMiddleFake.innerHTML = "X"; 
        count++;
    } else if(game && BM) {
        // even number of clicks
        bottomMiddleFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
    BM = false;
}
/*
    End of Bottom Middle 
*/
/*
    Beginning of Bottom Right
*/
let BR = true;

function bottomRightPlayOff() {
    if (game && BR && fakeCount % 2 == 1) {
        // odd number of clicks
        bottom_right_value.innerHTML = ""; 
        fakeCount++;
    } else if(game && BR) {
        // even number of clicks
        bottom_right_value.innerHTML = "";
        fakeCount++;
    }
}
function bottomRightHover() {
    if (game && BR && count % 2 == 1) {
        // odd number of clicks
        bottom_right_value.innerHTML = "X";
    } else if(game && BR) {
        // even number of clicks
        bottom_right_value.innerHTML = "O";
    } 
}
function bottomRightPlay() {
    if (game && BR && count % 2 == 1) {
        bottomRightFake.innerHTML = "X"; 
        count++;
    } else if(game && BR) {
        bottomRightFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
    BR = false;
}
/*
    End of Bottom Right
*/
function checkForWin() {
    // Player 1 Win
    if(topLeftFake.innerHTML == "X" && topMiddleFake.innerHTML == "X" && topRightFake.innerHTML == "X" ) {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
    }
    else if(topLeftFake.innerHTML == "X" && middleLeftFake.innerHTML == "X" && bottomLeftFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
    }
    else if(topLeftFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
    }
    else if(middleLeftFake.innerHTML == "X" && middleFake.innerHTML == "X" && middleRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
    }
    else if(bottomLeftFake.innerHTML == "X" && bottomMiddleFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
    }
    else if(topMiddleFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomMiddleFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
    }
    else if(topRightFake.innerHTML == "X" && middleRightFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
    }
    else if(topRightFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomLeftFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
        }
    }
    // Player 2 win
    else if(topLeftFake.innerHTML == "O" && topMiddleFake.innerHTML == "O" && topRightFake.innerHTML == "O" ) {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
        }
    }
    else if(topLeftFake.innerHTML == "O" && middleLeftFake.innerHTML == "O" && bottomLeftFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
        }
    }
    else if(topLeftFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
        }
    }
    else if(middleLeftFake.innerHTML == "O" && middleFake.innerHTML == "O" && middleRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
        }
    }
    else if(bottomLeftFake.innerHTML == "O" && bottomMiddleFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
        }
    }
    else if(topMiddleFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomMiddleFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
        }
    }
    else if(topRightFake.innerHTML == "O" && middleRightFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
        }
    }
    else if(topRightFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomLeftFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
        }
    }
}
function newGame() {
    topLeftFake.innerHTML = "";
    top_left_value.innerHTML = "";

    topMiddleFake.innerHTML = "";
    top_middle_value.innerHTML = "";
    
    topRightFake.innerHTML = "";
    top_right_value.innerHTML = "";


    middleLeftFake.innerHTML = "";
    middle_left_value.innerHTML = "";

    middleFake.innerHTML = "";
    middle_value.innerHTML = "";

    middleRightFake.innerHTML = "";
    middle_right_value.innerHTML = "";


    bottomLeftFake.innerHTML = "";
    bottom_left_value.innerHTML = "";

    bottomMiddleFake.innerHTML = "";
    bottom_middle_value.innerHTML = "";

    bottomRightFake.innerHTML = "";
    bottom_right_value.innerHTML = "";

    winner.innerHTML = "";
    TL = true; TM = true; TR = true;
    ML = true; M = true; MR = true;
    BL = true; BM = true; BR = true;
    game = true;

    count = 1; fakeCount = 1;
}
