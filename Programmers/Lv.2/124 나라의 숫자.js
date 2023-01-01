// // 2023.01.01(Sun)
// 124 나라의 숫자.js

function solution(n) {
  let result = "";
  const pattern = [4, 1, 2];

  // n을 감소시키면서 0보다 큰 경우에 조건문 순회하기
  while (n > 0) {
    result = pattern[n % 3] + result; // 3진법 계산처럼 만들어주기
    n = parseInt((n - 1) / 3); // n-1를 3으로 나눈 몫을 n으로 할당해주기
  }

  return result;
}

// 3진법: 2, 1, 0 3개의 숫자를 가지고 숫자를 표현

// n = 1 -> 1 % 3 = 1 => index 1 = 1이여야 함
// n = 2 -> 2 % 3 = 2 => index 2 = 2이어야 함
// n = 3 -> 3 % 3 = 0 => index 0 = 4이어야 함
// => [4, 2, 1] 순이어야 함

console.log(solution(1)); // '1'
console.log(solution(3)); // '4'
