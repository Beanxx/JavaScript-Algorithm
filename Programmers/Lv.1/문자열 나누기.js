// 2022.12.13(Tues)
// 문자열 나누기.js

// my way
function solution(s) {
  let answer = 0;
  let x = ""; // 첫 글자
  let xCount = 0; // 첫 글자에 해당하는 x의 개수
  let notXCount = 0; // x가 아닌 다른 글자들 개수

  for (let el of s) {
    if (!x) x = el; // x가 존재하지 않는다면

    if (x === el) xCount++; // 첫글자인 x와 el가 같다면 x 개수 +1
    else notXCount++; // x와 다른 글자라면 다른 글자 개수 +1

    // x 글자 개수와 다른 글자 개수가 같다면 answer +1 해준 후, 나머지 모두 초기화헤주기!
    if (xCount === notXCount) {
      answer++;
      x = "";
      xCount = 0;
      notXCount = 0;
    }
  }

  // 위에서 초기화되지 않은 채 남은 글자가 존재한다면 answer +1
  if (xCount !== 0) answer++;

  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
