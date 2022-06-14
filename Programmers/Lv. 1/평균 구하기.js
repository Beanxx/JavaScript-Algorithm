// 2022.06.14(Tues)
// 평균 구하기.js

// my way
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  answer /= arr.length;
  return answer;
}

// other way
function solution(arr) {
  // acc: 누적값, cur: 현재 값
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

// reduce를 사용하면 한 줄에 간단히 구현 가능 wow
