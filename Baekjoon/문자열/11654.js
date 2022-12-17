// 11654 아스키 코드
// 아스키 코드에 대해 알아보는 문제
// 2022.12.17(Sat)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();
console.log(input.charCodeAt());

// charCodeAt(): 문자 -> 아스키 코드(숫자)로 변환
