// 2022.06.22(Wed)
// 자릿수 더하기.js

// my way
function solution(n) {
  // 정수 -> 문자열 -> 문자열 쪼개기 -> 문자열 요소를 가진 배열 -> 문자열 요소를 숫자로 다시 변환 후 다 더하기
  let stringN = String(n);
  let newN = stringN.split("");
  let result = 0;
  for (let i = 0; i < newN.length; i++) {
    result += Number(newN[i]);
  }
  return result;
}

// other way
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);
}

// 나는 4번 정도의 변환 과정을 거쳐 정수를 각 자릿 수를 더한 형태로 만들었는데
// 다른 사람 풀이 보니까 reduce 사용함년 한 줄에 깔꼼하게 구현 가능가능
// 아직도 reduce 사용 법이 익숙하지 않은데 많이 활용해보도록 하자!
