// 10773 제로
// 가장 최근에 쓴 수를 지우는 문제
// 2023.01.12(Thurs)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => Number(el));

const arr = [];

for (let i = 1; i <= input[0]; i++) {
  if (input[i] !== 0) {
    arr.push(input[i]);
  } else {
    arr.splice(arr.length - 1, 1);
  }
}
const result = arr.reduce((acc, cur) => acc + cur, 0);
console.log(result);
