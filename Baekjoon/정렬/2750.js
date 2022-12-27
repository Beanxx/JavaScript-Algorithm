// 2750 수 정렬하기
// 시간 복잡도가 O(n²)인 정렬 알고리즘으로 풀 수 있습니다. 예를 들면 삽입 정렬, 거품 정렬 등이 있습니다.
// 2022.12.28(Wed)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

input.shift(); // 수의 개수가 주어진 첫째 줄은 제외
input.sort((a, b) => a - b); // 오름차순 정렬

for (let el of input) {
  console.log(el);
}
