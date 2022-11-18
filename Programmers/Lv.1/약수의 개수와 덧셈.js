// 복습완료💫(221118)
// 2022.09.27(Tues)
// 월간 코드 챌린지 시즌2_Lv.1
// 약수의 개수와 덧셈.js

// my way
function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    // 약수 개수 구하기
    for (let j = 1; j <= i; j++) {
      // 어떠한 수로 나누어진다는 것은 i의 약수가 되는 것이므로
      // 조건을 만족할 때마다 약수 개수 +1
      if (i % j === 0) count++;
    }
    // 약수 개수가 짝수면 +
    if (count % 2 === 0) result += i;
    // 약수 개수가 홀수면 -
    else result -= i;
  }
  return result;
}

// other way
function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    // Number.isInteger(25) => 정수인지 아닌지를 boolean 타입으로 반환
    // 제곱근이 정수이면 약수 개수가 홀수
    if (Number.isInteger(Math.sqrt(i))) result -= i;
    else result += i;
  }
  return result;
}

console.log(solution(13, 17)); // 43
