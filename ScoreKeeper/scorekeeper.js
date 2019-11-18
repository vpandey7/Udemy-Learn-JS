var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1DisplayScore = document.querySelector("#p1Display");
var p2DisplayScore = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var inputScore = document.querySelector("#inputscore");
var playing2ScoreDisplay = document.querySelector("#playingtoscore")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 7;

p1Button.addEventListener("click", function () {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1DisplayScore.classList.add("winner");
			gameOver = true;
		}
	}
	p1DisplayScore.textContent = p1Score;
});

p2Button.addEventListener("click", function () {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2DisplayScore.classList.add("winner");
			gameOver = true;
		}
	}
	p2DisplayScore.textContent = p2Score;
});
resetButton.addEventListener("click", function () {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1DisplayScore.textContent = p1Score;
	p2DisplayScore.textContent = p2Score;
	p1DisplayScore.classList.remove("winner");
	p2DisplayScore.classList.remove("winner");
	gameOver = false;
}
inputScore.addEventListener("change", function () {
	playing2ScoreDisplay.textContent = inputScore.value;
	winningScore = Number(inputScore.value);
	reset();

});