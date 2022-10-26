// 2022.10.26(Wed)

function solution(keyinput, board) {
  let answer = [0, 0];

  for (let el of keyinput) {
    if (el === "up") {
      answer[1] = Math.min(Math.floor(board[1] / 2), answer[1] + 1);
    } else if (el === "down") {
      answer[1] = Math.max(-Math.floor(board[1] / 2), answer[1] - 1);
    } else if (el === "right") {
      answer[0] = Math.min(Math.floor(board[0] / 2), answer[0] + 1);
    } else if (el === "left") {
      answer[0] = Math.max(-Math.floor(board[0] / 2), answer[0] - 1);
    }
  }

  return answer;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); // [2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); // [0, -4]

// board 크기가 [7, 9]인 경우 좌우로 -3~3, 상하로 -4~4 이동이 가능하다.
// 즉, Math.floor(board[0]/2) 이렇게 설정하면 움직일 수 있는 최대 크기 설정이 가능하다.
// 예를 들어 위로 움직이는 경우 answer[1] + 1을 해야하고, 이것이 Math.floor(board[1]/2)와 비교하여 더 작은 것을 반환해야 한다.
// 반대로 아래로 움직이는 경우엔 answer[1] - 1을 해야하고, -Math.floor(board[1]/2)와 비교하여 더 큰 것을 반환해야 한다. (음수이므로 더 큰 것을 반환 -> -5 < -4 -> -4반환!)
