// 27294 몇개고?
// 2023.02.03(Fri)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let t = input[0];
let s = input[1];
let bab = 0;

if (s === 0) {
  // 술 X
  if (t <= 11) bab = 280; // 아침
  else if (t >= 12 && t <= 16) bab = 320; // 점심
  else bab = 280; // 저녁
} else if (s === 1) {
  // 술 O
  bab = 280;
}

console.log(bab);
