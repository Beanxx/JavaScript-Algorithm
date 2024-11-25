// 2501 약수 구하기
// 2024.11.25(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

let result = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    result.push(i);
  }
}

console.log(result[K - 1] || 0);
