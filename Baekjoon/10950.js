// 10950 A+B - 3
// 2022.09.10(Sat)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let sum = 0;
  const arr = input[i].split(" ");
  sum = Number(arr[0]) + Number(arr[1]);
  console.log(sum);
}
