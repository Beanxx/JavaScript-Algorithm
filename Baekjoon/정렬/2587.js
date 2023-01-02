// 2587 대표값2
// 5개의 수의 평균과 중앙값을 구하는 문제
// 2023.01.02(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const average = input.reduce((acc, cur) => acc + cur, 0) / input.length;
const middle = input.sort((a, b) => a - b)[2];

console.log(average);
console.log(middle);
