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
function topLeftHover() {
    if (count % 2 == 1) {
         top_left_value.innerHTML = "X";
    } else {
        top_left_value.innerHTML = "O";
    } 
}
// When the top left box is not hovered anymore function
function topLeftPlayOff() {
    if (fakeCount % 2 == 1) {
        top_left_value.innerHTML = ""; 
        fakeCount++;
    } else {
        top_left_value.innerHTML = "";
        fakeCount++;
    }
}
// When the top left box is clicked function
function topLeftPlay() {
    if (count % 2 == 1) {
        // odd number of clicks
        topLeftFake.innerHTML = "X";
        count++;
    } else {
        // even number of clicks
        topLeftFake.innerHTML = "O";
        count++;
    }
    checkForWin();
}
/* 
    Top Left Box End 
*/
/* 
    Beginning of Top Middle 
*/
function topMiddleHover() {
    if (count % 2 == 1) {
         top_middle_value.innerHTML = "X";
    } else {
        top_middle_value.innerHTML = "O";
    } 
}
function topMiddlePlayOff() {
    if (fakeCount % 2 == 1) {
        top_middle_value.innerHTML = ""; 
        fakeCount++;
    } else {
        top_middle_value.innerHTML = "";
        fakeCount++;
    }
}
function topMiddlePlay() {
    if (count % 2 == 1) { 
        // odd number of clicks
         topMiddleFake.innerHTML = "X"; 
         count++;
    } else {
        // even number of clicks
        topMiddleFake.innerHTML = "O"; 
        count++;
    }
    checkForWin(); 
}
/* 
    Top Middle End
*/
/* 
    Beginning of Top Right
*/
function topRightHover() {
    if (count % 2 == 1) {
         top_right_value.innerHTML = "X";
    } else {
        top_right_value.innerHTML = "O";
    } 
}
function topRightPlayOff() {
    if (fakeCount % 2 == 1) {
        top_right_value.innerHTML = ""; 
        fakeCount++;
    } else {
        top_right_value.innerHTML = "";
        fakeCount++;
    }
}
function topRightPlay() {
    if (count % 2 == 1) {
         topRightFake.innerHTML = "X"; 
         count++;
    } else {
        topRightFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
}
/*
    Top Right End
*/
/* 
    Beginning Middle Left
*/
function middleLeftHover() {
    if (count % 2 == 1) {
        // odd number of clicks
        middle_left_value.innerHTML = "X";
    } else {
        // even number of clicks
        middle_left_value.innerHTML = "O";
    } 
}
function middleLeftPlayOff() {
    if (fakeCount % 2 == 1) {
        // odd number of clicks
        middle_left_value.innerHTML = ""; 
        fakeCount++;
    } else {
        // even number of clicks
        middle_left_value.innerHTML = "";
        fakeCount++;
    }
}
function middleLeftPlay() {
    if (count % 2 == 1) {
         middleLeftFake.innerHTML = "X"; 
         count++;
    } else {
        middleLeftFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
}
/* 
    End of Middle Left 
*/
/* 
    Beginning of the Middle
*/
function middleHover() {
    if (count % 2 == 1) {
        // odd number of clicks
        middle_value.innerHTML = "X";
    } else {
        // even number of clicks
        middle_value.innerHTML = "O";
    } 
}
function middlePlayOff() {
    if (fakeCount % 2 == 1) {
        // odd number of clicks
        middle_value.innerHTML = ""; 
        fakeCount++;
    } else {
        // even number of clicks
        middle_value.innerHTML = "";
        fakeCount++;
    }
}
function middlePlay() {
    if (count % 2 == 1) {
         middleFake.innerHTML = "X"; 
         count++;
    } else {
        middleFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
}
/*
    End of the Middle
*/
/* 
    Beginning of the Middle Right
*/  
function middleRightPlayOff() {
    if (fakeCount % 2 == 1) {
        middle_right_value.innerHTML = ""; 
        fakeCount++;
    } else {
        middle_right_value.innerHTML = "";
        fakeCount++;
    }
}
function middleRightHover() {
    if (count % 2 == 1) {
        // odd number of clicks
        middle_right_value.innerHTML = "X";
    } else {
        // even number of clicks
        middle_right_value.innerHTML = "O";
    } 
}
function middleRightPlay() {
    if (count % 2 == 1) {
        // odd number of clicks
         middleRightFake.innerHTML = "X"; 
         count++;
    } else {
        // even number of clicks
        middleRightFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
}
/*
    End of Middle Right
*/
/*
    Beginning of the Bottom Left
*/
function bottomLeftPlayOff() {
    if (fakeCount % 2 == 1) {
        // odd number of clicks
        bottom_left_value.innerHTML = ""; 
        fakeCount++;
    } else {
        // even number of clicks
        bottom_left_value.innerHTML = "";
        fakeCount++;
    }
}
function bottomLeftHover() {
    if (count % 2 == 1) {
        bottom_left_value.innerHTML = "X";
    } else {
        bottom_left_value.innerHTML = "O";
    } 
}
function bottomLeftPlay() {
    if (count % 2 == 1) {        
        // odd number of clicks
        bottomLeftFake.innerHTML = "X"; 
        count++;
    } else {
        // even number of clicks
        bottomLeftFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
}
/* 
    End of Bottom Left
*/
/* 
    Beginning of the Bottom Middle
*/
function bottomMiddlePlayOff() {
    if (fakeCount % 2 == 1) {
        // odd number of clicks
        bottom_middle_value.innerHTML = ""; 
        fakeCount++;
    } else {
        // even number of clicks
        bottom_middle_value.innerHTML = "";
        fakeCount++;
    }
}
function bottomMiddleHover() {
    if (count % 2 == 1) {
        bottom_middle_value.innerHTML = "X";
    } else {
        bottom_middle_value.innerHTML = "O";
    } 
}
function bottomMiddlePlay() {
    if (count % 2 == 1) {        
        // odd number of clicks
        bottomMiddleFake.innerHTML = "X"; 
        count++;
    } else {
        // even number of clicks
        bottomMiddleFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
}
/*
    End of Bottom Middle 
*/
/*
    Beginning of Bottom Right
*/
function bottomRightPlayOff() {
    if (fakeCount % 2 == 1) {
        // odd number of clicks
        bottom_right_value.innerHTML = ""; 
        fakeCount++;
    } else {
        // even number of clicks
        bottom_right_value.innerHTML = "";
        fakeCount++;
    }
}
function bottomRightHover() {
    if (count % 2 == 1) {
        // odd number of clicks
        bottom_right_value.innerHTML = "X";
    } else {
        // even number of clicks
        bottom_right_value.innerHTML = "O";
    } 
}
function bottomRightPlay() {
    if (count % 2 == 1) {
        bottomRightFake.innerHTML = "X"; 
        console.log(bottomRightFake.innerHTML);
        count++;
    } else {
        bottomRightFake.innerHTML = "O"; 
        count++;
    } 
    checkForWin();
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

