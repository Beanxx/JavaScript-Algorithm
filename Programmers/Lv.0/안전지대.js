// 복습완료💫(221116)
// 2022.10.27(Thurs)

function solution(board) {
  // board 자리를 일단 모두 0으로 가정하고 1이 등장하거나 위험 지역인 경우 reuslt에서 안전지역 하나씩 빼주기
  let result = board[0].length ** 2; // 5 ** 2 = 25

  // 한줄씩 순회
  for (let i = 0; i < board.length; i++) {
    //  [0, 0, 0, 0, 0] 에서 각 원소 순회
    for (let j = 0; j < board[0].length; j++) {
      // falsy값인 0이 아닌 1일 경우
      if (board[i][j]) result--;
      // board[i]가 맨 위쪽 줄이 아닌 경우(falsy값이 아닐 때) && 해당 위치의 바로 위에 1이 존재할 경우
      else if (board[i - 1] && board[i - 1][j] === 1) result--;
      // ... && 해당 위치의 위에서 왼쪽으로 한칸 옆이 1일 경우
      else if (board[i - 1] && board[i - 1][j - 1] === 1) result--;
      // ... && 해당 위치의 위에서 오른쪽으로 한칸 옆이 1일 경우
      else if (board[i - 1] && board[i - 1][j + 1] === 1) result--;
      // board[i]가 맨 아래쪽 줄에 위치하지 않는 경우 && 해당 위치의 바로 아래 위치에 1이 존재할 경우
      else if (board[i + 1] && board[i + 1][j] === 1) result--;
      // ... && 해당 위치의 아래에서 왼쪽으로 한칸 옆이 1일 경우
      else if (board[i + 1] && board[i + 1][j - 1] === 1) result--;
      // ... && 해당 위치의 아래에서 오른쪽으로 한칸 옆이 1일 경우
      else if (board[i + 1] && board[i + 1][j + 1] === 1) result--;
      // board[i][j]가 맨 왼쪽 줄에 위치하지 않는 경우 && 해당 위치의 왼쪽이 1인 경우
      else if (board[i][j - 1] && board[i][j - 1] === 1) result--;
      // board[i][j]가 맨 오른쪽 줄에 위치하지 않는 경우 && 해당 위치의 오른쪽이 1인 경우
      else if (board[i][j + 1] && board[i][j + 1] === 1) result--;
    }
  }
  return result;
}

// 경우의 수 하나하나 다 생각해야 하는게 넘 어려웠다,,

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 16
