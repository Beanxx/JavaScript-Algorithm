// 10871 바구니 뒤집기
// 배열을 뒤집는 문제
// 2024.11.10(Sun)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input[0].split(" ")[0]; // 5
let arr = Array.from({ length: N }, (e, i) => i + 1);

for (let n = 1; n < input.length; n++) {
  const [i, j] = input[n].split(" ");
  const temp = arr.splice(i - 1, j - i + 1).reverse();
  arr.splice(i - 1, 0, ...temp);
}

console.log(arr.join(" "));

// INPUT
// 5 4
// 1 2
// 3 4
// 1 4
// 2 2

// SOLVING
// [1, 2, 3, 4, 5]
// [2, 1, 3, 4, 5]
// [2, 1, 4, 3, 5]
// [3, 4, 1, 2, 5]
// [3, 4, 1, 2, 5]

// OUTPUT
// 3 4 1 2 5
