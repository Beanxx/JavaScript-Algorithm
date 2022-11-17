// 복습완료💫(221117)
// 2022.06.15(Wed)
// 두 정수 사이의 합.js

function solution(a, b) {
  let result = 0;
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

console.log(solution(5, 3)); // 12
