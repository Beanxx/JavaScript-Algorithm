// 복습완료💫(221116)
// 2022.10.11(Tues)

// my way
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    // i는 피자판 수
    // 총 피자 조각 개수를 사람 수로 나눴을 때 딱 떨어질 때까지!
    if ((6 * i) % n === 0) {
      answer = i;
      break;
    }
  }
  return answer;
}

// other way
function solution(n) {
  let pizza = 1;
  // 피자조각이 사람 수로 나눴을 때 딱 떨어지지 않을 때까지 반복
  // (딱 떨어진다면 조건문 값이 0이므로 false => 순회 stop!)
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}

console.log(solution(10)); // 5
