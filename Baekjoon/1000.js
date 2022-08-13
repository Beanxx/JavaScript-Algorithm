// 1000 A+B
// 2022.08.13(Sat)

// JS로 백준 첨부터 다시 스타트~!

// node.js로 제출하면서 아래 코드 추가해줘야함!
const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

// 결과 출력
console.log(a + b);

// Baekjoon - Node.js 채점 로직
// 1. input 값을 문자열로 변환 후 split(' ')를 통해 공백을 기준으로 잘라서 배열에 저장
// 2. input은 즉, 배열이므로 a, b가 각각의 input 값에 접근하려면 input[0] 요런 식으로 index를 통해 접근해야 함
