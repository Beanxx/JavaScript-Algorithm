// 31403
// 2024.11.26(Tues)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(`\n`);

console.log(Number(a) + Number(b) - Number(c));
console.log(a + b - c);
