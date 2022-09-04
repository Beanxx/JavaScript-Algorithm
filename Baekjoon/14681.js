// 14681 사분면 고르기
// 2022.09.04(sun)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const a = input[0];
  const b = input[1];

  if (a > 0 && b > 0) {
    console.log("1");
  } else if (a < 0 && b > 0) {
    console.log("2");
  } else if (a < 0 && b < 0) {
    console.log("3");
  } else {
    console.log("4");
  }

  process.exit();
});

// 여느때와 같이 아래처럼 fs 모듈 이용해서 풀었는데 계속 런타임 에러..;
// 찾아보니까 위처럼  readline 모듈을 이용해서 풀어야 한다구 한닷

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// const a = parseInt(input[0]);
// const b = parseInt(input[1]);

// if (a > 0 && b > 0) {
//   console.log("1");
// } else if (a < 0 && b > 0) {
//   console.log("2");
// } else if (a < 0 && b < 0) {
//   console.log("3");
// } else {
//   console.log("4");
// }
