// 2444_별 찍기 - 7
// 2024.11.12(Tues)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(require("fs").readFileSync(filePath));

// my way
let result = "";

for (let i = 0; i < N; i++) {
  const empty = " ".repeat(N - i - 1);
  const star = "*".repeat(2 * i + 1);

  result += `${empty}${star}\n`;
}

const reverseStr = result.split(`\n`).reverse().splice(2).join(`\n`);

console.log(result + reverseStr);

// ----------------------------------------------------------------

// other way
for (let i = 1; i <= N; i++) {
  const empty = " ".repeat(N - i);
  const star = "*".repeat(2 * i - 1);
  console.log(empty + star);
}

for (let i = N - 1; i > 0; i--) {
  const empty = " ".repeat(N - i);
  const star = "*".repeat(2 * i - 1);
  console.log(empty + star);
}
