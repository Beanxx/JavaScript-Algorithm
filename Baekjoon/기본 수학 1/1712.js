// 1712 손익분기점
// 2023.01.14(Sat)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const A = input[0]; // 고정비용
const B = input[1]; // 가변비용
const C = input[2]; // 판매비용

// 고정비용에 플러스 비용인 가변비용이 판매비용보다 크거나 같은 경우 손익분기점이 존재할 수가 없다.
if (B >= C) console.log(-1); // 손익분기점 존재하지 않는 경우
else console.log(Math.floor(A / (C - B)) + 1);

// 손익분기점: 총 수입(판매비용 = C) > 총비용(고정비용+가변비용 = A + B);
