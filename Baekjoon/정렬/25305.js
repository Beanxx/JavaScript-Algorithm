// 25305 커트라인
// k번째로 큰 수를 구하는 문제
// 2023.01.03(Tues)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const k = input[0].split(" ")[1];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a)[k - 1];

console.log(arr);
