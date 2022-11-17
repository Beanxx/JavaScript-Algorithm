// 복습완료💫(221117)
// 2022.09.17(Sat)
// 나머지가 1이 되는 수 찾기.js
// 월간 코드 챌린지 시즌3_Lv.1

// my way
function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

// 복습하면서 불필요했던 변수 선언 코드 줄이기!

console.log(solution(12)); // 11
