// 10952 A+B - 5
// 2022.11.14(Mon)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let a = parseInt(input[i].split(" ")[0]);
  let b = parseInt(input[i].split(" ")[1]);

  if (a === 0 && b === 0) break;
  else console.log(a + b);
}
