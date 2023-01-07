// 2941 크로아티아 알파벳
// 조건에 맞는 문자열을 찾는 문제
// 2023.01.07(Sat)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");
input = input[0];

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let el of alphabet) {
  input = input.split(el).join("*");
}

console.log(input.length);
