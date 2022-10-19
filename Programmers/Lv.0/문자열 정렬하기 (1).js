// 2022.10.19(Wed)

// my way
function solution(my_string) {
  let answer = [];

  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) {
      answer.push(Number(my_string[i]));
    }
  }

  answer = answer.sort((a, b) => a - b);
  return answer;
}

// isNaN(): 숫자면 false 반환

// other way (정규 표현식 사용)
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

// /\d/: 숫자와 매칭
// match(): 일치하는 모든 문자를 담은 배열 반환 (일치하지 않으면 null 반환
