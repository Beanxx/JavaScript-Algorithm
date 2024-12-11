// 1271_엄청난 부자2
// 2024.12.11(Wed)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const N = BigInt(n);
const M = BigInt(m);

console.log(String(N / M));
console.log(String(N % M));

// BigInt() : Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체

// (1 ≤ m ≤ n ≤ 101000, m과 n은 10진수 정수)
// 위의 조건을 만족하기 위해선 BigInt로 입력 숫자값을 변환한 후, 결과값을 String으로 변환해줘야 하는 문제
