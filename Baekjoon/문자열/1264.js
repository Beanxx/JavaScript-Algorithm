// 1264_모음의 개수
// 2024.12.10(Tues)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const moem = ["a", "e", "i", "o", "u"];

for (let el of input) {
  if (el !== "#") {
    const arr = [...el].filter((el) => moem.includes(el.toLowerCase()));
    console.log(arr.length);
  } else {
    break;
  }
}
