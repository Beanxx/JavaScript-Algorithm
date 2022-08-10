// [구현] 보드 게임.js
// 2022.08.10(Wed)

function boardGame(board, operation) {
  // 위아래로 움직일 때의 숫자
  let UD = 0;
  // 좌우로 움직일 때의 숫자
  let RL = 0;

  let count = 0;

  for (let i = 0; i < operation.length; i++) {
    // 위로 움직일 때 예시처럼 위로 움직이는 경우는 좌표 상으로는 아래로 가는 구조이므로 UD--
    if (operation[i] === "U") {
      UD--;
    } else if (operation[i] === "D") {
      // 아래로 움직일 때
      UD++;
    } else if (operation[i] === "R") {
      // 오른쪽으로 움직일 때
      RL++;
    } else if (operation[i] === "L") {
      // 왼쪽으로 움직일 때
      RL--;
    }

    // 좌표를 이탈하는 경우
    if (UD < 0 || RL < 0 || UD > operation.length || RL > operation.length) {
      return "OUT";
    }
    count += board[UD][RL]; // 좌표에 해당하는 값을 count에 저장
  }
  return count;
}

console.log(
  boardGame(
    [
      [0, 0, 0, 1],
      [1, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    "RRDLLD"
  )
); // 4

console.log(
  boardGame(
    [
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 0],
    ],
    "UUUDD"
  )
); // OUT

console.log(
  boardGame(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0],
    ],
    "DDRRRUDUDUD"
  )
); // 0
