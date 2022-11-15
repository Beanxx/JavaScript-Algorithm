// 11022 A+B - 7
// 2022.11.15(Tues)

const input = require("fs").readFileSync("input.txt").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let a = parseInt(input[i].split(" ")[0]);
  let b = parseInt(input[i].split(" ")[1]);

  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
