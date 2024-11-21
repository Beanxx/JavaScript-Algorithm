// 복습완료💫(221108)
// 2022.10.21(Fri)

// my way
function solution(array, n) {
  let temp = [];

  // 조건: 가장 가까운 수가 여러 개일 경우 더 작은 수 Return
  array = array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    temp.push(Math.abs(array[i] - n)); // n과의 차이만큼 temp 배열에 push
  }
  // arr = 	[ 3, 10, 28 ]
  // temp = [ 17, 10, 8 ]

  let idx = temp.indexOf(Math.min(...temp));
  // 가장 작은 수라는 것은 n과의 차이가 적은, 즉 가장 가까운 수의 index 구하기

  return array[idx];
}

// Math.abs(): 절댓값 구하기

// 241124
function solution(array, n) {
  let diff = [];
  array.sort((a, b) => a - b);

  for (el of array) {
    diff.push(Math.abs(n - el));
  }

  const minIdx = diff.indexOf(Math.min(...diff));

  return array[minIdx];
}

// other way 1
function solution(array, n) {
  let arr = array.sort((a, b) => a - b).map((el) => Math.abs(el - n));
  return array[arr.indexOf(Math.min(...arr))];
}

// 로직 자체는 내가 구현한 방법과 비슷하지만 map 메소드를 이용함으로써 코드가 훨 간결해진 느낌!

// other way 2
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}

console.log(solution([3, 10, 28], 20)); // 28
