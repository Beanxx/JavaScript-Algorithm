// 10871 X보다 작은 수
// 배열을 입력받고 X보다 작은 수를 찾는 문제
// 2022.12.16(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const x = input[0].split(" ")[1];
const arr = input[1].split(" ");
let result = "";

for (let el of arr) {
  if (Number(el) < Number(x)) {
    result += el + " ";
  }
}

console.log(result);
