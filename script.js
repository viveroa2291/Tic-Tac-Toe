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


/* 
    Top Left Box
*/
// When the top left box is hovered function
let TL = true;

function topLeftHover() {
    if (TL && count % 2 == 1 ) {
        top_left_value.innerHTML = "X";
    } else if(TL) {
        top_left_value.innerHTML = "O";
    } 
}
// When the top left box is not hovered anymore function
function topLeftPlayOff() {
    if (TL && fakeCount % 2 == 1) {
        top_left_value.innerHTML = ""; 
        fakeCount++;
    } else if(TL) {
        top_left_value.innerHTML = "";
        fakeCount++;
    }
}
// When the top left box is clicked function
function topLeftPlay() {
    if (TL && count % 2 == 1) {
        // odd number of clicks
        topLeftFake.innerHTML = "X";
        count++;
    } else if(TL) {
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
    if (TM && count % 2 == 1) {
         top_middle_value.innerHTML = "X";
    } else if(TM) {
        top_middle_value.innerHTML = "O";
    } 
}
function topMiddlePlayOff() {
    if (TM && fakeCount % 2 == 1) {
        top_middle_value.innerHTML = ""; 
        fakeCount++;
    } else if(TM) {
        top_middle_value.innerHTML = "";
        fakeCount++;
    }
}
function topMiddlePlay() {
    if (TM && count % 2 == 1) { 
        // odd number of clicks
         topMiddleFake.innerHTML = "X"; 
         count++;
    } else if(TM) {
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
    if (TR && count % 2 == 1) {
         top_right_value.innerHTML = "X";
    } else if(TR) {
        top_right_value.innerHTML = "O";
    } 
}
function topRightPlayOff() {
    if (TR && fakeCount % 2 == 1) {
        top_right_value.innerHTML = ""; 
        fakeCount++;
    } else if(TR) {
        top_right_value.innerHTML = "";
        fakeCount++;
    }
}
function topRightPlay() {
    if (TR && count % 2 == 1) {
         topRightFake.innerHTML = "X"; 
         count++;
    } else if(TR) {
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
    if (ML && count % 2 == 1) {
        // odd number of clicks
        middle_left_value.innerHTML = "X";
    } else if(ML) {
        // even number of clicks
        middle_left_value.innerHTML = "O";
    } 
}
function middleLeftPlayOff() {
    if (ML && fakeCount % 2 == 1) {
        // odd number of clicks
        middle_left_value.innerHTML = ""; 
        fakeCount++;
    } else if(ML) {
        // even number of clicks
        middle_left_value.innerHTML = "";
        fakeCount++;
    }
}
function middleLeftPlay() {
    if (ML && count % 2 == 1) {
         middleLeftFake.innerHTML = "X"; 
         count++;
    } else if(ML) {
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
    if (M && count % 2 == 1) {
        // odd number of clicks
        middle_value.innerHTML = "X";
    } else if(M){
        // even number of clicks
        middle_value.innerHTML = "O";
    } 
}
function middlePlayOff() {
    if (M && fakeCount % 2 == 1) {
        // odd number of clicks
        middle_value.innerHTML = ""; 
        fakeCount++;
    } else if(M) {
        // even number of clicks
        middle_value.innerHTML = "";
        fakeCount++;
    }
}
function middlePlay() {
    if (M && count % 2 == 1) {
         middleFake.innerHTML = "X"; 
         count++;
    } else if(M) {
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
    if (MR && fakeCount % 2 == 1) {
        middle_right_value.innerHTML = ""; 
        fakeCount++;
    } else if(MR) {
        middle_right_value.innerHTML = "";
        fakeCount++;
    }
}
function middleRightHover() {
    if (MR && count % 2 == 1) {
        // odd number of clicks
        middle_right_value.innerHTML = "X";
    } else if(MR) {
        // even number of clicks
        middle_right_value.innerHTML = "O";
    } 
}
function middleRightPlay() {
    if (MR && count % 2 == 1) {
        // odd number of clicks
         middleRightFake.innerHTML = "X"; 
         count++;
    } else if(MR) {
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
    if (BL && fakeCount % 2 == 1) {
        // odd number of clicks
        bottom_left_value.innerHTML = ""; 
        fakeCount++;
    } else if(BL) {
        // even number of clicks
        bottom_left_value.innerHTML = "";
        fakeCount++;
    }
}
function bottomLeftHover() {
    if (BL && count % 2 == 1) {
        bottom_left_value.innerHTML = "X";
    } else if(BL) {
        bottom_left_value.innerHTML = "O";
    } 
}
function bottomLeftPlay() {
    if (BL && count % 2 == 1) {        
        // odd number of clicks
        bottomLeftFake.innerHTML = "X"; 
        count++;
    } else if(BL) {
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
    if (BM && fakeCount % 2 == 1) {
        // odd number of clicks
        bottom_middle_value.innerHTML = ""; 
        fakeCount++;
    } else if(BM) {
        // even number of clicks
        bottom_middle_value.innerHTML = "";
        fakeCount++;
    }
}
function bottomMiddleHover() {
    if (BM && count % 2 == 1) {
        bottom_middle_value.innerHTML = "X";
    } else if(BM) {
        bottom_middle_value.innerHTML = "O";
    } 
}
function bottomMiddlePlay() {
    if (BM && count % 2 == 1) {        
        // odd number of clicks
        bottomMiddleFake.innerHTML = "X"; 
        count++;
    } else if(BM) {
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
    if (BR && fakeCount % 2 == 1) {
        // odd number of clicks
        bottom_right_value.innerHTML = ""; 
        fakeCount++;
    } else if(BR) {
        // even number of clicks
        bottom_right_value.innerHTML = "";
        fakeCount++;
    }
}
function bottomRightHover() {
    if (BR && count % 2 == 1) {
        // odd number of clicks
        bottom_right_value.innerHTML = "X";
    } else if(BR) {
        // even number of clicks
        bottom_right_value.innerHTML = "O";
    } 
}
function bottomRightPlay() {
    if (BR && count % 2 == 1) {
        bottomRightFake.innerHTML = "X"; 
        count++;
    } else if(BR) {
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
        winner.innerHTML = "Player 1 Wins!";
    }
    else if(topLeftFake.innerHTML == "X" && middleLeftFake.innerHTML == "X" && bottomLeftFake.innerHTML == "X") {
        winner.innerHTML = "Player 1 Wins!";
    }
    else if(topLeftFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        winner.innerHTML = "Player 1 Wins!";
    }
    else if(middleLeftFake.innerHTML == "X" && middleFake.innerHTML == "X" && middleRightFake.innerHTML == "X") {
        winner.innerHTML = "Player 1 Wins!";
    }
    else if(bottomLeftFake.innerHTML == "X" && bottomMiddleFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        winner.innerHTML = "Player 1 Wins!";
    }
    else if(topMiddleFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomMiddleFake.innerHTML == "X") {
        winner.innerHTML = "Player 1 Wins!";  
    }
    else if(topRightFake.innerHTML == "X" && middleRightFake.innerHTML == "X" && bottomRightFake.innerHTML == "X") {
        winner.innerHTML = "Player 1 Wins!";
    }
    else if(topRightFake.innerHTML == "X" && middleFake.innerHTML == "X" && bottomLeftFake.innerHTML == "X") {
        winner.innerHTML = "Player 1 Wins!";
    }
    // Player 2 win
    else if(topLeftFake.innerHTML == "O" && topMiddleFake.innerHTML == "O" && topRightFake.innerHTML == "O" ) {
        winner.innerHTML = "Player 2 Wins!";
    }
    else if(topLeftFake.innerHTML == "O" && middleLeftFake.innerHTML == "O" && bottomLeftFake.innerHTML == "O") {
        winner.innerHTML = "Player 2 Wins!";
    }
    else if(topLeftFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        winner.innerHTML = "Player 2 Wins!";
    }
    else if(middleLeftFake.innerHTML == "O" && middleFake.innerHTML == "O" && middleRightFake.innerHTML == "O") {
        winner.innerHTML = "Player 2 Wins!";
    }
    else if(bottomLeftFake.innerHTML == "O" && bottomMiddleFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        winner.innerHTML = "Player 2 Wins!";
    }
    else if(topMiddleFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomMiddleFake.innerHTML == "O") {
        winner.innerHTML = "Player 2 Wins!";  
    }
    else if(topRightFake.innerHTML == "O" && middleRightFake.innerHTML == "O" && bottomRightFake.innerHTML == "O") {
        winner.innerHTML = "Player 2 Wins!";
    }
    else if(topRightFake.innerHTML == "O" && middleFake.innerHTML == "O" && bottomLeftFake.innerHTML == "O") {
        winner.innerHTML = "Player 2 Wins!";
    }
}

