// 2022.06.15(Wed)
// 두 정수 사이의 합.js

function solution(a, b) {
  let big = Math.max(a, b);
  let small = Math.min(a, b);
  let result = 0;

  for (let i = small; i <= big; i++) {
    result += i;
  }
  return result;
}
