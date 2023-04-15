// 10813 공 바꾸기
// 배열의 값을 교환하는 문제
// 2023.04.15(Sat)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const length = Number(input[0].split(" ")[0]);
let result = Array.from({ length: length }, (e, i) => i + 1);

for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(" ").map(Number);

  // copy value
  const copyA = result[arr[0] - 1];
  const copyB = result[arr[1] - 1];

  result[arr[0] - 1] = copyB;
  result[arr[1] - 1] = copyA;
}
console.log(result.join(" ")); // 3 1 4 2 5
