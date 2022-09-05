// 25304 영수증
// 2022.09.05(Mon)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const total = parseInt(input[0]);
const n = parseInt(input[1]);
let sum = 0;

// 금액과 개수는 index 2부터 등장하므로 i는 2부터 시작!
for (let i = 2; i <= n + 1; ++i) {
  // input[2]~input[n+1]
  // 공백 기준으로 split(' ')로 잘라서 arr 배열에 저장
  // ex. 20000 5
  // ex. arr = [20000, 5]
  const arr = input[i].split(" ");
  // arr[0]: 금액, arr[1]: 개수
  sum += arr[0] * arr[1];
}

console.log(total === sum ? "Yes" : "No");

// 백준 형식에 맞춰서 풀려니까 좀 까다로웠던 문제쓰,,
