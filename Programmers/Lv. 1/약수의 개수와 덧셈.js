// 2022.09.27(Tues)
// 월간 코드 챌린지 시즌2_Lv.1
// 약수의 개수와 덧셈.js

// my way
function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      // 어떠한 수로 나누어진다는 것은 i의 약수가 되는 것이므로
      // 조건을 만족할 때마다 약수 개수 +1
      if (i % j === 0) {
        count++;
      }
    }

    // 약수 개수가 짝수면 +
    if (count % 2 === 0) {
      result += i;
    } else {
      // 약수 개수가 홀수면 -
      result -= i;
    }

    count = 0;
  }
  return result;
}

// other way
function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      result -= i;
    } else {
      result += i;
    }
  }
  return result;
}

// 제곱근이 정수면 약수의 개수가 홀수.. 생각지도 못한 수학적 접근쓰
// 예를 들어 16의 제곱근은 4로 정수! -> 16의 약수: 1, 4, 16 -> 3개
// => 제곱근이 정수 -> 약수 개수 홀수 성립!
