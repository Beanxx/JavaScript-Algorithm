// 2753 윤년
// 2022.08.31(Wed)

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const year = parseInt(input[0]);

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  return console.log("1");
} else {
  return console.log("0");
}
