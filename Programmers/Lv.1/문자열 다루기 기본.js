// 2022.06.29(Wed)
// 문자열 다루기 기본.js

// my way
function solution(s) {
  // 문자열 s 길이가 4 혹은 6이 아닐 경우 무조건 false return
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i])) === true) {
      // 숫자가 아니라면
      return false;
    }
  }
  return true;
}

// isNaN() -> true: 숫자 아님, false: 숫자임

// 굳이 문자열을 배열 안의 각 요소로 쪼개서 판별하지 않아도 됨!
// 첨엔 split()을 이용하여 문자열을 하나씩 쪼개서 배열로 만든 후, 각 요소가 숫자인지 판별했는데 굳이 그럴 필요가 없다.

// ------------------------------------------------------

// other way 1 (정규 표현식 사용)
function solution(s) {
  const regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

// * 정규식 *
// /\d/ 숫자
// /^\d/ 숫자로 시작
// /^\d{4}/ 숫자로 시작하면서 길이 4
// /^\d{4}$/ 숫자로 시작하면서 길이 4인 숫자로 끝

// regex.test(s): 주어진 문자열 s가 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환

// ------------------------------------------------------

// other way 2 (삼항 연산자 사용)
function solution(s) {
  // 문자열 길이가 4 또는 6이면 isNAN(s) 즉, 숫자가 아닌 것의 다시 아닌 것이니까 숫자임 -> true,
  // 문자열 길이가 4 또는 6 아니면 false
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}
