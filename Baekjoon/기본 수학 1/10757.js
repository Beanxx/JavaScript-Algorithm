// 10757 큰 수 A+B
// 2022.12.27(Tues)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const a = BigInt(input[0]);
const b = BigInt(input[1]);

console.log((a + b).toString());
