// 복습완료💫(221118)
// 2022.09.29(Thurs)
// 월간 코드 챌린지 시즌1_Lv.1
// 3진법 뒤집기.js

// my way
function solution(n) {
  let result = "";
  // 3진법으로 변환
  n = n.toString(3); // 45 -> 1200

  // 앞뒤로 뒤집기
  for (let i = n.length - 1; i >= 0; i--) {
    result += n[i]; // 0021
  }
  // 3진법 -> 10진수로 변환
  result = parseInt(result, 3); // 7
  return result;
}

// other way
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
  // [...n.toString(3)]: [ '1', '2', '0', '0' ]
  // [...n.toString(3)].reverse(): [ '0', '0', '2', '1' ]
  // [...n.toString(3)].reverse().join(''): 0021
  // parseInt(0021, 3): 7
};

// 여러 줄에 쓴걸 parseInt() 안에 toString(), reverse(). join() 써서 한 줄 가능가능..
// 나는 for문으로 문자열을 뒤집었는데 reverse() 메소드 썼으면 더 쉽게 풀었을 듯 하단

console.log(solution(45)); // 7
