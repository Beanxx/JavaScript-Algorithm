// 10807 개수 세기
// 배열을 입력받고 v를 찾는 문제
// 2022.12.16(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = input[1].split(" "); // 공백으로 이루어진 값들을 쪼개서 배열로!
const v = input[2];
let count = 0;

for (let el of arr) {
  if (el === v) count++;
}

console.log(count);
