// 2022.09.17(Sat)
// 나머지가 1이 되는 수 찾기.js
// 월간 코드 챌린지 시즌3_Lv.1

// my way
function solution(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      result = i;
      break;
    }
  }
  return result;
}

// other way
function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

// 굳이 변수 따로 지정 안하구 바로 i를 return하면 되는데 왜 굳이구지 변수 따로 지정해서 풀었을까나..?
