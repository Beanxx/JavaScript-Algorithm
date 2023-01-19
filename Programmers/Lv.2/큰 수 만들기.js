// 2022.01.20(Fri)
// 큰 수 만들기(탐욕법(Greedy)).js

function solution(number, k) {
  let stack = [];

  for (let el of number) {
    // stack 배열의 마지막 원소가 number의 원소보다 작을 때 동안 while 반복문 순회
    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    stack.push(el);

    // [ stack ]
    // [ '1' ]
    // [ '9' ]
    // [ '9', '2' ]
    // [ '9', '4' ]
  }

  // k가 0이면 stack 그대로 / k가 남으면 그만큼 잘라내기
  stack.splice(number.length - k, k);
  return stack.join("");
}

console.log(solution("1924", 2)); // "94"
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"
