// 2022.07.06(Wed)
// 문자열 내림차순으로 배치하기.js

function solution(s) {
  let newStr = s.split("").sort().reverse().join("");
  return newStr;
}

// 정수 내림차순으로 배치하기 문제보다 한 단계 줄어든 과정으로 생각하면 된다!
