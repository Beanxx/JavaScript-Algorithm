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

// other way

function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}

// 내가  푼 방법과 비슷하지만 코드가 짧기때문에 바로 배열로 넣는게 보기에 더 간결!

console.log(solution([9, 10, 11, 8])); // [11, 2]
