// 1978 소수 찾기
// 2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제 1
// 2023.01.23(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const length = input[0];
let arr = input[1].split(" ").map(Number);
let count = 0;

// 소수 판별 함수
const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i < parseInt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

for (let i = 0; i < length; i++) {
  // true => 소수인 경우 count +1
  if (isPrime(arr[i])) count++;
}

console.log(count);
