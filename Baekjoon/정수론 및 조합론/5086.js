// 5086 배수와 약수
// 2023.02.12(Sun)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.pop(); // 배열  첫번째 요소 삭제

const nums = input.map((e) => e.split(" ").map((n) => +n));
// [[8, 16], [32, 4], ...] 형태로 변환

for (let el of nums) {
  if (el[1] % el[0] === 0) {
    console.log("factor");
  } else if (el[0] % el[1] === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
