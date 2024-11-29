// 10988_팰린드롬인지 확인하기
// 2024.11.29(Fri)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let reverseStr = [...input].reverse().join("");

console.log(input === reverseStr ? 1 : 0);
