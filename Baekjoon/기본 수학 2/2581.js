// 2581 소수
// 2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제 2
// 2023.02.04(Sat)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const m = input[0];
const n = input[1];

let result = [];

// 소수 판별 함수
const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i < parseInt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

for (let i = m; i <= n; i++) {
  if (isPrime(i)) result.push(i);
}

let sum = result.reduce((acc, cur) => acc + cur, 0); // 소수의 합
let min = Math.min(...result); // 소수들 중 최소값

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}
