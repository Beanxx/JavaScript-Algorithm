// 10250 ACM 호텔
// 호텔 방 번호의 규칙을 찾아 출력하는 문제
// 2023.02.01(Wed)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.shift();

for (let el of input) {
  const h = el.split(" ")[0];
  const w = el.split(" ")[1];
  const n = el.split(" ")[2];

  let num = parseInt(n / h) + 1; // 몇호인지 10* 에서 *에 해당하는 번호
  let floor = n % h; // 몇층인지

  if (n % h === 0) {
    num = n / h;
    floor = h;
  }

  console.log(floor * 100 + num);
}
