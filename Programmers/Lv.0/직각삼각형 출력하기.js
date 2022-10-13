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
  // -> here!
  for (let i = 1; i <= input[0]; i++) {
    console.log("*".repeat(i));
  }
});

// 기본 코드가 있어서 당황했지만 'close' 함수 부분에 코드를 작성하면 된다!
// 요기선 return문 말고 console.log()로 처리해줘야 함
