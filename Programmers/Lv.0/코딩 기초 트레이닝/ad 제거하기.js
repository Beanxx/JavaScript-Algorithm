// 2024.02.27(Tues)

// my way
function solution(strArr) {
  return strArr.filter((el) => !el.includes("ad"));
}

// other way
function solution(strArr) {
  return strArr.filter((el) => el.indexOf("ad") === -1);
}

console.log(solution(["and", "notad", "abcd"])); //	["and", "abcd"]
console.log(solution(["there", "is", "not", "a", "d"])); //	["there", "is", "not", "a", "d"]
