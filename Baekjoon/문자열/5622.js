// 5622 다이얼
// 규칙에 따라 문자에 대응하는 수를 출력하는 문제
// 2022.12.26(Mon)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .toLowerCase();

const arr = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
let result = 0;

// i는 입력값인 input의 각 문자들
for (let i of input) {
  // j는 arr의 각 원소값들
  for (let j of arr) {
    // j에 해당하는 알파벳이 있을 경우
    if (j.includes(i)) {
      result += arr.indexOf(j) + 3; // index 0은 숫자 2에 해당하므로 3초 즉, +3을 해줘야 함
    }
  }
}

console.log(result);

// 숫자 1 다이얼을 걸려면 2초
// 숫자 2 다이얼을 걸려면 2+1=3초 ... +1씩
