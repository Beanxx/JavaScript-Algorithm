// 2024.04.13(Sat)

// my way
function solution(my_string, m, c) {
  let result = [];

  for (let i = 0; i < my_string.length; i += m) {
    result.push(my_string.substring(i, i + m));
  }

  // console.log(result); => ['ihrh', 'bakr', 'fpnd', 'oplj', 'hygc']
  // result 배열의 각 원소의 c-1번째 문자열을 뽑아내야 함

  return result.map((el) => el[c - 1]).join("");
}

// ------------------------------------------------------------------

// other way 1
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}
// i % m === c - 1 => m개씩 문자열 덩어리로 끊는다고 했을 때(i % m) c - 1 각 문자열 덩어리에서 몇번째 문자열을 뽑아내야 하는지(c-1)

// other way 2
function solution(my_string, m, c) {
  return Array.from(my_string).reduce((word, v, i) => {
    return i % m === c - 1 ? word + v : word;
  }, "");
}
// 위와 같이 i % m === c - 1 일 때 해당 문자를 하나씩 누적해가기

// other way 3
function solution(my_string, m, c) {
  let result = "";

  for (let i = c - 1; i < my_string.length; i += m) {
    result += my_string[i];
  }

  return result;
}
// 애초에 반복문을 뽑아내고자 하는 idx부터 시작하게 하는 방법으로 이렇게 하면 최적의 횟수로 반복문 실행 가능하지 않을까?

console.log(solution("ihrhbakrfpndopljhygc", 4, 2)); // "happy"
console.log(solution("programmers", 1, 1)); // "programmers"
