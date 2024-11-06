// 2024.11.06(Thurs)

// my way
function solution(l, r) {
  let result = [];

  for (let i = l; i <= r; i++) {
    if (/^[05]+$/.test(i)) {
      result.push(i);
    }
  }
  return result.length > 0 ? result : [-1];
}

// /^[05]+$/ : 문자열 처음부터 끝까지 '0' 또는 '5' 로만 구성되어 있는지 확인

// ------------------------------------------------------------------

// other way
function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    if ([...String(i)].every((num) => num === "0" || num === "5")) {
      result.push(i);
    }
  }

  return result.length > 0 ? result : [-1];
}

console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]
