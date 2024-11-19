// 복습완료💫(221106)
// 2022.10.15(Sat)

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer++;
  }
  return answer;
}
