// 복습완료💫(221117)
// 2022.07.10(Sun)
// 하샤드 수.js

// x의 자릿수의 합으로 x가 나누어져야함
// my way
function solution(x) {
  let result = 0;
  let strX = String(x); // '12'

  for (el of strX) {
    result += Number(el);
    // result: 3
  }

  return x % result === 0 ? true : false;
}

// other way
function solution(x) {
  return !(x % [...String(x)].reduce((a, b) => +a + +b));
  // [...String(x)] = ['1', '2']
  // [...String(x)].reduce((a, b) => +a + +b) = 3
  // 12 % 3 => 나누어 떨어지면 값이 0이므로 falsy값인데 true 반환해야 하므로 ! Not 연산자 추가해주기
}

// 앞에 ! 즉, NOT 연산가 붙은 이유는 나눠떨어져서 값이 0이면 falsy값인데 true를 return해야 하기 때문!
// 숫자(12) -> 문자열('12')을 spread 연산자를 이용해 배열로(['1', '2']) -> reduce로 각 원소 숫자변환 후 더하기(3)

console.log(solution(12)); // true
