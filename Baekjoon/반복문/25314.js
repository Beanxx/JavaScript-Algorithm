// 25314 코딩은 체육과목 입니다
// 2023.04.05(Wed)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(require("fs").readFileSync(filePath).toString());

let result = "";

for (let i = 0; i < input; i += 4) {
  result += "long ";
  if (i === input - 4) result += "int";
}

console.log(result);
