// 2024.10.31(Thurs)

// my way
function solution(myStr) {
  const arr = myStr.split(/a|b|c/).filter((el) => el) || ["EMPTY"];

  return arr.length === 0 ? ["EMPTY"] : arr;
}

// ------------------------------------------------------------------

// other way
function solution(myStr) {
  return myStr.match(/[^a-c]+/g) || ["EMPTY"];
}

// ^ : not => [^a-c] : a | b | c 를 제외한 문자열
// + : 분해되지 않은 1개 이상의 문자열

console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
console.log(solution("abcd")); // ["d"]
console.log(solution("cabab")); // ["EMPTY"]
