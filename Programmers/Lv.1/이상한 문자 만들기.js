// 복습완료💫(221119)
// 2022.07.08(Fri)
// 이상한 문제 만들기.js

// my way (이중 for문)
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로
function solution(s) {
  let result = "";
  let newS = s.split(" "); // ['try', 'hello', 'world']

  for (let el of newS) {
    // 각 단어들 크게 순회 -> el: 'try', 'hello', 'world'
    for (let i = 0; i < el.length; i++) {
      // 각각의 단어들의 문자들 순회 -> 't', 'r', 'y' ...
      // 짝수번째 알파벳은 대문자로
      if (i % 2 === 0) result += el[i].toUpperCase();
      // 홀수번째 알파벳은 소문자로
      else result += el[i].toLowerCase();
    }
    result += " "; // 각 단어들의 순회가 끝날 때 마다 다시 공백 처리
  }
  return result.slice(0, -1); // 마지막 공백 제거를 위해 마지막 문자열 제외한 나머지 자르기
}

// --------------------------------------------------------------

// other way 1 (정규 표현식)
function solution(s) {
  return s
    .toUpperCase() // 일단 문자열을 모두 대문자로 변환 (문자열 길이가 홀수인 문자열 마지막은 무조건 대문자임을 고려)
    .replace(/(\w)(\w)/g, (a) => a[0].toUpperCase() + a[1].toLowerCase());
  // 정규표현식으로 2글자씩 묶어서 처리 -> 문자열 길이가 홀수이면 마지막 하나가 남음 (위에서 대문자 변환 처리)
  // 2글자 중 1번째 글자는 대문자(index: 0, 2, 4 ...)
  // 2글자 중 2번째 글자는 소문자(index: 1, 3, 5 ...)
}
// \w: [A-Za-z0-9_] <-  영문자, 숫자, 밑줄
// /(\w)(\w)/g: 대소문자 구분 없이 2글자씩 선택

// --------------------------------------------------------------

// other way 2 (이중 map)
function solution(s) {
  return s
    .split(" ") // ['try', 'hello', 'world']
    .map(
      (el) =>
        el
          .split("") // ['t', 'r', 'y']
          .map((el, index) =>
            index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
          )
          .join("") // 각각 문자들을 다시 문자열로 합치기
    )
    .join(" "); // 공백으로 나눠진 문자열 최종적으로 합치기
}

// 난 어김없이 for문과 if문을 이용해서 처리했는데 정규표현식과 이중 map 표현도 쓸 수 있구나 했던 신박한 방법쓰,,

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
