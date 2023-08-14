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
function topLeftPlayOff() {
    if (fakeCount % 2 == 1) {
        // odd number of clicks
        top_left_value.innerHTML = ""; 
        fakeCount++;
    } else {
        // even number of clicks
        top_left_value.innerHTML = "";
        fakeCount++;
    }
}
function topLeftHover() {
    if (count % 2 == 1) {
        // odd number of clicks
         top_left_value.innerHTML = "X";
    } else {
        // even number of clicks
        top_left_value.innerHTML = "O";
    } 
}
function topLeftPlay() {
    if (count % 2 == 1) {
        // odd number of clicks
        topLeftFake.innerHTML = "X";
         count++;
    } else {
        // even number of clicks
        top_left_value.innerHTML = "O";
        count++;
    }
}
function topMiddlePlayOff() {
    if (fakeCount % 2 == 1) {
        // odd number of clicks
        top_middle_value.innerHTML = ""; 
        fakeCount++;
    } else {
        // even number of clicks
        top_middle_value.innerHTML = "";
        fakeCount++;
    }
}
function topMiddleHover() {
    if (count % 2 == 1) {
        // odd number of clicks
         top_middle_value.innerHTML = "X";
    } else {
        // even number of clicks
        top_middle_value.innerHTML = "O";
    } 
}
function topMiddlePlay() {
    if (count % 2 == 1) {
         topMiddleFake.innerHTML = "X"; 
         count++;
    } else {
        topMiddleFake.innerHTML = "O"; 
        count++;
    } 
}
function topRightPlayOff() {
    if (fakeCount % 2 == 1) {
        // odd number of clicks
        top_right_value.innerHTML = ""; 
        fakeCount++;
    } else {
        // even number of clicks
        top_right_value.innerHTML = "";
        fakeCount++;
    }
}
function topRightHover() {
    if (count % 2 == 1) {
        // odd number of clicks
         top_right_value.innerHTML = "X";
    } else {
        // even number of clicks
        top_right_value.innerHTML = "O";
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
function middleLeftHover() {
    if (count % 2 == 1) {
        // odd number of clicks
        middle_left_value.innerHTML = "X";
    } else {
        // even number of clicks
        middle_left_value.innerHTML = "O";
    } 
}
function middleLeftPlay() {
    if (count % 2 == 1) {
         middleLeftFake.innerHTML = "X"; 
         count++;
    } else {
        middleFake.innerHTML = "O"; 
        count++;
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
function middleHover() {
    if (count % 2 == 1) {
        // odd number of clicks
        middle_value.innerHTML = "X";
    } else {
        // even number of clicks
        middle_value.innerHTML = "O";
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
}
function middleRightPlayOff() {
    if (fakeCount % 2 == 1) {
        // odd number of clicks
        middle_right_value.innerHTML = ""; 
        fakeCount++;
    } else {
        // even number of clicks
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
         middleRightFake.innerHTML = "X"; 
         count++;e
    } else {
        middleRightFake.innerHTML = "O"; 
        count++;
    } 
}
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
        // odd number of clicks
        bottom_left_value.innerHTML = "X";
    } else {
        // even number of clicks
        bottom_left_value.innerHTML = "O";
    } 
}
function bottomLeftPlay() {
    if (count % 2 == 1) {
        bottomLeftFake.innerHTML = "X"; 
        count++;
    } else {
        bottomLeftFake.innerHTML = "O"; 
        count++;
    } 
}
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
        // odd number of clicks
        bottom_middle_value.innerHTML = "X";
    } else {
        // even number of clicks
        bottom_middle_value.innerHTML = "O";
    } 
}
function bottomMiddlePlay() {
    if (count % 2 == 1) {
        bottomMiddleFake.innerHTML = "X"; 
        count++;
    } else {
        bottomMiddleFake.innerHTML = "O"; 
        count++;
    } 
}
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
        count++;
    } else {
        bottomRightFake.innerHTML = "O"; 
        count++;
    } 
}
/*
if(top_left_value.innerHTML == "&#10060" && top_middle_value.innerHTML == "&#10060" && top_right_value.innerHTML == "&#10060" ) {
    winner.innerHTML = "Player 1 Wins!";
}
*/