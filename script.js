var top_left = document.getElementById("top-left");
var top_middle = document.getElementById("top-middle");
var top_right = document.getElementById("top-right");
var middle_left = document.getElementById("middle-left");
var middle = document.getElementById("middle");
var middle_right = document.getElementById("middle-right");
var bottom_left = document.getElementById("bottom-left");
var bottom_middle = document.getElementById("bottom-middle");
var bottom_right = document.getElementById("bottom-right");

let count = 1;

function topLeftPlay() {
    if (count % 2 == 1) {
        // odd number of clicks
         top_left.innerHTML = "&#10060";
         count++;
    } else {
        // even number of clicks
        top_left.innerHTML = "O";
        count++;
    }
}
function topMiddlePlay() {
    if (count % 2 == 1) {
         top_middle.innerHTML = "&#10060"; 
         count++;
    } else {
        top_middle.innerHTML = "O"; 
        count++;
    } 
}
function topRightPlay() {
    if (count % 2 == 1) {
         top_right.innerHTML = "&#10060"; 
         count++;
    } else {
        top_right.innerHTML = "O"; 
        count++;
    } 
}
function middleLeftPlay() {
    if (count % 2 == 1) {
         middle_left.innerHTML = "&#10060"; 
         count++;
    } else {
        middle_left.innerHTML = "O"; 
        count++;
    } 
}
function middlePlay() {
    if (count % 2 == 1) {
         middle.innerHTML = "&#10060"; 
         count++;
    } else {
        middle.innerHTML = "O"; 
        count++;
    } 
}
function middleRightPlay() {
    if (count % 2 == 1) {
         middle_right.innerHTML = "&#10060"; 
         count++;
    } else {
        middle_right.innerHTML = "O"; 
        count++;
    } 
}
function bottomLeftPlay() {
    if (count % 2 == 1) {
        bottom_left.innerHTML = "&#10060"; 
        count++;
    } else {
        bottom_left.innerHTML = "O"; 
        count++;
    } 
}
function bottomMiddlePlay() {
    if (count % 2 == 1) {
        bottom_middle.innerHTML = "&#10060"; 
        count++;
    } else {
        bottom_middle.innerHTML = "O"; 
        count++;
    } 
}
function bottomRightPlay() {
    if (count % 2 == 1) {
        bottom_right.innerHTML = "&#10060"; 
        count++;
    } else {
        bottom_right.innerHTML = "O"; 
        count++;
    } 
}
