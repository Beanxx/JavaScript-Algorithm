// 2439 별 찍기 - 2
// 2022.11.15(Tues)

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  console.log(`${" ".repeat(n - i)}${"*".repeat(i)}`);
}
