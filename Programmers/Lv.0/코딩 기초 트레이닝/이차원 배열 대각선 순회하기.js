// 2024.10.24(Thurs)

// my way
function solution(board, k) {
  let result = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        result += board[i][j];
      }
    }
  }

  return result;
}

// ------------------------------------------------------------------

// other way
function solution(board, k) {
  return board.reduce(
    (total, row, i) =>
      total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
    0
  );
}

// 난 이중 for문 쓸 생각 밖에 없었는데 이중 reduce 사용하는 방법도 있다니,,

console.log(
  solution(
    [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ],
    2
  )
); // 8
