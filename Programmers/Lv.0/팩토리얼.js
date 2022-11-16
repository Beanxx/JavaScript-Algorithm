// 복습완료💫(221116)
// 2022.10.18(Tues)

function solution(n) {
  let facto = 1; // 팩토리얼 계산 값
  let result = 1;

  for (let i = 2; i <= n; i++) {
    // 팩토리얼 계산 값이 n보다 크면 그 전까지의 팩토리얼 값
    // 예를들어, n이 7인 경우 -> i가 4일 때  아래 조건이 성립한다.
    // facto * i = 6 * 4 = 24 > 7(n) => n을 넘기 전까지의 팩토리얼 값을 기준으로 해야하므로 i-1 = 4-1 = 3
    // 즉, 3을 return (3! = 6이므로 n인 7을 넘지 않는 가장 큰 팩토리얼 값이 된다!)
    if (facto * i > n) {
      return i - 1;
    } else {
      // 팩토리얼 값이 n을 넘지 않는 경우 계속해서 i값을 곱해줌
      facto *= i;
      result = i;
    }
  }
  return result;
}

// other way
function solution(n) {
  let facto = 1;
  let i = 1;
  // 팩토리얼 값이 n을 넘지 않을 때 동안 계속해서 i를 곱해줌
  while (facto * i < n) facto *= ++i;
  return i;
}

console.log(solution(7)); // 3
