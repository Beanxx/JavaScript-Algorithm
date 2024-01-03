// 2024.01.03(Wed)

// my way
function solution(my_string, is_prefix) {
  let prefixLength = is_prefix.length;

  if (my_string.slice(0, prefixLength) === is_prefix) return 1;
  else return 0;
}

// other way 1
function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}
// => 내가 푼 코드를 한 줄로 구현하는 방법!

// other way 2
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}

// str1.startsWith(str2): str1 문자열이 str2 문자로 시작하는지 체크 후 true | false로 반환

console.log(solution("banana", "ban")); // 1
console.log(solution("banana", "nan")); // 0
