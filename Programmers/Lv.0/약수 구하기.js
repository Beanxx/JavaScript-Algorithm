// 복습완료💫(221106)
// 2022.10.22(Sat)

// my way
function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer;
}

console.log(solution(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
