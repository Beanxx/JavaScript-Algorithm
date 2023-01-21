// 2751 수 정렬하기 2
// 시간 복잡도가 O(nlogn)인 정렬 알고리즘으로 풀 수 있습니다.
// 예를 들면 병합 정렬, 힙 정렬 등이 있지만, 어려운 알고리즘이므로 지금은 언어에 내장된 정렬 함수를 쓰는 것을 추천드립니다.
// 2023.01.21(Sat)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [length, ...etc] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const input = etc.sort((a, b) => a - b); // [ 1, 2, 3, 4, 5 ]
console.log(input.join("\n"));
