// 2022.06.20(Mon)
// 핸드폰 번호 가리기.js

// my way
function solution(phone_number) {
  let result = "";
  for (let i = 0; i < phone_number.length; i++) {
    if (i <= phone_number.length - 5) {
      result += "*";
    } else {
      result += phone_number[i];
    }
  }
  return result;
}

// other way

function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

// replace(): 문자열에서 일치하는 부분을 탐색하고, 그 부분을 대체 문자열로 바꿈
// ** 정규 표현식 **
// \d: 숫자
// \D: 숫자 X
// g: 전역 탐색(모든 검색 결과를 배열로 반환)
// i: 대소문자 구분 사용 X
// (?=): 앞쪽 일치
// \d{4}: 숫자 4번 반복되는 문자열

// 난 주저리주저리 for, if문으로 풀었는데
// 정규 표현식을 이용하면 한 줄 가능.. wow
