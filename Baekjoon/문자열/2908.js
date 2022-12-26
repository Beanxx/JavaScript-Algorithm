// 2908 상수
// 숫자를 뒤집어서 비교하는 문제
// 2022.12.26(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const num1 = [...input[0]].reverse().join("");
const num2 = [...input[1]].reverse().join("");
num1 > num2 ? console.log(num1) : console.log(num2);

// reverse() 메소드는 배열에서 사용 가능하다!
