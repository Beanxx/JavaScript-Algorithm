// first try - 2022.04.28(Thurs)
// second try - 2022.06.27(Mon)

// Q: 문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다.
//    이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.

// * 조건 *
// 이중 반복문 사용해야 함
// str.slice, str.substr, str.substring 사용 금지

//0: ''
//1: '' + f
//2: '' + f + fl
//...
//6: '' + f + fl + flo + flow + flowe + flower

// 변수 선언하고 빈 문자열 할당
// 이중반복문
// 첫번째 반복문 -> 반복 횟수를 결정 -> 'flower' -> 문자의 개수만큼 반복
// 두번째 반복문 -> 몇 개의 문자를 더해줄건지 결정

function makeMarginalString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j++) {
      // j <= i 조건식인 이유는 문자열의 길이가 몇번째 반복이냐에 맞춰서 하나씩 증가하므로.
      // 예를 들어서 'abc'의 두번째 반복에선 문자열 길이가 2인 'ab'가 result에 저장됨
      result += str[j];
    }
  }
  return result;
}
