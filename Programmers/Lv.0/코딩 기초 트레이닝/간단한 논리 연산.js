// 2024.06.24(Mon)

// my way
function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

console.log(solution(true, false, false, false)); // false
