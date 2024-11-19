// 복습완료💫(221106)
// 2022.10.24(Mon)

// my way
function solution(n) {
  let answer = 0;
  n = String(n)
    .split("")
    .map((el) => (answer += Number(el)));
  return answer;
}

// 241119
function solution(n) {
  return [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);
}

// other way
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// map이 아닌 reduce를 썼다면 한줄로 구현 가능했던,,
