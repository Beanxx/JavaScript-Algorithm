// 10869 사칙연산
// 2022.08.14(Sun)

const input = require("fs").readFileSync("input.txt").toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
