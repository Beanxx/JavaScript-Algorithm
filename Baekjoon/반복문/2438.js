// 2438 별 찍기 - 1
// 2022.09.12(Mon)

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  console.log(`*`.repeat(i));
}
