// // 2022.12.05(Mon)
// 짝지어 제거하기.js

// stack 이용
function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // stack 배열에 원소가 있거나 stack의 마지막 원소 값과 s[i]이 같지 않다면 (제거할 수 없으니까 push)
    if (!stack.length || s[i] !== stack[stack.length - 1]) stack.push(s[i]);
    else stack.pop(); // stack의 마지막 원소 값과 s[i]이 같음을 의미하므로 제거 가능해짐! => pop()
  }
  return stack.length > 0 ? 0 : 1;
  // 제거할 수 없다면 stack 배열에 원소가 더해지므로 원소가 존재한다면 성공적으로 짝지어 제거할 수 없음을 의미 => return 0
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
