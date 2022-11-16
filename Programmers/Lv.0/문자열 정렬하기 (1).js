// 복습완료💫(221116)
// 2022.10.19(Wed)

// my way
function solution(my_string) {
  let answer = [];
  for (let el of my_string) {
    // 원소가 숫자라면 push
    if (!isNaN(el)) answer.push(Number(el));
  }
  return answer.sort((a, b) => a - b); // 오름차순 정렬
}

// isNaN(): 숫자면 false 반환

// other way (정규 표현식 사용)
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
  // 숫자만 담은 배열을 오름차순 정렬 후, 원소들을 숫자로 변환해주기!
}

// /\d/: 숫자와 매칭
// match(): 일치하는 모든 문자를 담은 배열 반환 (일치하지 않으면 null 반환

console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
