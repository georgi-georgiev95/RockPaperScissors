function rockPaperScissors() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function getComputerMove() {
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
    return computerMove;
  }

  function playRound() {
    let computerMove = getComputerMove();

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    readline.question(
      "Make your move! (Choose R - rock, P - paper, S - scissors): ",
      (string) => {
        let playerTurn = string.toLowerCase();
        if (playerTurn === "r" || playerTurn === "rock") {
          playerTurn = rock;
          getResult(playerTurn, computerMove);
        } else if (playerTurn === "p" || playerTurn === "paper") {
          playerTurn = paper;
          getResult(playerTurn, computerMove);
        } else if (playerTurn === "s" || playerTurn === "scissors") {
          playerTurn = scissors;
          getResult(playerTurn, computerMove);
        } else {
          console.log("Invalid Input. Try Again...");
          playRound();
        }
      }
    );
  }

  function getResult(playerTurn, computerMove) {
    if (playerTurn === computerMove) {
      console.log(`You chose ${playerTurn}.`);
      console.log(`The computer chose ${computerMove} too!`);
      console.log("It's a draw!");
    } else if (
      (playerTurn === "Rock" && computerMove === "Scissors") ||
      (playerTurn === "Paper" && computerMove === "Rock") ||
      (playerTurn === "Scissors" && computerMove === "Paper")
    ) {
      console.log(`You chose ${playerTurn}.`);
      console.log(`The computer chose ${computerMove}.`);
      console.log("Congratulations! You win!");
    } else {
      console.log(`You chose ${playerTurn}.`);
      console.log(`The computer chose ${computerMove}.`);
      console.log("Unfortunately the computer wins!");
    }

    console.log("See you next time!");
    playRound();
  }

  playRound();
}
rockPaperScissors();
