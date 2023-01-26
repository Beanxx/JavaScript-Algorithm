// 10814 나이순 정렬
// 2023.01.26(Thurs)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let result = [];

for (let i = 1; i <= input[0]; i++) {
  let age = input[i].split(" ");
  result.push(age);
}

result.sort((a, b) => a[0] - b[0]);

// [ '20', 'Sunyoung' ] => 20 Sunyoung 형태로 변환
for (let i = 0; i < result.length; i++) {
  result[i] = result[i].join(" ");
}

console.log(result.join("\n"));
