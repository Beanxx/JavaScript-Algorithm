// 복습완료💫(221117)
// 2022.07.03(Sun)
// 약수의 합.js

// my way
function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    // n을 i로 나눴을 때 떨어진다는건 i가 n의 약수라는 의미!
    if (n % i === 0) result += i;
  }
  return result;
}
