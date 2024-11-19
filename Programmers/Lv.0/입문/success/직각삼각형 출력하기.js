// 복습완료💫(221116)
// 2022.10.13(Thurs)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  // => here!
  let n = Number(input[0]);

  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
});

// 기본 코드가 있어서 당황했지만 'close' 함수 부분에 코드를 작성하면 된다!
// 요기선 return문 말고 console.log()로 처리해줘야 함
// 백준 별찍기 문제랑 유사한 문제!
