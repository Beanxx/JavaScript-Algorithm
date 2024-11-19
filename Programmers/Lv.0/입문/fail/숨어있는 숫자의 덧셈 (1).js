// 241119 다시 풀어야 하는 이유 : 숫자만 추출하는 정규 표현식을 검색해서 품
// 복습완료💫(221106)
// 2022.10.19(Wed)

// my way
function solution(my_string) {
  let answer = 0;
  let arr = my_string.match(/\d/g).map((n) => Number(n)); // [1, 2, 3, 4]
  // my_string.match(/\d/g) => ['1', '2', '3', '4']

  for (let el of arr) {
    answer += el;
  }

  return answer;
}

// 241119
function solution(my_string) {
  let regExp = /[\d]/g;
  let numStr = my_string.match(regExp);
  return numStr.reduce((acc, cur) => acc + Number(cur), 0);
}

// 간단한 정규표현식은 찾아보지 않고 쓸 수 있도록 연습,.,

// other way
function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, cur) => acc + Number(cur), 0);
}

// .match(/\d/g): 숫자인 문자열을 추출하여 배열로 반환

console.log(solution("aAb1B2cC34oOp")); // 10
