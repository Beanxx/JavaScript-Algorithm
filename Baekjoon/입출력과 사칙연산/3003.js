// 3003 킹, 퀸, 룩, 비숍, 나이트, 폰
// 2022.08.20(Sat)

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const a = 1 - parseInt(input[0]);
const b = 1 - parseInt(input[1]);
const c = 2 - parseInt(input[2]);
const d = 2 - parseInt(input[3]);
const e = 2 - parseInt(input[4]);
const f = 8 - parseInt(input[5]);

console.log(a, b, c, d, e, f);
