// 2022.07.23(Sat)
// 시저암호.js

// my way
function solution(s, n) {
  // A ~ Z: 65 ~ 90 | a ~ z: 97 ~ 122
  // s.charCodeAt(index): 문자 -> 숫자
  // String.fromCharCode(index): 숫자 -> 문자 (앞에 String에 해당 문자열을 넣는건 줄 알았는데 'String' 그대로 넣는거였다;)

  let result = "";

  for (let i = 0; i < s.length; i++) {
    let num = s.charCodeAt(i); // 각 문자를 아스키코드(숫자)로 변환

    // 결과값에 공백이 '$'로 출력되길래 뭐지 싶었는데 알고보니 공백도 아스키코드가 따로 있었던 것! (공백 ASCII CODE: 32)
    // 이전 코드에선 공백 처리 안 해주면 통과 안돼서 조건문 추가한건데 아래 else if문 조건을 더 상세히 고치니까 공백에 대한 조건문 없어도 통과되는듯..?
    if (num === 32) {
      result += "";
    } else if (num >= 65 && num <= 90) {
      // 대문자 처리

      num += n;

      // 대문자 아스키코드 범위에서 벗어나는 경우 다시 A(65)로 돌아오도록 처리
      if (num > 90) {
        num -= 26;
      }
    } else if (num >= 97 && num <= 122) {
      // 소문자 처리
      num += n;

      // 소문자 아스키코드 범위에서 벗어나는 경우 다시 A(65)로 돌아오도록 처리
      if (num > 122) {
        num -= 26;
      }
    }

    let newStr = String.fromCharCode(num); // 아스키코드(숫자) -> 다시 문자로 변환
    result += newStr;
  }
  return result;
}

// --------------------------------------------------------------

// other way (ASCII CODE없이 푸는 방법)
function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    // 공백 처리
    if (text == " ") {
      result += " ";
      continue;
    }
    let textArr = upper.includes(text) ? upper : lower; // 대소문자 구분
    let index = textArr.indexOf(text) + n; // n을 더한 index 처리

    // index가 textArr 즉, a-z | A-Z 까지의 알파벳 개수 => 26이상일 때 -26을 해줘서 다시 A부터 돌아가도록 처리
    if (index >= textArr.length) index -= textArr.length;
    result += textArr[index];
  }
  return result;
}
