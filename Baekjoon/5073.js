// 5073_삼각형과 세 변
// 2024.11.28(Thurs)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(`\n`);

let arr = input.map((el) => el.split(" ").map(Number));

for (let el of arr) {
  const [a, b, c] = el.sort((a, b) => b - a);

  if (a === 0 && b === 0 && c === 0) return;

  if (a >= b + c) {
    console.log("Invalid");
  } else if (a === b && b === c && a === c) {
    console.log("Equilateral");
  } else if ((a === b && b !== c) || (b === c && a !== b)) {
    console.log("Isosceles");
  } else if (a !== b && b !== c && a !== c) {
    console.log("Scalene");
  }
}

// Equilateral : 세 변의 길이가 모두 같은 경우
// Isosceles : 두 변의 길이만 같은 경우
// Scalene : 세 변의 길이가 모두 다른 경우
