// 2023.05.01(Mon)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let result = "";

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];

  for (let el of str) {
    if (el.toLowerCase() === el) {
      result += el.toUpperCase();
    } else {
      result += el.toLowerCase();
    }
  }

  console.log(result);
});
