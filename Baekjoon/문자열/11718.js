// 11718 그대로 출력하기
// 2023.04.10(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

console.log(input);
