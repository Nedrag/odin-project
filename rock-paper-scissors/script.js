let gameOver = false;
let playerWins = 0;
let computerWins = 0;
function getComputerChoice() {
	//Returns a random number between 0 and 2
	let n = Math.floor(Math.random() * 3);
	if (n == 0) {
		return "ROCK";
	}
	if (n == 1) {
		return "PAPER";
	}
	if (n == 2) {
		return "SCISSORS";
	}
	return "ERROR";
}
const compSign = document.getElementById("pick2");
const playerSign = document.getElementById("pick1");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerRes = document.getElementById("p1");
const compRes = document.getElementById("p2");

rock.addEventListener("click", () => handleClick("ROCK"));
paper.addEventListener("click", () => handleClick("PAPER"));
scissors.addEventListener("click", () => handleClick("SCISSORS"));

function handleClick(playerSelection) {
	computerSelection = getComputerChoice();

	if (gameOver) {
		console.log("over");
		return;
	}
	if (playerSelection === computerSelection) {
		console.log("Draw");
		return true;
	}
	if (
		(playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
		(playerSelection === "PAPER" && computerSelection === "ROCK") ||
		(playerSelection === "SCISSORS" && computerSelection === "PAPER")
	) {
		console.log(
			"You Won!" + playerSelection + " beats" + computerSelection
		);
		playerWins += 1;
	}
	if (
		(playerSelection === "ROCK" && computerSelection === "PAPER") ||
		(playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
		(playerSelection === "SCISSORS" && computerSelection === "ROCK")
	) {
		console.log(
			"You Lost!" + computerSelection + " beats" + playerSelection
		);
		computerWins += 1;
	}
	updateChoice(playerSelection, computerSelection);
}

function updateChoice(playerSelection, computerSelection) {
	switch (playerSelection) {
		case "ROCK":
			playerSign.textContent = "✊";
			break;
		case "PAPER":
			playerSign.textContent = "✋";
			break;
		case "SCISSORS":
			playerSign.textContent = "✌";
			break;
	}
	switch (computerSelection) {
		case "ROCK":
			compSign.textContent = "✊";
			break;
		case "PAPER":
			compSign.textContent = "✋";
			break;
		case "SCISSORS":
			compSign.textContent = "✌";
			break;
	}
	playerRes.textContent = playerWins;
	compRes.textContent = computerWins;
}
