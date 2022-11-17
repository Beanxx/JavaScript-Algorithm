// 복습완료💫(221117)
// 2022.06.13(Mon)
// 수박수박수박수박수.js

// my way
function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) answer += "수"; // 홀수자리에선 '수'
    else answer += "박"; // 짝수자리에선 '박'
  }
  return answer;
}

// another way
function solution(n) {
  return "수박".repeat(n).substring(0, n);
  // "수박".repeat(3) = '수박수박수박'
}

// * repeat(count) *
// 문자열을 주어진 count 횟수만큼 반복해 붙인 새로운 문자열 반환

// * substring(start index, end index) *
// index '0 ~ end index - 1'인 문자 return
// parameter가 (end index, start index)처럼 순서가 바뀌어도 OK
// parameter가 음수일 경우 0으로 취급

// 난 거의 10줄에 푼 문제를 단 한 줄로 풀 수가 있다니...
// js method를 잘 활용해서 풀어보자!

console.log(solution(3)); // '수박수'
