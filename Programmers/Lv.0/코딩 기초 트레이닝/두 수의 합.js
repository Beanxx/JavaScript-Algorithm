// 두 수의 합.js
// 2024.07.11(Thurs)

function solution(a, b) {
  return String(BigInt(a) + BigInt(b));
}

// 너무 쉽잖아하고 String(+a + +b); 이렇게 구현했다가
// 테스트 2 케이스에서 return값이 '305793246910280500000' 이렇게 뒷부분을 0으로 바껴서 나옴,

// JS에서는 64bit 부동 소수점 형식으로 표현 가능한 최댓값으로 변환하는데
// 테스트 2의 a, b의 합이 이보다 커서 생긴 문제로 BigInt로 변환 후 연산을 해야 통과한다

console.log(solution("582", "734")); // "1316"
console.log(solution("18446744073709551615", "287346502836570928366")); // "305793246910280479981"
