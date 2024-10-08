# ultimate-tic-tac-toe

It's a more strategic and complex version of the classic Tic-Tac-Toe game. Here's a comprehensive overview of the rules and gameplay:

Ultimate Tic-Tac-Toe: Rules and Gameplay
Objective:
The goal is to win three small Tic-Tac-Toe boards in a row (horizontally, vertically, or diagonally) on the larger overarching 3x3 grid.

## Game Setup:
Large Board: Consists of 9 smaller Tic-Tac-Toe boards arranged in a 3x3 grid.
Players: Two players take turns, one using "X" and the other "O".
First Move: Player "X" starts the game by placing their mark in any of the 81 cells (any small board, any position within it).
Gameplay Mechanics:
Sending Your Opponent:

When a player places their mark in a cell within a small board, it determines which small board the next player must play in.
Example: If Player "X" places an "X" in the top-right cell of a small board, Player "O" must make their next move in the top-right small board of the large grid.
Occupied or Completed Boards:

If the small board that the next player is sent to is already won by a player or is fully occupied (resulting in a draw), the next player can choose any other small board to place their mark.
Winning a Small Board:

A small board is won by getting three of your marks in a row, column, or diagonal within that board, just like in classic Tic-Tac-Toe.
Once a small board is won, it's marked as won by that player, and no further moves can be made in that board.
Winning the Large Board:

The first player to win three small boards in a row (horizontally, vertically, or diagonally) on the large board wins the game.
If all small boards are completed and no player has three in a row on the large board, the game is a draw.
## Detailed Example:
Player "X" starts by placing an "X" in any cell, say the center cell of the center small board.
This sends Player "O" to play in the center small board.
Player "O" places an "O" in the top-left cell of the center small board.
This sends Player "X" to play in the top-left small board.
The game continues with players being sent to specific small boards based on their opponent's last move.
## Additional Rules:
Draws in Small Boards: If a small board ends in a draw (all cells filled without a winner), it counts as a neutral board, and the next player can choose any board to play in.
No Reset: Once a small board is won or drawn, it remains in that state for the rest of the game.
Strategic Depth: Players must think several moves ahead, considering not only how to win small boards but also how to control where the opponent can play next.
## Tips for Playing:
Control the Center: Winning the center small board can provide strategic advantages, as it can influence multiple other boards.
Block Opponents: Always be mindful of where your opponent is trying to create a row of three and block them by sending them to boards that are already advantageous for you.
Plan Ahead: Think about how your move will affect your opponent's next move and plan your strategy accordingly.
## Visual Representation:
+-------+-------+-------+
| Board1| Board2| Board3|
|       |       |       |
|       |       |       |
+-------+-------+-------+
| Board4| Board5| Board6|
|       |       |       |
|       |       |       |
+-------+-------+-------+
| Board7| Board8| Board9|
|       |       |       |
|       |       |       |
+-------+-------+-------+
Each Board1 to Board9 represents a smaller Tic-Tac-Toe game within the larger grid.

## Final Notes:
Ultimate Tic-Tac-Toe significantly increases the complexity and strategic depth compared to the classic version. Think multiple steps ahead, manage both offense and defense across different boards, and control the flow of the game by directing their opponent's moves.
