// 2022.10.21(Fri)

// my way
function solution(array, n) {
  let temp = [];

  // 조건: 가장 가까운 수가 여러 개일 경우 더 작은 수 Return
  array = array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    temp.push(Math.abs(array[i] - n));
  }

  let idx = temp.indexOf(Math.min(...temp));

  return array[idx];
}

// other way
function solution(array, n) {
  var arr = array.sort((a, b) => a - b).map((v) => Math.abs(v - n));
  return array[arr.indexOf(Math.min(...arr))];
}
