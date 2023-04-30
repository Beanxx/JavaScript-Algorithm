// 2023.05.01(Mon)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log(`!@#$%^&*(\\'"<>?:;`);
});

// \를 출력하려면 \\으로 써줘야 함
