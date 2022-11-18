// 복습완료💫(221118)
// 2022.09.24(Sat)
// 월간 코드 챌린지 시즌2_Lv.1
// 음양 더하기.js

// my way
function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) result += absolutes[i];
    else result -= absolutes[i];
  }
  return result;
}

// other way 1
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
// acc(초기값): 0
// 1. val(현재값)에 (signs[i]이 true면 1, 아니면(false) -1) 곱해주기
// 2. 초기값에 누적해서 위의 값 더해주기

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
