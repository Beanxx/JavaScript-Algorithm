// 1929 소수 구하기
// 더 빠르게 소수를 판별하는 문제
// 2023.01.27(Fri)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 소수 판별 함수
const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true; // 소수이면 true 반환
};

for (let i = n; i <= m; i++) {
  // true 즉 소수이면 i 출력
  if (isPrime(i)) console.log(i);
}

// 시간초과 문제도 고려해야 했던 문제!
