// 2022.06.23(Thurs)
// 자연수 뒤집어 배열로 만들기.js

// my way
function solution(n) {
  let newN = String(n).split("");
  let result = [];

  for (let i = 1; i <= newN.length; i++) {
    result.push(Number(newN[newN.length - i]));
  }
  return result;
}

// other way
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((n) => parseInt(n));
}

// js애서 .reverse 메서드가 있는 줄도 몰랐는데 알았더라면 간단히 풀었을 문제.
// n(숫자)+'' <- 숫자에 빈문자열을 더한것은 String(n)과 같은 결과!

// 일단 숫자 -> 문자열로 변환 -> 한자리로 각각 문자열 쪼개 -> 순서 뒤집어
// -> map 돌려서 배열에 넣어 -> 배열에 넣을 때 parseInt로 요소를 다시 문자열에서 숫자로 변환
