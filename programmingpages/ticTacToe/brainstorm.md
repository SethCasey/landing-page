TODO: Display current player's turn
	- Default start is 'PlayerOne'

TODO: Add responsiveness to game board 
	- click should update square with player's symbol
	- If square is occupied, click can not change
	- Click event should change to next player's turn

TODO: Add reset button to page to clear game board, reset player turn

TODO: Allow players to add custom names

TODO: Allow custom colors for player symbols
	- Allow custom symbols within reason?

## Organization
#### Gameboard
Contains default layout
Contains array for completed moves
	- should check for '3 in a row'
		-diagonal, straight up/down, left/right
	- should check for tie/draw
		-all squares filled, above has not triggered

#### displayUpdate
Should include following methods:
	- fill and update tic tac toe board
	- updating player turn
	- clear board



