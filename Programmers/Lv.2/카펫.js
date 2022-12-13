// // 2022.12.12(Mon)
// 카펫(완전탐색).js

// 완전탐색: 가능한 모든 경우의 수를 모두 체크해서 정답을 찾는 방법

// my way
function solution(brown, yellow) {
  let total = brown + yellow; // 카펫 격자 총 개수

  // h 높이는 최소 byb 형태여야 하므로 최소 3이상이여야 한다.
  // 가운데 yellow가 안에 칠해져 있어야 하고, yellow 양쪽에 brown이 각 위치해야 하므로
  // 대략 brown / 2를 한 만큼 반복문 순회해주기
  // (그냥 brown으로 제한해도 통과하긴 하는데 불필요한 반복 줄이기 위해 / 2)
  for (let h = 3; h <= brown / 2; h++) {
    // 총 격자 개수를 높이로 나누어 떨어진다면 고것이 높이 후보!
    if (total % h === 0) {
      let w = total / h; // 총 격자 개수를 높이로 나눈 나머지가 0이면서 이에 대한 몫이 가로 길이
      // 가장자리에 brown 격자가 모두 존재해야 하므로
      // 높이에서 맨 위, 맨 아래 brown 빼준 h-2, 가로 길이에서 맨 왼쪽, 오른쪽 brown 빼준 w-2 만큼이 yellow h, w가 된댜
      // 즉, (h - 2) * (w - 2) => yellow 격자의 넓이
      if ((h - 2) * (w - 2) === yellow) return [w, h];
    }
  }
}

//  b b b b
//  b y y b
//  b b b b

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
