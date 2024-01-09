// 2024.01.09(Tues)

// my way
function solution(a, b) {
  if (a % 2 === 1 && b % 2 === 1) {
    return a ** 2 + b ** 2;
  } else if (a % 2 === 1 || b % 2 === 1) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b);
  }
}

// other way
function solution(a, b) {
  const isOdd = (num) => num % 2 === 1;

  return isOdd(a) && isOdd(b)
    ? a ** 2 + b ** 2
    : isOdd(a) || isOdd(b)
    ? 2 * (a + b)
    : Math.abs(a - b);
}

// 이중 삼항 연산이라 약간 보기 불편하긴 하지만
// 홀수 판별 함수를 재사용하여 깔끔한 조건문을 만들 수 있다는 부분은 개선하면 좋을 것 같다!

console.log(solution(3, 5)); // 34
console.log(solution(6, 1)); // 14
console.log(solution(2, 4)); // 2
