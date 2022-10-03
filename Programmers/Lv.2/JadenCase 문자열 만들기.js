// 2022.10.03(Mon)
// JadenCase 문자열 만들기.js

function solution(s) {
  let result = [];
  s = s.split(" ");

  for (let i of s) {
    // slice(0, 1): 원소의 첫 글자
    // slice(1): index 1부터 마지막까지 즉, 첫 글자를 제외한 나머지 글자들
    result.push(i.slice(0, 1).toUpperCase() + i.slice(1).toLowerCase());
  }

  // 배열 내 각 원소를 공백을 통해 한 문자열로 합쳐주기
  return result.join(" ");
}
