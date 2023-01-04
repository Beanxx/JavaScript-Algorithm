// 2023.01.04(Wed)
// 줄 서는 방법.js

function solution(n, k) {
  const result = [];
  let arr = new Array(n).fill(0).map((_, i) => i + 1); // [ 1, 2, 3 ]
  let fac = arr.reduce((a, b) => a * b); // 6

  // result 배열 길이가 n보다 작을 때 동안 반복문 순회
  // 즉, result 배열 원소 개수가 n과 같아지면 반복문 stop!
  while (result.length < n) {
    fac /= arr.length;
    result.push(...arr.splice(Math.floor((k - 1) / fac), 1)); // 해당 index 요소 1개 제거
    k %= fac;
  }

  return result;
}

// 1번째 순회 - fac: 2, k: 1, result: [3]
// 2번째 순회 - fac: 1, k: 0, result: [3, 1]
// 3번째 순회 - fac: 1, k: 0, result: [3, 1, 2]

console.log(solution(3, 5)); // [3, 1, 2]
