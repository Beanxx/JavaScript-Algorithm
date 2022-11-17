// 복습완료💫(221117)
// 2022.07.07(Thurs)
// 정수 제곱근 판별.js

// my way
function solution(n) {
  // n = 121
  let x = Math.sqrt(n); // x = 11
  return x === parseInt(x) ? (x + 1) ** 2 : -1;
  // x가 정수라고 주어졌기 때문에 그냥 x와 x를 정수로 변환한 값이 같아야 x가 n의 정수 제곱근!
}

console.log(solution(121)); // 144
