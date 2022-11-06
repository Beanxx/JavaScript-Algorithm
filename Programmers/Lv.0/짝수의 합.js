// 복습완료💫(221106)
// 2022.10.14(Fri)

// n이하의 짝수를 모두 더한 값
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}

console.log(solution(10)); // 30
