// 2024.02.17(Sat)

// my way
function solution(str_list, ex) {
  return str_list.filter((el) => !el.includes(ex)).join("");
}

// other way
function solution(str_list, ex) {
  return str_list.reduce(
    (acc, cur) => (cur.includes(ex) ? acc : acc + cur),
    ""
  );
}
// ex 문자열이 포함되지 않은 배열 원소일 경우엔 누적으로 더하고, 포함되면 더하지 않기

console.log(solution(["abc", "def", "ghi"], "ef")); // "abcghi"
console.log(solution(["abc", "bbc", "cbc"], "c")); // ""
