// function createBoard() {
//     for let cells = document.
// }

let gameBoard = document.getElementById('gameBoard');

function createBoard() {
    const board = document.createElement('div');
    board.className = 'board';

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        console.log(i);

        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            row.appendChild(cell);
            console.log(i, j);
        }

        board.appendChild(row);
    }

    document.body.appendChild(board);
}

// Call the function to create the board
createBoard();