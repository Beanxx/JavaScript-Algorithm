// 2022.12.26(Mon)
// 크기가 작은 부분 문자열.js

// my way
function solution(t, p) {
  let result = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    result.push([...t].splice(i, p.length).join(""));
  }

  return result.filter((el) => Number(el) <= Number(p)).length;
}

console.log(solution("3141592", "271")); // 2
console.log(solution("500220839878", "7")); // 8
