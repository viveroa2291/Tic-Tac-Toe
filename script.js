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
var top_middle_value = document.getElementById("top-middle-value");
var top_right_value = document.getElementById("top-right-value");

var middle_left_value = document.getElementById("middle-left-value");
var middle_value = document.getElementById("middle-value");
var middle_right_value = document.getElementById("middle-right-value");

var bottom_left_value = document.getElementById("bottom-left-value");
var bottom_middle_value = document.getElementById("bottom-middle-value");
var bottom_right_value = document.getElementById("bottom-right-value");

var winner = document.getElementById("winner");

let count = 1;

function topLeftPlay() {
    if (count % 2 == 1) {
        // odd number of clicks
         top_left_value.innerHTML = "&#10060";
         count++;
    } else {
        // even number of clicks
        top_left_value.innerHTML = "O";
        count++;
    }
}
function topMiddlePlay() {
    if (count % 2 == 1) {
         top_middle_value.innerHTML = "&#10060"; 
         count++;
    } else {
        top_middle_value.innerHTML = "O"; 
        count++;
    } 
}
function topRightPlay() {
    if (count % 2 == 1) {
         top_right_value.innerHTML = "&#10060"; 
         count++;
    } else {
        top_right_value.innerHTML = "O"; 
        count++;
    } 
}
function middleLeftPlay() {
    if (count % 2 == 1) {
         middle_left_value.innerHTML = "&#10060"; 
         count++;
    } else {
        middle_left_value.innerHTML = "O"; 
        count++;
    } 
}
function middlePlay() {
    if (count % 2 == 1) {
         middle_value.innerHTML = "&#10060"; 
         count++;
    } else {
        middle_value.innerHTML = "O"; 
        count++;
    } 
}
function middleRightPlay() {
    if (count % 2 == 1) {
         middle_right_value.innerHTML = "&#10060"; 
         count++;e
    } else {
        middle_right_value.innerHTML = "O"; 
        count++;
    } 
}
function bottomLeftPlay() {
    if (count % 2 == 1) {
        bottom_left_value.innerHTML = "&#10060"; 
        count++;
    } else {
        bottom_left_value.innerHTML = "O"; 
        count++;
    } 
}
function bottomMiddlePlay() {
    if (count % 2 == 1) {
        bottom_middle_value.innerHTML = "&#10060"; 
        count++;
    } else {
        bottom_middle_value.innerHTML = "O"; 
        count++;
    } 
}
function bottomRightPlay() {
    if (count % 2 == 1) {
        bottom_right_value.innerHTML = "&#10060"; 
        count++;
    } else {
        bottom_right_value.innerHTML = "O"; 
        count++;
    } 
}
/*
if(top_left_value.innerHTML == "&#10060" && top_middle_value.innerHTML == "&#10060" && top_right_value.innerHTML == "&#10060" ) {
    winner.innerHTML = "Player 1 Wins!";
}
*/