// 2023.05.06(Sat)

function solution(a, b) {
  const first = +`${a}${b}`;
  const second = +`${b}${a}`;

  return first > second ? first : second;
}
