// 2022.10.14(Fri)

function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}
