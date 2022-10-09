// 2022.10.09(Sun)

function solution(denum1, num1, denum2, num2) {
  let answer = [];
  let num = num1 * num2; // 분모
  let denum = num1 * denum2 + num2 * denum1; // 분자

  // 약분할 수 (초기값을 1로 선언해서 약분할 필요가 없을 경우엔 / 1 -> same result)
  let divideNum = 1;

  // 약분 과정
  for (let i = 1; i <= denum; i++) {
    if (num % i === 0 && denum % i === 0) {
      divideNum = i;
    }
  }

  answer.push(denum / divideNum);
  answer.push(num / divideNum);
  return answer;
}

// 최소공배수를 구하는 방법도 결국 나중에 약분해야 하는 경우도 있음.. -> 실패~!
// Lv.0 문제 치곤 나에겐 좀 어려웠던 문제였음.. 약분과정을 처리하는 부분에서 좀 더 생각해야 하는 문제다.
