// 복습완료💫(221118)
// 2022.06.28(Tues)
// 가운데 글자 가져오기.js

// my way
function solution(s) {
  // 문자열 길이가 홀수일 때
  if (s.length % 2 === 1) return s[parseInt(s.length / 2)];
  // 문자열 길이가 짝수일 때
  else return s[s.length / 2 - 1] + s[s.length / 2];
}

// other way
function solution(s) {
  // 길이가 짝수이면 2개, 홀수이면 1개 잘라내기
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
// ex1. 'abcdef' 짝수 길이 ->  Math.ceil(s.length / 2) = Math.ceil(3) = 3 - 1 = 2
// => index 2부터 2 길이만큼 출력
// ex2. 'abcde' 홀수 길이 -> Math.ceil(s.length / 2) = Mth.ceil(2.5) = 3 - 1 = 2
// => index 2부터 1 길이만큼 출력

// s.substr(start, length): start index부터 length 길이만큼 string을 잘라내어 반환하는 함수
// s.substring(start, end)
// Math.ceil(): 소수점 이하 올림

// 메서드와 삼항연산자의 조합은 한 줄로 구현 가능가능 굳..ㅎ

console.log(solution("abcde")); // 'c'
console.log(solution("qwer")); // 'we'
