// 복습완료💫(221119)
// 2022.07.23(Sat)
// 시저암호.js

// my way
function solution(s, n) {
  // A ~ Z: 65 ~ 90 | a ~ z: 97 ~ 122
  // s.charCodeAt(index): 문자 -> 어스키코드(숫자)
  // String.fromCharCode(index): 숫자 -> 문자 (앞에 String에 해당 문자열을 넣는건 줄 알았는데 'String' 그대로 넣는거였다;)

  let result = "";

  for (let i = 0; i < s.length; i++) {
    let num = s.charCodeAt(i); // 각 문자를 아스키코드(숫자)로 변환

    // num이 대문자인 경우
    if (num >= 65 && num <= 90) {
      num += n;
      // 대문자 아스키코드 범위에서 벗어나는 경우 다시 A(65)로 돌아오도록 처리
      if (num > 90) num -= 26;

      // num이 소문자인 경우
    } else if (num >= 97 && num <= 122) {
      num += n;
      // 소문자 아스키코드 범위에서 벗어나는 경우 다시 A(65)로 돌아오도록 처리
      if (num > 122) num -= 26;
    }

    let newStr = String.fromCharCode(num); // 아스키코드(숫자) -> 다시 문자로 변환
    result += newStr;
  }
  return result;
}

// 결과값에 공백이 '$'로 출력되길래 뭐지 싶었는데 알고보니 공백도 아스키코드가 따로 있었던 것! (공백 ASCII CODE: 32)
// 이전 코드에선 공백 처리 안 해주면 통과 안돼서 조건문 추가한건데 아래 else if문 조건을 더 상세히 고치니까 공백에 대한 조건문 없어도 통과되는듯..?

// --------------------------------------------------------------

// other way (ASCII CODE없이 푸는 방법)
function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let el of s) {
    // 공백 처리
    if (el == " ") {
      result += " ";
      continue;
    }

    // el이 대문자 배열에 포함되면 대문자, 아니면 소문자
    let textArr = upper.includes(el) ? upper : lower;
    let index = textArr.indexOf(el) + n; // n을 더한 index 처리

    // index가 textArr 즉, a-z | A-Z 까지의 알파벳 개수 => 26이상일 때 -26을 해줘서 다시 A부터 돌아가도록 처리
    if (index >= textArr.length) index -= textArr.length;
    result += textArr[index];
  }
  return result;
}

console.log(solution("a B z", 4)); //	"e F d"
