let currentPlayer = 'X';
let gameBoard = document.getElementById('gameBoard');

// Create the game board with 9 small boards, each with 9 cells
function createBoard() {
    for (let i = 0; i < 9; i++) {
        let smallBoard = document.createElement('div');
        smallBoard.classList.add('smallBoard');
        smallBoard.dataset.index = i;  // Track the index of each small board

        for (let j = 0; j < 9; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            smallBoard.appendChild(cell);
        }
        gameBoard.appendChild(smallBoard);
    }
}

createBoard();

// Add event listeners to cells
let cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

let smallBoards = document.querySelectorAll('.smallBoard');

function handleCellClick(event) {
    const cell = event.target;
    const smallBoard = cell.parentNode;

    if (cell.textContent === '' && !smallBoard.classList.contains('won')) {
        cell.textContent = currentPlayer;
        if (checkWin(smallBoard)) {
            smallBoard.classList.add('won');
            checkGameWin();
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        // Determine next small board based on the clicked cell's index
        const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);
        sendToNextBoard(cellIndex);
    }
}

function sendToNextBoard(cellIndex) {
    smallBoards.forEach(board => board.classList.remove('highlighted'));

    if (!smallBoards[cellIndex].classList.contains('won')) {
        smallBoards[cellIndex].classList.add('highlighted');
    } else {
        // If the targeted board is already won, the player can choose any board
        smallBoards.forEach(board => {
            if (!board.classList.contains('won')) {
                board.classList.add('highlighted');
            }
        });
    }
}

function checkWin(board) {
    const cells = board.querySelectorAll('.cell');
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }
    return false;
}

function checkGameWin() {
    const boardStates = Array.from(smallBoards).map(board => board.classList.contains('won') ? board.querySelector('.cell').textContent : null);

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (boardStates[a] && boardStates[a] === boardStates[b] && boardStates[a] === boardStates[c]) {
            alert(`Player ${boardStates[a]} wins the game!`);
            resetGame();
            return;
        }
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    smallBoards.forEach(board => board.classList.remove('won', 'highlighted'));
    currentPlayer = 'X';
    sendToNextBoard(0);  // Start by highlighting the first board again
}

// Start by highlighting the first small board
sendToNextBoard(0);