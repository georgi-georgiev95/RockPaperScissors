## Rock Paper Scissors

This program allows you to play the classic game of Rock Paper Scissors against the computer. Each round, you can choose your move (rock, paper, or scissors) by entering the corresponding letter or the full name. The computer will randomly select its move, and the winner of the round will be determined based on the game's rules.

## Installation

Ensure that you have Node.js installed on your machine.
Create a new directory for your project and navigate to it using the command line.
Create a new JavaScript file (e.g., rockPaperScissors.js) and open it in a text editor.
Copy and paste the code of the rockPaperScissors function into the JavaScript file.

## Usage

1.Open a terminal or command prompt and navigate to the directory where you saved the JavaScript file.

2.Run the following command to execute the program:

node rockPaperScissors.js

3.The program will prompt you to make your move by entering either the letter or the full name of your choice (R for rock, P for paper, or S for scissors).

4.After you make your move, the program will display the computer's move and announce the winner of the round.

5.The program will continue to prompt you for new moves and display the results until you manually terminate it.

## Code Explanation

The rockPaperScissors function implements the game logic for Rock Paper Scissors.

The getComputerMove function generates a random move for the computer by generating a random number between 1 and 3 and mapping it to "Rock," "Paper," or "Scissors" using a switch statement.
The playRound function prompts the user to enter their move and converts it to lowercase for case-insensitive matching.
The user's move is compared with the computer's move using conditional statements.
The getResult function determines the outcome of the round based on the game rules and announces the result.
After each round, the program prompts for a new move and repeats the process until terminated.
