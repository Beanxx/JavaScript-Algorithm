// 11720 숫자의 합
// 정수를 문자열로 입력받는 문제. Python처럼 정수 크기에 제한이 없다면 상관 없으나, 예제 3은 일반적인 정수 자료형에 담기에 너무 크다는 점에 주목합시다.
// 2022.12.18(Sun)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let arr = input[1].split("").map((el) => Number(el));
let sum = 0;

for (let el of arr) {
  sum += el;
}

console.log(sum);
