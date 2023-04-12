// 10810 공 넣기
// 배열에 값을 쓰는 문제
// 2023.04.12(Wed)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const length = Number(input[0].split(" ")[0]);
let result = Array.from({ length: length }, () => 0); // [0, 0, 0, 0, 0]

for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(" ").map(Number);
  for (let j = arr[0]; j <= arr[1]; j++) {
    result[j - 1] = arr[2];
  }
}

console.log(result.join(" "));
