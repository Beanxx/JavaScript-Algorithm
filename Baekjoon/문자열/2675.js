// 2675 문자열 반복
// 각 문자를 반복하여 출력하는 문제
// 2022.12.21(Wed)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let result = "";
  const repeats = input[i].split(" ")[0]; // 3
  const str = input[i].split(" ")[1]; // ABC
  for (let j = 0; j < str.length; j++) {
    result += str[j].repeat(repeats);
    // AAA
    // AAABBB
    // AAABBBCCC
  }
  console.log(result); // AAABBBCCC
}
