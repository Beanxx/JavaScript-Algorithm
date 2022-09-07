// 2739 구구단
// 2022.09.07(Wed)

const input = require("fs").readFileSync("input.txt").toString();

const n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
