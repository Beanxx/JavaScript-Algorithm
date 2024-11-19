// 복습완료💫(221106)
// 2022.10.21(Fri)

// my way
function solution(order) {
  let answer = 0;
  let arr = String(order).split("");

  for (let el of arr) {
    if (el === "3" || el === "6" || el === "9") {
      answer++;
    }
  }
  return answer;
}

// 241119
function solution(order) {
  return [...String(order)].filter((el) => ["3", "6", "9"].includes(el)).length;
}

// other way
function solution(order) {
  return (String(order).match(/[369]/g) || []).length;
}
console.log(String(order).match(/[369]/g)); // ['9', '3']

console.log(solution(29423)); // 2
