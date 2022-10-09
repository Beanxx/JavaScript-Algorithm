// 2022.07.15(Fri)
// 문자열 내 마음대로 정렬하기.js

// my way
function solution(strings, n) {
  let sortStr = strings.sort(); // 비교한 문자가 같을 경우엔 사전순으로 정렬해야 하므로 애초에 첨부터 사전식 정렬인 sort() 정렬 먼저 해주기!
  return sortStr.sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

// sort((a,b) => a - b): 오름차순 정렬 함수 이용해서 푸는 방법!
// str.charCodeAt(index): 문자 -> 아스키 코드 즉 숫자로 변환해주는 메서드
// 숫자가 클수록 a-z중 z에 가까워짐
