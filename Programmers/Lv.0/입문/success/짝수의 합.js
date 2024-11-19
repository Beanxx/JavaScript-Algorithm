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

// other way
function solution(n) {
  let half = Math.floor(n / 2);
  return half * (half + 1);
}

// 수학적 사고로 접근한 방법

console.log(solution(10)); // 30
