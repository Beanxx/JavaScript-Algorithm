// 2023.05.21(Sun)

function solution(ineq, eq, n, m) {
  if (eq === "=") {
    if (ineq === "<") {
      if (n <= m) return 1;
      return 0;
    } else {
      if (n >= m) return 1;
      return 0;
    }
  } else {
    if (ineq === "<") {
      if (n < m) return 1;
      return 0;
    } else {
      if (n > m) return 1;
      return 0;
    }
  }
}

// 첨엔 `${n} ${ineq}= ${m}` 요런식으로 조건을 설정했는데 연산자까지 문자열로 처리되어서 모든 테스트를 통과하지 못했다.
// 그래서 하나하나 조건을 걸어줬더니 중첩 if문이 넘 많아져서 가독성이 넘 떨어진댜,,

// ----------------------------------------------------------------------------------------------------

// other solution

function solution(ineq, eq, n, m) {
  if (eq === "=" && n === m) return 1;
  if (ineq === "<" && n < m) return 1;
  if (ineq === ">" && n > m) return 1;
  return 0;
}

// 다른 사람 풀이를 보니까 중첩 조건문을 안 쓰고, 오직 3개의 조건문을 통해 문제를 해결했다.
// 두 값이 같은 경우는 <=, >= 두 조건 모두 해당되니까 무조건 두 값이 같은 경우 1을 리턴해주고,
// 그 외의 참인 두 조건만 더 처리해주면 그 이외의 모든 케이스에 대해서는 0을 리턴하면 깔끔하게 구현 가능
