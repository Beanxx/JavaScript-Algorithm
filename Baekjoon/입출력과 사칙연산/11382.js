// 11382 꼬마 정민
// 2023.04.03(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

const result = a + b + c;

console.log(result);
