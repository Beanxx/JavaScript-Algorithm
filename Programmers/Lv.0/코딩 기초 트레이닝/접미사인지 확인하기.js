// 2024.01.06(Sat)

// my way
function solution(my_string, is_suffix) {
  let result_string = my_string.slice(my_string.length - is_suffix.length);

  if (result_string === is_suffix) return 1;
  else return 0;
}

// --------------------------------------------

// other way
function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}

console.log(solution("banana", "ana")); // 1
console.log(solution("banana", "nan")); // 0
