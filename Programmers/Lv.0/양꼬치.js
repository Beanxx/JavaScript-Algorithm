// 2022.10.14(Fri)

function solution(n, k) {
  let dum = parseInt(n / 10);
  let beverage = k - dum;
  let answer = n * 12000 + beverage * 2000;
  return answer;
}
