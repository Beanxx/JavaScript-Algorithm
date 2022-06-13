// 10798_세로읽기.js

// Success!! (40m)
// 처음에 반복문에서 arr.length까지 설정해줘서 'hweo' 까지 출력
// -> for문 내의 length 범위를 바꿔보자
// -> 배열의 문자열 요소 중 최대 length를 for문의 length 범위로 변경

const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// my way
// Math.max(arr[i])로 요소 최대 길이를 구하려고 했으나
// i를 무턱대고 쓸 수 없어서 map 방법 이용
let newLength = Math.max(...arr.map((i) => i.length));
let result = "";

for (let i = 0; i < newLength; i++) {
  for (let j = 0; j < arr.length; j++) {
    // 최대 길이를 넘을 경우 테스트 결과에 undefined로 찍히는 문제 처리
    if (arr[j][i] === undefined) {
      result += "";
    } else {
      result += arr[j][i];
    }
  }
}
console.log(result);

// for문 안에 if문 대신
// result += arr[j][i] || ""
// 위의 한 줄만 쓰면 코드를 더 간결하게 풀 수 있다.
