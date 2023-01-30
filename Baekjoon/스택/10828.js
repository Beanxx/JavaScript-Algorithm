// 10828 스택
// 스택의 개념을 익히고 실습하는 문제
// 2023.01.30(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
const len = input.shift();

const stack = [];
const result = [];

for (let i = 0; i < len; i++) {
  if (input[i] === "pop") {
    result.push(stack.pop() || -1);
  } else if (input[i] === "size") {
    result.push(stack.length);
  } else if (input[i] === "empty") {
    result.push(stack.length === 0 ? 1 : 0);
  } else if (input[i] === "top") {
    result.push(stack[stack.length - 1] || -1);
  } else {
    stack.push(input[i].split(" ")[1]);
  }
}

console.log(result.join("\n"));
