// 2024.01.02(Tues)

// my way
function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}

// other way
function solution(str1, str2) {
  return +str2.includes(str1);
}

console.log(solution("abc", "aabcc")); // 1
console.log(solution("tbt", "tbbttb")); // 0
