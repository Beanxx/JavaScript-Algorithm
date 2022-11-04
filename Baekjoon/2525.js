// 2525 오븐 시계
// 2022.11.04(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let h = parseInt(input[0].split(" ")[0]); // h
let m = parseInt(input[0].split(" ")[1]); // m
let time = parseInt(input[1]);

let hh = 0;
let mm = 0;

h = parseInt((h * 60 + m + time) / 60);
m = (h * 60 + m + time) % 60;

if (h >= 24) {
  h -= 24;
}

console.log(`${h} ${m}`);
