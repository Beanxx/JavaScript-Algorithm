// 1316 그룹 단어 체커
// 조건에 맞는 문자열을 찾는 문제
// 2023.01.28(Sat)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// console.log(input); // [ '4', 'aba', 'abab', 'abcabc', 'a' ]

for (let i = 1; i <= input[0]; i++) {
  for (let j = 0; j < input[i].length; j++) {
    console.log(input[i][j]);
  }
}
