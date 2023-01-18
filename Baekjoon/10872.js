// 10872 팩토리얼
// 2023.01.18(Wed)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

let total = 1;

for (let i = input; i > 1; i--) {
  total *= i;
}

console.log(total);
