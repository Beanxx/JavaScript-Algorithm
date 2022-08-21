// 2588 곱셈
// 2022.08.21(Sun)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a * (b % 10));
console.log(a * (parseInt(b / 10) % 10));
console.log(a * parseInt(b / 100));
console.log(a * b);

// python에선 `//` 로 나눗셈의 몫을 구할 수 있지만, js에선 몫만 구하는 연산자가 따로 존재하지 않으므로
// parseInt(b / 10) 요런 식으로 처리해주면 소수점 아래 숫자는 버리고 정수형으로 나타내므로 몫을 구할 수 있음!
