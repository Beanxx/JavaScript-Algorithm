// 2480 주사위 세개
// 2022.11.04(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if (a === b && b === c) {
  console.log(a * 1000 + 10000);
} else if (a === b || b === c || a === c) {
  if (a === b || a === c) console.log(a * 100 + 1000);
  else console.log(b * 100 + 1000);
} else if (a !== b && a !== c) {
  console.log(Math.max(a, b, c) * 100);
}
