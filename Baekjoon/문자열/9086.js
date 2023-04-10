// 9086 문자열
// 문...제
// 2023.04.10(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  const length = input[i].length - 1;
  const result = input[i][0] + input[i][length];
  console.log(result);
}
