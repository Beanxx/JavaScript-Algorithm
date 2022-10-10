// 2022.10.10(Mon)

function solution(array) {
  let answer = 0;
  array.sort((a, b) => a - b);
  let idx = parseInt(array.length / 2);
  answer = array[idx];
  return answer;
}
