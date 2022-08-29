// 1330 두 수 비교하기
// 2022.08.29(Mon)

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

if (a > b) {
  return console.log(">");
} else if (a < b) {
  return console.log("<");
} else {
  return console.log("==");
}
