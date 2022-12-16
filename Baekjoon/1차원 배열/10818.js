// 10818 최소, 최대
// 최솟값과 최댓값을 찾는 문제
// 2022.12.16(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = input[1].split(" ");
let min = Math.min(...arr);
let max = Math.max(...arr);

console.log(min, max);
