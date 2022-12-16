// 8958 OX퀴즈
// OX 퀴즈의 결과를 일차원 배열로 입력받아 점수를 계산하는 문제
// 2022.12.16(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let result = 0;
  let score = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") score++;
    else score = 0;

    result += score;
  }
  console.log(result);
}
