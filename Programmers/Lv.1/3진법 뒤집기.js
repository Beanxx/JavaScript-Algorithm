// 2022.09.29(Thurs)
// 월간 코드 챌린지 시즌1_Lv.1
// 3진법 뒤집기.js

// my way
function solution(n) {
  let result = "";

  // 3진법으로 변환
  n = n.toString(3);

  // 앞뒤로 뒤집기
  for (let i = n.length - 1; i >= 0; i--) {
    result += n[i];
  }

  // 3진법 -> 10진수로 변환
  result = parseInt(result, 3);

  return result;
}

// other way
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};

// 여러 줄에 쓴걸 parseInt() 안에 toString(), reverse(). join() 써서 한 줄 가능가능..
// 나는 for문으로 문자열을 뒤집었는데 reverse() 메소드 썼으면 더 쉽게 풀었을 듯 하단
