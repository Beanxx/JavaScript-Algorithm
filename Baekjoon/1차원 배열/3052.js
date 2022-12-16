// 3052 나머지
// 배열을 활용하여 서로 다른 값의 개수를 찾는 문제
// 2022.12.16(Fri)

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = [];

for (let el of input) {
  let temp = el % 42;
  if (!arr.includes(temp)) arr.push(temp);
}
console.log(arr.length);

// 아니 계속 실패해서 뭐가 문제지 했는데 알고보니 input 변수에서 trim()을 추가해주니까 됐다.. 왜지..?
// 백준도 js 편하게 지원해주세요...ㅜ
