// 복습완료💫(221106)
// 2022.10.25(Tues)

// my way
function solution(n, t) {
  return n * 2 ** t;
}

// other way 1
function solution(n, t) {
  return n * Math.pow(2, t);
}
// 2 ** t = Math.pow(2, t)

// other way 2
function solution(n, t) {
  return n << t;
}

// n << t => n * (2 ** t)
// e.g. 9 << 3; => 9 * (2 ** 3) = 9 * (8) = 72
