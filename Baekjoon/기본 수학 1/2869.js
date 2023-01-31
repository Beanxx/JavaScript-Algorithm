// 2869 달팽이는 올라가고 싶다
// 달팽이의 움직임을 계산하는 문제
// 2023.01.31(Tues)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = input[0];
const b = input[1];
const v = input[2];
let day = (v - b) / (a - b);

console.log(Math.ceil(day));
