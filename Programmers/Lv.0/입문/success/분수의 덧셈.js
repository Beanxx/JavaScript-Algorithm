// 복습완료💫(221116)
// 2022.10.09(Sun)

function solution(denum1, num1, denum2, num2) {
  let answer = [];
  let num = num1 * num2; // 분모
  let denum = num1 * denum2 + num2 * denum1; // 분자

  // 약분할 수 (초기값을 1로 선언해서 약분할 필요가 없을 경우엔 / 1 -> same result)
  let divideNum = 1;

  // 약분 과정
  for (let i = 1; i <= denum; i++) {
    // 분모, 분자 모두 나누어 떨어진다면 해당 수를 약분할 수로 할당
    if (num % i === 0 && denum % i === 0) divideNum = i;
  }

  // 약분할 수로 나눠서 분자, 분모 순서대로 answer에 push
  answer.push(denum / divideNum);
  answer.push(num / divideNum);
  return answer;
}

// // 최소공배수를 구하는 방법도 결국 나중에 약분해야 하는 경우도 있음.. -> 실패~!
// // Lv.0 문제 치곤 나에겐 좀 어려웠던 문제였음.. 약분과정을 처리하는 부분에서 좀 더 생각해야 하는 문제다.

// 241220
function solution(numer1, denom1, numer2, denom2) {
  const sameCondition = denom1 === denom2;

  let top = sameCondition ? numer1 + numer2 : numer1 * denom2 + numer2 * denom1;
  let bottom = sameCondition ? denom1 : denom1 * denom2;

  let maximum = Math.max(top, bottom);

  for (let i = 2; i <= maximum; i++) {
    if (top === bottom) {
      top = 1;
      bottom = 1;
    }

    if (top % i === 0 && bottom % i === 0) {
      top /= i;
      bottom /= i;
    }
  }

  return [top, bottom];
}

// refactor code (GCD(최대공약수) 활용)
function solution(numer1, denom1, numer2, denom2) {
  // 유클리드 호제법
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // b === 0 이면, a는 최대공약수!

  const top =
    denom1 === denom2 ? numer1 + numer2 : numer1 * denom2 + numer2 * denom1;

  const bottom = denom1 === denom2 ? denom1 : denom1 * denom2;

  const divisor = gcd(top, bottom);

  return [top / divisor, bottom / divisor];
}

// console.log(solution(1, 2, 3, 4)); // [5, 4]
// console.log(solution(2, 4, 2, 4)); // [1, 1] (edge case)
