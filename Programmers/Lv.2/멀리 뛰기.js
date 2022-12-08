// // 2022.12.08(Thurs)
// 멀리 뛰기.js

// other way 1
function solution(n) {
  const dp = new Array(n + 1).fill(0); // [ 0, 0, 0, 0, 0 ]
  dp[0] = 1;
  dp[1] = 1;
  // dp = [ 1, 1, 0, 0, 0 ]

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567; // 피보나치 수 적용
  }
  return dp[n];
}

// other way 2
function solution(n) {
  const dp = [1, 1, 2]; // 초기화할 때 아예 3번째까지는 계산해서 초기화해준 후 keep going~!

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }
  return dp[n];
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3

// 먼가 수학적으로는 간단해보였는데 막상 코드로 구현하려니까 어떻게 구현해야 할지 모르겠어서
// 다른 사람들 풀이를 참고했는데 거의 다 비슷한 코드들이었다.

// 도달하는 방법은 피보나치 수로 증가하게 되는데 1, 1, 2, 3, 5, 8 ... 요런 식으로 증가!
// 동적 프로그래밍(DP) 방법으로 푸는 문제라는데 이 부분 Udemy 강의 듣고 다시 한 번 풀어봐야겠다!
