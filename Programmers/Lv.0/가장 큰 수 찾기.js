// 2022.10.23(Sun)

// my way
function solution(array) {
  let answer = [];
  let large = Math.max(...array);
  let idx = array.indexOf(large);
  answer.push(large);
  answer.push(idx);
  return answer;
}

// other way

function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}

// 내가  푼 방법과 비슷하지만 코드가 짧기때문에 바로 배열로 넣는게 보기에 더 간결!
