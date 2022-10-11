// 2022.10.11(Tues)

// my way
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
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
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}
