// 25206_너의 평점은
// 2024.11.30(Sat)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(`\n`);

let OBJ = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let filteredArr = input.filter((el) => el.split(" ")[2] !== "P");
let totalArr = filteredArr.map((el) => el.split(" ")[1]);
let total = totalArr.reduce((acc, cur) => acc + +cur, 0); // 학점 총합

let sumArr = filteredArr.map((el) => el.split(" ")[1] * OBJ[el.split(" ")[2]]); // 학점 × 과목평점
let sum = sumArr.reduce((acc, cur) => acc + cur, 0);

// (학점 × 과목평점)의 합
console.log((sum / total).toFixed(6)); // 소수점 6자리까지 표시
