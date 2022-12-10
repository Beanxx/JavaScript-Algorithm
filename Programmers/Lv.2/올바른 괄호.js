// 2022.12.10(Sat)
// 스택/큐
// 올바른 괄호.js

// my way (Stack 활용)
function solution(s) {
  let stack = [];

  for (let el of s) {
    if (el === "(") stack.push(el);
    else {
      // ')'가 먼저 오는 경우엔 stack 배열이 비어있으므로 pop()할게 없음 이 경우엔 무조건 false 처리
      if (stack.length === 0) return false;
      stack.pop(); // '('가 오고 그 다음에 ')'가 오는 경우 '('을 pop해서 올바른 괄호일 경우 stack 배열이 빈 배열이 되도록 만들기
    }
  }
  return stack.length === 0; // stack 배열 길이가 0이라는 것은 빈 배열임을 뜻하고 이 조건을 만족하면 true, 빈 배열이 아니면 false 반환!
}

// other way (그냥 for문 이용)
function solution(s) {
  let num = 0;

  for (let el of s) {
    num += el === "(" ? 1 : -1;
    if (num < 0) return false; // num이 0보다 작다는 것은 '(', ')'가 차례로 오지 않음을 의미
  }
  return num === 0 ? true : false; // n이 0이어야 올바른 괄호를 의미함!
}

console.log(solution("()()")); // true
console.log(solution(")()(")); // false
