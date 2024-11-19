// 복습완료💫(221106)
// 2022.10.20(Thurs)

// my way
function solution(strlist) {
  let answer = [];
  for (let el of strlist) {
    answer.push(el.length);
  }
  return answer;
}

// 241119
function solution(strlist) {
  return strlist.map((el) => el.length);
}

console.log(["We", "are", "the", "world!"]); // [2, 3, 3, 6]
