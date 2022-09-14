// 10951 A+B - 4
// 2022.09.14(Wed)

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let array = input[i].split(" ");
  let result = Number(array[0]) + Number(array[1]);
  console.log(result);
}

// trim(): 문자열 양 끝 공백 제거
// trim()을 변수 input에 안 써주면 for문에서 i 범위를 input.length - 1을 해주어야 통과가 된다,,
// 왜 이렇게 해줘야 하는지 이유는 모르겠다..ㅠ 걍 백준 이슈인감
