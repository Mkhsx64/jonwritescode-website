//source of rock paper scissors game

var playerScore = 0;
var aiScore = 0;
var tieGame = 0;
var gameArray = ['rock', 'paper', 'scissors'];
var run_count = 0;

//updates stats element
function updateStats() {
  var elStats = document.getElementById('Stats');
  elStats.innerHTML = "Player: " + playerScore + "; AI: " + aiScore + "; Tie: " + tieGame;
  return;
}

//main game logic
function gameStart(clicked_ID) {
  var aiChoice = Math.floor(Math.random() * Math.floor(3));
  var object = gameArray[aiChoice];
  var resultEl = document.getElementById('Results');
  var statEl = document.getElementById('Stats');
  switch (clicked_ID) {
    case gameArray[clicked_ID] == object:
      resultEl.innerHTML = "It's a Tie!";
      tieGame++;
      updateStats();
      console.log(gameArray[clicked_ID] + '& ' + object);
    break;
    case '0':
      if (object == 'scissors') {
        resultEl.innerHTML = "Rock beats Scissors. You Won!";
        playerScore++;
        updateStats();
      } else if (object == 'paper') {
        resultEl.innerHTML = "Rock loses to Paper. You Lost!";
        aiScore++;
        updateStats();
      }
      break;
    case '1':
      if (object == 'rock') {
        resultEl.innerHTML = "Paper beats Rock. You Won!";
        playerScore++;
        updateStats();
      } else if (object == 'scissors') {
        resultEl.innerHTML = "Paper loses to Scissors. You Lost!";
        aiScore++;
        updateStats();
      }
      break;
    case '2':
      if (object == 'scissors') {
        resultEl.innerHTML = "Scissors beats Paper. You Won!";
        playerScore++;
        updateStats();
      } else if (object == 'rock') {
        resultEl.innerHTML = "Scissors loses to Rock. You Lost!";
        aiScore++;
        updateStats();
      }
      break;
  }
}
