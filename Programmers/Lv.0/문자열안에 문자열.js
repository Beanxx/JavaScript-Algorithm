// 복습완료💫(221106)
// 2022.10.25(Tues)

// my way
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// other way
function solution(str1, str2) {
  return str1.indexOf(str2) === -1 ? 2 : 1;
}
