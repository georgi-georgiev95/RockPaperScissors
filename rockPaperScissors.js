function rockPaperScissors(playerTurn) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let computerRandomNumber = Math.floor(Math.random() * 3) + 1; 
  let computerMove = "";
  switch (computerRandomNumber) {
    case 1:
      computerMove = "Rock";
      break;
    case 2:
      computerMove = "Paper";
      break;
    case 3:
      computerMove = "Scissors";
      break;
  }
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";

  let playerMove = function () {
    readline.question(
      "Make your move! (Choose R - rock, P - paper, S - scissors): ",
      string => {
        playerTurn = string.toLowerCase();
        if (playerTurn === "r" || playerTurn === "rock") {
          playerTurn = rock;
          result();
        } else if (playerTurn === "p" || playerTurn === "paper") {
          playerTurn = paper;
          result();
        } else if (playerTurn === "s" || playerTurn === "scissors") {
          playerTurn = scissors;
          result();
        } else {
          console.log('Invalid Input. Try Again...');
          //console.log("Invalid Input. Try Again...");
        }
      }
    );
  };
  playerMove();

  let result = function () {
    if (playerTurn === rock && computerMove === rock) {
      console.log("You chose rock.");
      console.log("The computer chose rock too!");
      console.log("It`s a draw!");
      console.log("See you next time !");
      return readline.close();
    } else if (playerTurn === rock && computerMove === paper) {
      console.log("You chose rock.");
      console.log("Unfortunately the computer chose paper...");
      console.log("Sorry! Computer wins!");
      console.log("See you next time !");
      return readline.close();
    } else if (playerTurn === rock && computerMove === scissors) {
      console.log("You chose rock.");
      console.log("The computer chose scissors.");
      console.log("Congratulations! You win!");
      console.log("See you next time !");
      return readline.close();
    } else if (playerTurn === paper && computerMove === rock) {
      console.log("You chose paper.");
      console.log("The computer chose rock.");
      console.log("Congratulations! You win!");
      console.log("See you next time !");
      return readline.close();
    } else if (playerTurn === paper && computerMove === scissors) {
      console.log("You chose paper.");
      console.log("Unfortunately the computer chose scisors...");
      console.log("Sorry! Computer wins!");
      console.log("See you next time !");
      return readline.close();
    } else if (playerTurn === paper && computerMove === paper) {
      console.log("You chose paper.");
      console.log("The computer chose paper too!");
      console.log("It`s a draw!");
      console.log("See you next time !");
      return readline.close();
    } else if (playerTurn === scissors && computerMove === paper) {
      console.log("You chose scissors.");
      console.log("The computer chose paper.");
      console.log("Congratulations! You win!");
      console.log("See you next time !");
      return readline.close();
    } else if (playerTurn === scissors && computerMove === rock) {
      console.log("You chose scissors.");
      console.log("Unfortunately the computer chose rock...");
      console.log("Sorry! Computer wins!");
      console.log("See you next time !");
      return readline.close();
    } else if (playerTurn === scissors && computerMove === scissors) {
      console.log("You chose scissors.");
      console.log("The computer chose scissors too!");
      console.log("It`s a draw!");
      console.log("See you next time !");
      return readline.close();
    }
  };
}
rockPaperScissors();
