// // 2022.09.30(Fri)
// 최대값과 최솟값.js

function solution(s) {
  let result = "";
  s = s.split(" ");

  let max = Math.max(...s);
  let min = Math.min(...s);

  result += `${min} ${max}`;
  return result;
}

// s = [1, 2, 3, 4, 5] 라고 가정했을 때
// Math.max(...s) -> 실제론 Math.max(1, 2, 3, 4, 5)가 실행됨

// other way
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}

// 거의 같은 방법이지만 두배나 단축해서 구현 가능가능
