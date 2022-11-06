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

// other way
function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, cur) => acc + Number(cur), 0);
}

// .match(/\d/g): 숫자인 문자열을 추출하여 배열로 반환

console.log(solution("aAb1B2cC34oOp")); // 10
