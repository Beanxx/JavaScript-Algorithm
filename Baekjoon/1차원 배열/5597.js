// 5597 과제 안 내신 분..?
// 과제 제출 기한이 지났습니다.
// 2022.12.16(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= 30; i++) {
  if (!input.includes(String(i))) {
    console.log(Number(i));
  }
}
