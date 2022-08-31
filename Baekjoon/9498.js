// 9498 시험 성적
// 2022.08.31(Wed)

const input = require("fs").readFileSync("input.txt").toString().split(" ");

const score = parseInt(input[0]);

if (score >= 90 && score <= 100) {
  return console.log("A");
} else if (score >= 80) {
  return console.log("B");
} else if (score >= 70) {
  return console.log("C");
} else if (score >= 60) {
  return console.log("D");
} else {
  return console.log("F");
}
