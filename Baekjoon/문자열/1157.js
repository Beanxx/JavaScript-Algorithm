// 1157 단어 공부
// 주어진 단어에서 가장 많이 사용된 알파벳을 출력하는 문제
// 2022.12.26(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase();

let obj = {};
let mostCount = 0; // 가장 많이 사용된 알파벳 등장 횟수
let mostChar = ""; // 가장 많이 사용된 알파벳 문자

for (let i = 0; i < input.length; i++) {
  // 처음 등장했으면 값을 1로 할당
  if (!obj[input[i]]) obj[input[i]] = 1;
  else obj[input[i]]++; // 이미 등장한 알파벳인 경우 값에 +1

  // 최댓값 바꾸기
  if (obj[input[i]] > mostCount) {
    mostCount = obj[input[i]];
    mostChar = input[i];
  }
}

let temp = 0;
for (let el of Object.values(obj)) {
  if (el === mostCount) temp++;
}

// 가장 많이 등장한 알파벳이 여러개일 경우 처리해주기
if (temp > 1) mostChar = "?";

console.log(mostChar);
