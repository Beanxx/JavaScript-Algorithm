// 2022.07.11(Mon)
// 콜라츠 추측.js

// my way
function solution(num) {
  // 작업 500번 반복할 때까지 순회
  for (let count = 0; count <= 500; count++) {
    // num이 1이 되면 작업 끝-
    if (num === 1) {
      return count;
    } else {
      // num이 아직 1이 되지 않았으면
      // 짝수면
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        // 홀수면
        num = num * 3 + 1;
      }
    }
  }
  return -1;
}

// 괜히 (num *= 3)+1 으로 줄여 썼다가 계속 실패하길래 이 부분을 정직하게 고쳐쓰니까 통과쓰..

// ----------------------------------------------------------

// other way
function solution(num) {
  let count = 0;

  // num이 아직 1이 아니면서 작업 반복 횟수가 500이 되지 않을 때까지 반복
  while (num !== 1 && count !== 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }

  // num이 1이면 작업횟수 count return | num이 1이 아닌데 while 반복문을 탈출했다는 것은 작업 횟수가 500번을 넘었다는 뜻이므로 -1 return
  return num === 1 ? count : -1;
}
