// 1152 단어의 개수
// 단어의 개수를 구하는 문제
// 2022.12.21(Wed)

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

// if (input[0] === "") console.log(0);
// else console.log(input.length);

console.log(input[0] === "" ? 0 : input.length);

// 문자열이 공백일 경우 0을 출력하도록 하는 조건을 작성하지 않으면 통과하지 못하므로 예외 처리를 해줘야 한다!
// console.log 내에서 삼항연산자를 사용하면 코드 훨씬 간결해짐~!
