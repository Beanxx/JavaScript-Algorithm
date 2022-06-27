// first try - 2022.04.28(Thurs)
// second try - 2022.06.27(Mon)

// Q: 수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.

// * 조건 *
// while 반복문 사용해야 함
// for문 사용 금지
// 숫자 사이를 '-'로 구분

function makeDigits2(num) {
  let result = "";
  let i = 1;

  while (i <= num) {
    result += `${i}-`;
    i++;
  }

  return result.slice(0, -1); // 그냥 result 리턴시 마지막에 '-'가 붙은 채로 리턴됨
  // ex. '1-2-3-4-'
  // result.slice(0, -1): 두번째 인자 -1은 마지막 문자열을 의미하므로 마지막 문자열 전까지 즉, 마지막 문자열인 '-'을 제외한 문자열 리턴
}

// 간단히 문제였지만 while문이 익숙치 않아서 조건문 작성하는 곳에서 좀 헤맸다.
