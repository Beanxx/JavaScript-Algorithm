// first try - 2022.05.11(Wed)
// second try - 2022.07.01(Fri)

// Q: 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

// * 주의 *
// 띄어쓰기는 제외
// 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴
// 빈 문자열을 입력받은 경우, 빈 문자열 리턴

// 입력: 'apples not oranges'
// 출력: 'p'

function mostFrequentCharacter(str) {
  let mostCount = 0; // 가장 많이 반복되는 수의 반복 횟수
  let mostChar = ""; // 가장 많이 반복되는 문자
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // 문자가 띄어쓰기(공백)이면
      continue; // continue -> 건너 뜀 / break -> 여기서 반복문 끝!
    }

    if (obj[str[i]] === undefined) {
      // 아직 str[i]인 key가 obj 객체에 없다면
      obj[str[i]] = 0; // 일단 value를 0으로 할당해주기
    }
    obj[str[i]]++; // 0으로 할당해주고 난 뒤, 한번 등장한 꼴이므로 +1
    // 객체의 값이 mostCount보다 큰게 나왔다 -> mostCount 교체
    // mostChar도 교체
    if (obj[str[i]] > mostCount) {
      // 즉, obj = {mostChar: mostCount} 으로 생각하기
      // 그러면 value가 mostCount 즉, 반복횟수가 되므로 이를 mostCount와 비교해서 더 크면
      mostCount = obj[str[i]]; // 해당 값을 mostCount에 할당
      mostChar = str[i]; // 이에 해당 하는 문자열 str[i]는 가장 많이 반복되는 '문자'가 됨
    }
  }
  return mostChar;
}
