// 1427_소트인사이드
// 2024.12.02(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

console.log(
  [...input]
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);
