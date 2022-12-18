// 10809 알파벳 찾기
// 단어에서 각 알파벳이 처음 등장하는 위치를 찾는 문제
// 2022.12.18(Sun)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

let result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
  // 알파벳이 없을 경우 indexOf: -1
}

console.log(result.join(" "));

// String.fromCharCode(아스키코드값): 아스키코드 -> 문자열
// 97: a ~ 122: z
