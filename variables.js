var ticTacoToeBoard = document.getElementById("tic-tac-toe");

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
var newGameButton = document.getElementById("new-game");
var restartGameButton = document.getElementById("restart-game");
var player1Button = document.getElementById("player-one-button");
var player2Button = document.getElementById("player-two-button");
var playerQuestion = document.getElementById("player-question");
var playerButtonDiv = document.getElementById("player-buttons");

var player1Input = document.getElementById("player-one-input");
var player1Submit = document.getElementById("player-one-submit");

var player2Input = document.getElementById("player-two-input");
var player2Submit = document.getElementById("player-two-submit");

var optionOne = document.getElementById("one-player");
var optionTwo = document.getElementById("two-player");

var scoreboard = document.getElementById("scoreboard");

var numPlayers = document.getElementById("number-of-players");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalNewGameButton = document.getElementById("new-game-modal");
var modalChangeNamesButton = document.getElementById("change-names-modal");
var modalRestartGameButton = document.getElementById("restart-game-modal");