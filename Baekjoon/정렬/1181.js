// 1181 단어 정렬
// 단어의 순서를 정의하여 정렬하는 문제
// 2023.01.28(Sat)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.shift(); // 맨 앞 입력값인 단어의 개수 N 제거

const arr = [...new Set(input)]; // 중복 제거 후 배열로 변환

// 길이순으로 먼저 정렬 후, 길이가 같으며 사전 순(내림차순)으로 정렬
arr.sort((a, b) => a.length - b.length || a.localeCompare(b)); // 정렬

console.log(arr.join("\n"));

// localeCompare(): 인수로 지정된 문자열이 정렬상 string 객체의 문자열 뒤에 있으면 음수, 그 반대의 경우는 양수, 동등한 경우에는 0을 반환
