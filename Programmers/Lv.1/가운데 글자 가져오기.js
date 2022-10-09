// 2022.06.28(Tues)
// 가운데 글자 가져오기.js

// my way
function solution(s) {
  if (s.length % 2 === 1) {
    // 문자열 길이가 홀수일 때
    return s[parseInt(s.length / 2)];
  } else {
    // 문자열 길이가 짝수일 때
    return s[parseInt(s.length / 2) - 1] + s[parseInt(s.length / 2)];
  }
}

// other way
function solution(s) {
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
