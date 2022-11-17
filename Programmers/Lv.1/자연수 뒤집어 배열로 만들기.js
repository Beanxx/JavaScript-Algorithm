// 복습완료💫(221117)
// 2022.06.23(Thurs)
// 자연수 뒤집어 배열로 만들기.js

// my way
function solution(n) {
  let result = [];
  let arr = [...String(n)]; // [ '1', '2', '3', '4', '5' ]

  // index i를 맨 뒤부터 앞으로 거꾸로 순회
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(Number(arr[i]));
  }
  return result;
}

// other way
function solution(n) {
  return [...String(n)].reverse().map((n) => Number(n));
}

// js애서 .reverse 메서드가 있는 줄도 몰랐는데 알았더라면 간단히 풀었을 문제.
// reverse()는 배열 형태에서 사용 가능하다!
// n(숫자)+'' <- 숫자에 빈문자열을 더한것은 String(n)과 같은 결과!

// 일단 숫자 -> 문자열로 변환 -> 한자리로 각각 문자열 쪼개서 배열 형태로 넣기-> 순서 뒤집어
// -> map 돌려서 다시 문자열에서 숫자 형태로 변환

console.log(solution(12345)); // [5, 4, 3, 2, 1]
