// 2022.10.23(Sun)

function solution(s1, s2) {
  let answer = s1.filter((el) => s2.includes(el));
  return answer.length;
}
