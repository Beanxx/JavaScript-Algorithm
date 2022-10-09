// 2022.06.20(Mon)
// 문자열 내 p와 y의 개수.js

function solution(s) {
  let lowers = s.toLowerCase();
  let pcount = 0;
  let ycount = 0;

  for (let i = 0; i < lowers.length; i++) {
    if (lowers[i] === "p") {
      pcount += 1;
    } else if (lowers[i] === "y") {
      ycount += 1;
    }
  }

  if (pcount === ycount) {
    return true;
  } else if (pcount === 0 && ycount === 0) {
    return true;
  } else {
    return false;
  }
}

// other way
function solution(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}

// 다른 사람 풀이 보면 진짜 신기하다.. 어떻게 이런 생각을 할까
// 난 대략 20줄에 할 줄 아는게 for, if문 사용 밖에 없다니 다른 의미로 놀라울 따름;

// 생각보다 정규 표현식을 사용하면 간단히 해결 가능한 문제가 많은 것 같다.
// match(): 문자열이 정규식과 매치되는 부분을 검색
// /ig: 전역으로 대소문자 구분 없이 탐색
// s.match(/p/ig).length: s 문자열에서 대소문자 구분없이 'p'와 같은 부분을 검색해서 그에 대한 길이
