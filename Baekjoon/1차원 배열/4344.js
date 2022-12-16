// 4344 평균은 넘겠지
// 과연 그럴까요?
// 2022.12.16(Fri)

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const length = Number(input[0]);

for (let i = 1; i <= length; i++) {
  let sum = 0; // 각 줄마다의 학생들의 점수의 합
  let count = 0; // 평균 점수보다 점수가 높은 학생의 수

  let arr = input[i].split(" ").map((el) => Number(el)); // 배열로 만들기

  for (let j = 1; j <= arr[0]; j++) {
    sum += arr[j]; // 각 줄마다 학생들의 점수 누적
  }
  const avg = sum / arr[0]; // 평균 구하기

  for (let k = 1; k <= arr[0]; k++) {
    // 각 줄의 학생 점수가 각 평균보다 크면 count +1
    if (arr[k] > avg) count++;
  }
  console.log(`${((count / arr[0]) * 100).toFixed(3)}%`);
}

// toFixed(3): 소수점 3자리 수까지 출력 제한
