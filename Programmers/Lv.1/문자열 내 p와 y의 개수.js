// 복습완료💫(221117)
// 2022.06.20(Mon)
// 문자열 내 p와 y의 개수.js

function solution(s) {
  let lowers = s.toLowerCase(); // 소문자로 변환
  let pcount = 0; // p 개수
  let ycount = 0; // y 개수

  for (let el of lowers) {
    if (el === "p") pcount++;
    else if (el === "y") ycount++;
  }

  return pcount === ycount ? true : false;
}

// other way
function solution(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
// match(): 문자열이 정규식과 매치되는 부분을 검색
// /ig: 전역으로 대소문자 구분 없이 탐색
// s.match(/p/ig).length: s 문자열에서 대소문자 구분없이 'p'와 같은 부분을 검색해서 그에 대한 길이

// 221117 복습하는데 테스트케이스가 추가된건지 이 풀이는 런타임에러가 난다.
// 그래도 정규식 공부하는데는 도움이 되는 코드이므로 그냥 남겨놓기!

console.log(solution("pPoooyY")); // true
