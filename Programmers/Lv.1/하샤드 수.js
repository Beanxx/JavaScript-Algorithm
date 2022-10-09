// 2022.07.10(Sun)
// 하샤드 수.js

// my way
function solution(x) {
  let strX = String(x);
  let result = 0;

  for (el of strX) {
    result += Number(el);
  }

  if (x % result === 0) {
    return true;
  } else {
    return false;
  }
}

// other way
function solution(x) {
  return !(
    x %
    String(x)
      .split("")
      .reduce((a, b) => +a + +b)
  );
}

// 앞에 ! 즉, NOT 연산가 붙은 이유는 나눠떨어져서 값이 0이면 falsy값인데 true를 return해야 하기 때문!
// 숫자(18) -> 문자열('18') -> split('')으로 쪼개서 배열로(['1', '8']) -> reduce로 각 원소 숫자변환 후 더하기(9)
