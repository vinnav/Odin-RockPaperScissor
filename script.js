// Game Logic

// starting score
let playerScore = 0;
let computerScore = 0;
let scoreText = document.getElementById("scoreText");
let singleHand = document.getElementById("singleHand");
let rRock = document.getElementById("rRock");
let rPaper = document.getElementById("rPaper");
let rScissor = document.getElementById("rScissor");
let lRock = document.getElementById("rock");
let lPaper = document.getElementById("paper");
let lScissor = document.getElementById("scissor");

//make other r Hands

//computer Plays
function computerPlay() {        //return randomly rock, paper or scissor
    let choice = Math.floor(Math.random() * (3));
    if (choice == 0) {
        rRock.classList.add("tRHand");
        return 0; //rock
    } else if (choice == 1) {
        rPaper.classList.add("tRHand");
        return 1; // paper
    } else {
        rScissor.classList.add("tRHand");
        return 2; //scissor
    }
}

function resetHands()
{
    rRock.classList.remove("tRHand");
    rPaper.classList.remove("tRHand");
    rScissor.classList.remove("tRHand");
    lRock.classList.remove("tLHand");
    lPaper.classList.remove("tLHand");
    lScissor.classList.remove("tLHand");
}

//Player Plays choosing with prompt
/*
function playerPlay(){
   let choice = window.prompt("Choose rock, paper or scissor:");
   choice = choice.toLowerCase();
   if (choice == "rock"){
        return 0; //rock
    } else if (choice == "paper"){
        return 1; // paper
    } else if (choice == "scissor"){
        return 2; //scissor
    } else {
        return 3; //invalid selection
    }

}
*/

//single round of play
// number number -> string
function playRound(playerSelection, computerSelection) { //take player and computer choice and declares winner
    if (playerSelection == computerSelection) { // same choice
        return "draw";
    } else if (playerSelection == 0 && computerSelection == 1) { // player rock, pc paper
        return "lose";
    } else if (playerSelection == 0 && computerSelection == 2) { // player rock, pc scissor
        return "win";
    } else if (playerSelection == 1 && computerSelection == 0) { // player paper, pc rock
        return "win";
    } else if (playerSelection == 1 && computerSelection == 2) { // player paper, pc scissor
        return "lose";
    } else if (playerSelection == 2 && computerSelection == 0) { // player scissor, pc rock
        return "lose";
    } else if (playerSelection == 2 && computerSelection == 1) { // player scissor, pc paper
        return "win";
    } else {
        return "invalid";
    }
}


//the main game function
function game(choice) {
    if(playerScore==5){

        alert("YOU WON!");
        location.reload(true);
    } else if(computerScore==5){

        alert("YOU LOST!");
        location.reload(true);
        }

    resetHands();

    //for(var i = 0; i < 5; i++){ //play 5 rounds
    let playerSelection = choice;
    let computerSelection = computerPlay();

    if (playRound(playerSelection, computerSelection) == "draw") {
        singleHand.innerHTML = "It's a draw!"
    } else if (playRound(playerSelection, computerSelection) == "win") {
        singleHand.innerHTML = "You Win!"
        playerScore++;
    } else if (playRound(playerSelection, computerSelection) == "lose") {
        computerScore++;
        singleHand.innerHTML = "You Lose!"
    }
    scoreText.innerHTML = ("You: " + playerScore + " Computer: " + computerScore);
}

let rButton = document.getElementById("rButton");
let pButton = document.getElementById("pButton");
let sButton = document.getElementById("sButton");

rButton.addEventListener("click", rButtonClick);
pButton.addEventListener("click", pButtonClick);
sButton.addEventListener("click", sButtonClick);

function rButtonClick() {
    game(0);
    lRock.classList.add("tLHand");
}
function pButtonClick() {
    game(1);
    lPaper.classList.add("tLHand");
}
function sButtonClick() {
    game(2);
    lScissor.classList.add("tLHand");
}
