// 1546 평균
// 평균을 조작하는 문제
// 2022.12.16(Fri)

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map((el) => Number(el));
const max = Math.max(...arr);
const newArr = [...arr].map((el) => (el / max) * 100);
const result = newArr.reduce((acc, cur) => acc + cur, 0);

console.log(result / arr.length);
