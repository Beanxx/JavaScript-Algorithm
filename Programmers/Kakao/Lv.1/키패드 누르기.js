// 2022.11.29(Tues)
// 2020 카카오 인턴십
// Lv.1_키패드 누르기.js

function solution(numbers, hand) {
  let answer = "";
  // 키패드 위치를 기준으로 맨아래 가로줄부터 위로 0, 1, 2, 3
  // 키패드 위치를 기준으로 왼쪽부터 오른쪽으로 0, 1, 2
  // 위와 같은 기준으로 각 번호에 대한 2차원 배열 생성 => [가로줄 기준 위치, 세로줄 기준 위치]
  const keypad = {
    1: [3, 0],
    2: [3, 1],
    3: [3, 2],
    4: [2, 0],
    5: [2, 1],
    6: [2, 2],
    7: [1, 0],
    8: [1, 1],
    9: [1, 2],
    "*": [0, 0],
    0: [0, 1],
    "#": [0, 2],
  };
  const leftArr = [1, 4, 7]; // 무조건 왼손으로 눌러야 하는 번호들
  const rightArr = [3, 6, 9]; // 무조건 오른손으로 눌러야 하는 번호들
  let left = "*"; // 현재 왼손가락이 위치하고 있는 번호
  let right = "#"; // 현재 오른손가락이 위치하고 있는 번호

  for (let el of numbers) {
    if (leftArr.includes(el)) {
      // 무조건 왼손으로 눌러야 하는 번호인 경우
      answer += "L";
      left = el;
    } else if (rightArr.includes(el)) {
      // 무조건 오른손으로 눌러야 하는 번호인 경우
      answer += "R";
      right = el;
    } else {
      // 2, 5, 8, 0 중 번호를 누르는 경우

      // leftDistance: 해당 번호 el와 현재 왼손가락이 위치한 번호 사이의 거리
      let leftDistance =
        Math.abs(keypad[el][0] - keypad[left][0]) +
        Math.abs(keypad[el][1] - keypad[left][1]);

      // rightDistance: 해당 번호 el와 현재 오른손가락이 위치한 번호 사이의 거리
      let rightDistance =
        Math.abs(keypad[el][0] - keypad[right][0]) +
        Math.abs(keypad[el][1] - keypad[right][1]);

      if (leftDistance > rightDistance) {
        // 오른손가락의 거리가 더 짧으면 R
        answer += "R";
        right = el;
      } else if (rightDistance > leftDistance) {
        // 왼손가락의 거리가 더 짧으면 L
        answer += "L";
        left = el;
      } else {
        // 왼손, 오른손 거리가 같을 때
        if (hand === "left") {
          // 왼손잡이면 L
          answer += "L";
          left = el;
        } else {
          // 오른손잡이면 R
          answer += "R";
          right = el;
        }
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"

// 가운데 위치한 번호와의 거리로 L, R를 판별하는게 나에겐 꽤 어려웠던 문제,,
