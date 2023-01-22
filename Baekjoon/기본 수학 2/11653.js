// 11653 소인수분해
// N을 소인수분해하는 문제
// 2023.01.22(Sun)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let result = [];

// for (let i = 2; i <= input; i++) {
//   while (input % i === 0) {
//     input /= i;
//     result.push(i);
//   }
// }

// 아래처럼 구현하면 시간이 440ms -> 300ms으로 감소!
// 많이 차이나는 것은 아니지만 조금이라도 반복 횟수를 줄일 수 있담

while (input % 2 === 0) {
  input /= 2;
  result.push(2);
}

for (let i = 3; i <= input; i += 2) {
  while (input % i === 0) {
    input /= i;
    result.push(i);
  }
}

console.log(result.join("\n"));
