// 복습완료💫(221118)
// 2022.09.26(Mon)
// 월간 코드 챌린지 시즌1_Lv.1
// 내적.js

// my way
// a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

// other way
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
// reduce 사용시 cur 즉, 현재값 매개변수 자리에 _를 작섣하면 매개변수를 사용하지 않아도 되는? 고런 느낌쓰

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2
