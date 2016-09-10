const makeBoard = (n) => {
  const board = [];

  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }

  board.togglePiece = (i, j) => {
    this[i][j] = !this[i][j];
  };

  board.hasBeenVisited = (i, j) => !!this[i][j];

  return board;
};

const robotPaths = (n, board = makeBoard(n), row = 0, col = 0) => {
  let solution = 0;

  if (row > -1 && col > -1 && row < n && col < n && !board.hasBeenVisited(row, col)) {
    if (row === n - 1 && col === n - 1) {
      return 1;
    }

    board.togglePiece(row, col);

    solution += robotPaths(n, board, row - 1, col);
    solution += robotPaths(n, board, row + 1, col);
    solution += robotPaths(n, board, row, col - 1);
    solution += robotPaths(n, board, row, col + 1);

    board.togglePiece(row, col);
  }

  return solution;
};


/*
Robot Paths
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner.
The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many
possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:
n (required) - amount of rows/columns (max 6)


n:
1 -> 1
n:
2 -> 2
n:
3 -> 12
*/
