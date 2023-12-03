// 2023.12.03(Sun)

// my way
function solution(my_string, alp) {
  let result = "";

  for (let n of my_string) {
    if (n === alp) result += n.toUpperCase();
    else result += n;
  }

  return result;
}

// 오랜만에 for문을 쓰는지라 첨엔 for...in문으로 반복문을 돌렸는데 인덱스들이 출력되서 당황,,
// 그래서 바로 for...of문으로 바꿔줘서 통과!

// ** for...in -> 객체 순환
// ** for...of -> 배열 값 순환

// other way
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

// replaceAll(pattern, replacement) -> pattern -> replacement로 모두 교체

console.log(solution("programmers", "p")); //  "Programmers"
console.log(solution("lowercase", "x")); //  "lowercase"
