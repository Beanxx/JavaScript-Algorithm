// 복습완료💫(221106)
// 2022.10.23(Sun)

// my way
// [가장 큰 수, 그 수의 index] 반환하기
function solution(array) {
  let answer = [];
  let large = Math.max(...array);
  let idx = array.indexOf(large);

  answer.push(large, idx);
  return answer;
}

// 241119
function solution(array) {
  const maxNum = Math.max(...array);
  const maxIdx = array.indexOf(maxNum);

  return [maxNum, maxIdx];
}

console.log(solution([9, 10, 11, 8])); // [11, 2]
