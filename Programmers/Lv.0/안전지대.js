// 2022.10.27(Thurs)

function solution(board) {
  // board 자리를 일단 모두 0으로 가정하고 1이 등장하거나 위험 지역인 경우 reuslt에서 안전지역 하나씩 빼주기
  let result = board[0].length ** 2;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        result--;
      } else if (board[i - 1] !== undefined && board[i - 1][j] === 1) {
        // board[i][j]가 맨 위쪽 줄에 위치하지 않는 경우
        result--;
      } else if (board[i - 1] !== undefined && board[i - 1][j - 1] === 1) {
        result--;
      } else if (board[i - 1] !== undefined && board[i - 1][j + 1] === 1) {
        result--;
      } else if (board[i + 1] !== undefined && board[i + 1][j] === 1) {
        // board[i][j]가 맨 아래쪽 줄에 위치하지 않는 경우
        result--;
      } else if (board[i + 1] !== undefined && board[i + 1][j - 1] === 1) {
        result--;
      } else if (board[i + 1] !== undefined && board[i + 1][j + 1] === 1) {
        result--;
      } else if (board[i][j - 1] !== undefined && board[i][j - 1] === 1) {
        // board[i][j]가 맨 왼쪽 줄에 위치하지 않는 경우
        result--;
      } else if (board[i][j + 1] !== undefined && board[i][j + 1] === 1) {
        // board[i][j]가 맨 오른쪽 줄에 위치하지 않는 경우
        result--;
      }
    }
  }
  return result;
}

// 넘 어렵쓰,, Lv0도 어려워서 어뜨카냐 🥲
