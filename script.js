let barbie = 0;
function numberOfPlayers(number) {
    if (number == 1) {
        player1Name.style.display = "block";
        barbie = 1;
    }
    else {
        player1Name.style.display = "block";
        player2Name.style.display = "block";
        barbie = 2;
    }        
    numPlayers.style.display = "none";
    submit.style.display = "block";
}
function getNames() {
    scoreboard.style.display = "table";
    scoreboard.style.margin = "0 auto";        

    playerOne = player1Name.value;
    playerTwo = player2Name.value;

    if(playerTwo == "") {
        playerTwo = "Player Two";
    }
    
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

    newGameButton.style.display = "block";
    restartGameButton.style.display = "block";
    changeNamesButton.style.display = "block";
    ticTacoToeBoard.style.display = "block";
    
}
function changeNames() {    
    player1Button.style.display = "block";
    player2Button.style.display = "block";
    playerButtonDiv.style.display = "flex";
    playerQuestion.style.display = "block";

    newGameButton.style.display = "none";
    changeNamesButton.style.display = "none";
    restartGameButton.style.display = "none";
    ticTacoToeBoard.style.display = "none";
}
function player1() {
    player1Input.style.display = "block";
    player1Submit.style.display = "block";
}
function player2() {
    player2Input.style.display = "block";
    player2Submit.style.display = "block"; 
}
function player1NewName() {
    playerOne = player1Input.value;
    player1TD.innerHTML = playerOne;
    player1Button.style.display = "none";
    player2Button.style.display = "none";
    playerQuestion.style.display = "none";

    player1Input.style.display = "none";
    player1Submit.style.display = "none";  
    
    newGameButton.style.display = "block";
    changeNamesButton.style.display = "block";
    restartGameButton.style.display = "block";
    ticTacoToeBoard.style.display = "block";
}
function player2NewName() {
    playerTwo = player2Input.value;
    player2TD.innerHTML = playerTwo;
    player1Button.style.display = "none";
    player2Button.style.display = "none";
    playerQuestion.style.display = "none";

    player2Input.style.display = "none";
    player2Submit.style.display = "none"; 
    
    newGameButton.style.display = "block";
    changeNamesButton.style.display = "block";
    restartGameButton.style.display = "block";
    ticTacoToeBoard.style.display = "block"; 
}
/* 
    Top Left Box
*/
// When the top left box is hovered function
let TL = true;

function topLeftHover() {
    if (game && TL && count % 2 == 1 ) {
        top_left_value.innerHTML = "X";
    } else if(TL && game && barbie == 2) {
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
        if(barbie == 1) {
            count = count + 2;
            if(checkForWin1() == true) {
                modal.style.display = "block";
            }
            computerMove();
         }
         else {
            count++;
         }
    } else if(game && TL) {
        // even number of clicks
            topLeftFake.innerHTML = "O";
            count++;
    }
    if(barbie == 2) {
        if(checkForWin() == true) {
            modal.style.display = "block";
        } 
    }
    TL = false;
    if(draw() == true) {
        modal.style.display == "block";
    }
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
    } else if(game && TM && barbie == 2) {
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
         if(barbie == 1) {
            count = count + 2;
            if(checkForWin1() == true) {
                modal.style.display = "block";
            }
            computerMove();
         }
         else {
            count++;
         }
    } 
    else if(game && TM) {
        // even number of clicks
            topMiddleFake.innerHTML = "O"; 
            count++;
    }
    if(barbie == 2) {
        if(checkForWin() == true) {
            modal.style.display = "block";
        } 
    }
    TM = false;
    if(draw() == true) {
        modal.style.display == "block";
    }
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
    } else if(game && TR && barbie == 2) {
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
        if(barbie == 1) {
            count = count + 2;
            if(checkForWin1() == true) {
                modal.style.display = "block";
            }
            computerMove();
        }
        else {
            count++;
        }
    } else if(game && TR) {
        topRightFake.innerHTML = "O"; 
        count++;
    } 
    if(barbie == 2) {
        if(checkForWin() == true) {
            modal.style.display = "block";
        } 
    }
    TR = false;
    if(draw() == true) {
        modal.style.display == "block";
    }
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
    } else if(game && ML && barbie == 2) {
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
         if(barbie == 1) {
            count = count + 2;
            if(checkForWin1() == true) {
                modal.style.display = "block";
            }
            computerMove();
         }
         else {
            count++; 
         }
    } else if(game && ML) {
           middleLeftFake.innerHTML = "O"; 
        count++;
    } 
    if(barbie == 2) {
        if(checkForWin() == true) {
            modal.style.display = "block";
        } 
    }
    ML = false;
    if(draw() == true) {
        modal.style.display == "block";
    }
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
    } else if(game && M && barbie == 2){
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
         if(barbie == 1) {
            count = count + 2;
            if(checkForWin1() == true) {
                modal.style.display = "block";
            }
            computerMove();
         }
         else {
            count++;
         }
    } else if(game && M) {
            middleFake.innerHTML = "O"; 
            count++;   
    } 
    if(barbie == 2) {
        if(checkForWin() == true) {
            modal.style.display = "block";
        } 
    }
    M = false;
    if(draw() == true) {
        modal.style.display == "block";
    }
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
    } else if(game && MR && barbie == 2) {
        // even number of clicks
        middle_right_value.innerHTML = "O";
    } 
}
function middleRightPlay() {
    if (game && MR && count % 2 == 1) {
        // odd number of clicks
         middleRightFake.innerHTML = "X"; 
         if(barbie == 1) {
            count = count + 2;
            if(checkForWin1() == true) {
                modal.style.display = "block";
            }
            computerMove();
         }
         else {
           count++; 
         }
    } else if(game && MR) {
        // even number of clicks
            middleRightFake.innerHTML = "O"; 
            count++; 
    } 
    if(barbie == 2) {
        if(checkForWin() == true) {
            modal.style.display = "block";
        } 
    }
    MR = false;
    if(draw() == true) {
        modal.style.display == "block";
    }
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
    } else if(game && BL && barbie == 2) {
        bottom_left_value.innerHTML = "O";
    } 
}
function bottomLeftPlay() {
    if (game && BL && count % 2 == 1) {        
        // odd number of clicks
        bottomLeftFake.innerHTML = "X"; 
        if(barbie == 1) {
            count = count + 2;
            if(checkForWin1() == true) {
                modal.style.display = "block";
            }
            computerMove();
        }
        else {
            count++;
        }
    } else if(game && BL) {
        // even number of clicks
        bottomLeftFake.innerHTML = "O"; 
        count++;  
    } 
    if(barbie == 2) {
        checkForWin();
    }
    BL = false;
    if(draw() == true) {
        modal.style.display == "block";
    }
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
    } else if(game && BM && barbie == 2) {
        bottom_middle_value.innerHTML = "O";
    } 
}
function bottomMiddlePlay() {
    if (game && BM && count % 2 == 1) {        
        // odd number of clicks
        bottomMiddleFake.innerHTML = "X"; 
        if(barbie == 1) {
            count = count + 2;
            if(checkForWin1() == true) {
                modal.style.display = "block";
            }
            computerMove();
        }
        else {
            count++;
        }
    } else if(game && BM) {
        // even number of clicks
            bottomMiddleFake.innerHTML = "O"; 
            count++; 
    }
    if(barbie == 2) {
        checkForWin();
    } 
    BM = false;
    if(draw() == true) {
        modal.style.display == "block";
    }
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
    } else if(game && BR && barbie == 2) {
        // even number of clicks
        bottom_right_value.innerHTML = "O";
    } 
}
function bottomRightPlay() {
    if (game && BR && count % 2 == 1) {
        bottomRightFake.innerHTML = "X"; 
        if(barbie == 1) {
            count = count + 2;
            if(checkForWin1() == true) {
                modal.style.display = "block";
            }
            computerMove();
        }
        else {
            count++;
        }
    } else if(game && BR) {
        bottomRightFake.innerHTML = "O"; 
        count++;  
    } 
    if(barbie == 2) {
        checkForWin();
    }
    BR = false;
    if(draw() == true) {
        modal.style.display == "block";
    }
}
/*
    End of Bottom Right
*/

function checkForWin1() {
    // Player 1 Win
    if(topLeftFake.innerHTML == "X" && topMiddleFake.innerHTML == "X" && topRightFake.innerHTML == "X" ) {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topLeftFake.innerHTML == "X" && middleLeftFake.innerHTML == "X" && bottomLeftFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topLeftFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(middleLeftFake.innerHTML == "X" && middleFake.innerHTML == "X" && middleRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(bottomLeftFake.innerHTML == "X" && bottomMiddleFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topMiddleFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomMiddleFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topRightFake.innerHTML == "X" && middleRightFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topRightFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomLeftFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
}
function checkForWin2() {
    // Player 2 win
    if(topLeftFake.innerHTML == "O" && topMiddleFake.innerHTML == "O" && topRightFake.innerHTML == "O" ) {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topLeftFake.innerHTML == "O" && middleLeftFake.innerHTML == "O" && bottomLeftFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topLeftFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(middleLeftFake.innerHTML == "O" && middleFake.innerHTML == "O" && middleRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(bottomLeftFake.innerHTML == "O" && bottomMiddleFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topMiddleFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomMiddleFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topRightFake.innerHTML == "O" && middleRightFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topRightFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomLeftFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
}
function checkForWin() {
       // Player 1 Win
       if(topLeftFake.innerHTML == "X" && topMiddleFake.innerHTML == "X" && topRightFake.innerHTML == "X" ) {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topLeftFake.innerHTML == "X" && middleLeftFake.innerHTML == "X" && bottomLeftFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topLeftFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(middleLeftFake.innerHTML == "X" && middleFake.innerHTML == "X" && middleRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(bottomLeftFake.innerHTML == "X" && bottomMiddleFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topMiddleFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomMiddleFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topRightFake.innerHTML == "X" && middleRightFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    else if(topRightFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomLeftFake.innerHTML == "X") {
        if(playerOne == "") {
            winner.innerHTML = "Player 1 Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerOne + " Wins!";
            playerOneScore++;
            player1Score.innerHTML = playerOneScore;
            game = false;
            return true;
        }
    }
    // Player 2 win
    else if(topLeftFake.innerHTML == "O" && topMiddleFake.innerHTML == "O" && topRightFake.innerHTML == "O" ) {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topLeftFake.innerHTML == "O" && middleLeftFake.innerHTML == "O" && bottomLeftFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topLeftFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(middleLeftFake.innerHTML == "O" && middleFake.innerHTML == "O" && middleRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(bottomLeftFake.innerHTML == "O" && bottomMiddleFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topMiddleFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomMiddleFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topRightFake.innerHTML == "O" && middleRightFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    }
    else if(topRightFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomLeftFake.innerHTML == "O") {
        if(playerTwo == "") {
            winner.innerHTML = "Player 2 Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;
            return true;
        }
        else {
            winner.innerHTML = playerTwo + " Wins!";
            playerTwoScore++;
            player2Score.innerHTML = playerTwoScore;
            game = false;  
            return true;
        }
    } 
}
function draw() {
    const eSquares = [
        topLeftFake, topMiddleFake, topRightFake,
        middleLeftFake, middleFake, middleRightFake,
        bottomLeftFake, bottomMiddleFake, bottomRightFake
    ] 
    .filter(square => square.innerHTML === "");
    if(eSquares.length == 0) {
        winner.innerHTML = "No Winner \nit's a draw";
        return true;
    }
}
function restartGame() {
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
function newGame() {
    restartGame();
    ticTacoToeBoard.style.display = "none";
    scoreboard.style.display = "none";
    playerButtonDiv.style.display = "none";
    playerQuestion.style.display = "none";
    restartGameButton.style.display = "none";
    newGameButton.style.display = "none";
    changeNamesButton.style.display = "none";
    numPlayers.style.display = "block";

    player1Score.value = 0;
    player2Score.value = 0;

    playerOne = "";
    playerTwo = "";
}

// Function to determine the computer's move (simple AI)
function computerMove() {
    // Implement a basic AI move (e.g., random move), here's a basic example: choose a random empty square
    const emptySquares = [
        topLeftFake, topMiddleFake, topRightFake,
        middleLeftFake, middleFake, middleRightFake,
        bottomLeftFake, bottomMiddleFake, bottomRightFake
    ] 
    // .filter(square => square.innerHTML === "");
    // Choose a random empty square for the computer's move
    if (emptySquares.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        // console.log("Selected: " + randomIndex);
        switch(randomIndex) {
            case 0: 
                if(topLeftFake.innerHTML == "") {
                    topLeftFake.innerHTML = "O";
                    if(checkForWin2() == true) {
                        modal.style.display = "block";
                    }
                }
                else {
                    computerMove();
                }
                TL = false;
            break;

            case 1: 
                if(topMiddleFake.innerHTML == "") {
                    topMiddleFake.innerHTML = "O";
                    if(checkForWin2() == true) {
                        modal.style.display = "block";
                    }
                }
                else {
                    computerMove();
                }
                TM = false;
            break;

            case 2: 
                if(topRightFake.innerHTML == "") {
                    topRightFake.innerHTML = "O";
                    if(checkForWin2() == true) {
                        modal.style.display = "block";
                    }
                }
                else {
                    computerMove();
                }
                TR = false;
            break;

            case 3: 
                if(middleLeftFake.innerHTML == "") {
                    middleLeftFake.innerHTML = "O";
                    if(checkForWin2() == true) {
                        modal.style.display = "block";
                    }
                }
                else {
                    computerMove();
                }
                ML = false;
            break;

            case 4: 
                if(middleFake.innerHTML == "") {
                    middleFake.innerHTML = "O";
                    if(checkForWin2() == true) {
                        modal.style.display = "block";
                    }
                }
                else {
                    computerMove();
                }
                M = false;
            break;

            case 5: 
                if(middleRightFake.innerHTML == "") {
                    middleRightFake.innerHTML = "O";
                    if(checkForWin2() == true) {
                        modal.style.display = "block";
                    }
                }
                else {
                    computerMove();
                }
                MR = false;
            break;

            case 6: 
                if(bottomLeftFake.innerHTML == "") {
                    bottomLeftFake.innerHTML = "O";
                    if(checkForWin2() == true) {
                        modal.style.display = "block";
                    }
                }
                else {
                    computerMove();
                }
                BL = false;
            break;

            case 7: 
                if(bottomMiddleFake.innerHTML == "") {
                    bottomMiddleFake.innerHTML = "O";
                    if(checkForWin2() == true) {
                        modal.style.display = "block";
                    }
                }
                else {
                    computerMove();
                }
                BM = false;
            break;

            case 8:
                if(bottomRightFake.innerHTML == "") {
                    bottomRightFake.innerHTML = "O";
                    if(checkForWin2() == true) {
                        modal.style.display = "block";
                    }
                }
                else {
                    computerMove();
                }
                BR = false;
            break;
        }
    }
}
span.onclick = function() {
    modal.style.display = "none";
}
modalNewGameButton.onclick = function() {
    modal.style.display = "none";
    newGame();
}
modalChangeNamesButton.onclick = function() {
    modal.style.display = "none";
    changeNames();
}
modalRestartGameButton.onclick = function() {
    modal.style.display = "none";
    restartGame();
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}