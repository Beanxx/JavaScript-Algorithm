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

// other way
function solution(order) {
  return (String(order).match(/[369]/g) || []).length;
}
