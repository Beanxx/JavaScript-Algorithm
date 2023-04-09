// 27866 문자와 문자열
// 문자열을 입력받고 문자열의 특정 위치를 읽어 봅시다.
// 2023.04.09(Sun)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const word = input[0];
const idx = input[1];

console.log(word[idx - 1]);
