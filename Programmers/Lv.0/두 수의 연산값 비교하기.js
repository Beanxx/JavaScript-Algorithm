// 2023.05.06(Sat)

function solution(a, b) {
  const first = +`${a}${b}`;
  const second = 2 * a * b;

  return first > second ? first : second;
}
