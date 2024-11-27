// 32710_구구단표
// 2024.11.27(Wed)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = Number(require("fs").readFileSync(filePath).toString());

// 1~9 사이의 숫자인지 확인
if (Number.isInteger(n) && n >= 1 && n <= 9) {
  console.log(1);
} else {
  // 2~9로 나누어떨어지는지 확인
  for (let i = 2; i <= 9; i++) {
    if (n % i === 0 && n / i <= 9) {
      return console.log(1);
    }
  }
  console.log(0);
}
