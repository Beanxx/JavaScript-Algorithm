// 2562 최댓값
// 최댓값이 어디에 있는지 찾는 문제
// 2022.12.16(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let result = Number(input[0]);
let idx = 0;

for (let i = 1; i < input.length; i++) {
  if (result < Number(input[i])) {
    result = input[i];
    idx = i;
  }
}

console.log(result);
console.log(idx + 1);

// for문에서 idx = i + 1 => idx를 출력하면 틀리고,
// for문에서 idx = i = > idx + 1를 출력하면 맞다. 뭐지,, 똑같은거 아닌가
