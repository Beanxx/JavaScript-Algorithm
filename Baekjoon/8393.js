// 8393 합
// 2022.09.09(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);

// 바보같이 7번째 줄에서 const sum 으로 초기화해서 에러가 발생헀다..
// const로 지정하고 10번째 줄에서 sum을 변경하려니 에러가 날 수 밖에,,,
