// 복습완료💫(221106)
// 2022.10.30(Sun)

function solution(before, after) {
  let answer = 0;
  let beforeArr = [...before].sort().join("");
  let afterArr = [...after].sort().join("");

  answer = beforeArr === afterArr ? 1 : 0;

  return answer;
}
// 같은 배열인지 비교연산자로 비교할 수는 없으므로 join('')을 통해 다시 문자열로 만들어준 후 비교하기!

// 241121
function solution(before, after) {
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}
