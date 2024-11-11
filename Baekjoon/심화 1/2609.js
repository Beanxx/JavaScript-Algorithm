// 2609 최대공약수와 최소공배수
// 2024.11.11(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// my way

// 최대 공약수
const func1 = (n1, n2) => {
  let a = 1;

  for (let i = 2; i <= Math.max(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      a = i;
    }
  }

  return a;
};

const result1 = func1(a, b);

// 최대 공배수
const func2 = (n1, n2) => {
  let b = 1;

  while (true) {
    if (b % n1 === 0 && b % n2 === 0) break;
    b++;
  }
  return b;
};

const result2 = func2(a, b);

console.log(`${result1}\n${result2}`);

// ---------------------------------------------

// other way (유클리드 호제법 사용)

function solution(x, y) {
  while (y !== 0) {
    let rest = x % y; // 나머지

    x = y;
    y = rest;
  }
  return x;
}

const gcd = solution(a, b); // 최대 공약수

console.log(gcd);
console.log((a * b) / gcd); // 최소 공배수
