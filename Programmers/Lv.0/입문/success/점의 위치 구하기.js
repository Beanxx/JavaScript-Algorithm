// 복습완료💫(221106)
// 2022.10.17(Mon)

// my way
function solution(dot) {
  // dot[0]: x, dot[1]: y
  if (dot[0] > 0 && dot[1] > 0) return 1;
  else if (dot[0] < 0 && dot[1] > 0) return 2;
  else if (dot[0] < 0 && dot[1] < 0) return 3;
  else return 4;
}

// 241119
function solution(dot) {
  const [x, y] = dot;

  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  else return 4;
}

// other way 1
function solution(dot) {
  const [x, y] = dot;

  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}

// other way 2
function solution(dot) {
  const [x, y] = dot;
  const check = x * y > 0;

  return x > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

console.log(solution([2, 4])); // 1
console.log(solution([-7, 9])); // 2
