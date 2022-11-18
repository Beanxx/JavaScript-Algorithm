// 복습완료💫(221118)
// 2022.09.25(Sun)
// 월간 코드 챌린지 시즌3_Lv.1
// 없는 숫자 더하기.js

// my way
function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = 0;

  for (let el of arr) {
    // numbers에 포함되지 않는 경우
    if (!numbers.includes(el)) result += el;
  }
  return result;
}

// 아래처럼 풀면 내가 0~9을 담은 배열을 따로 선언해주지 않아도 된댜 굳!

// other way 1
function solution(numbers) {
  let result = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) result += i;
  }
  return result;
}

// other way 2
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

// 0~9를 모두 더하면 45인데 numbers 배열에 있는 수들을 45에서 모조리 빼면 원하는 결과가 나옴,, wow
