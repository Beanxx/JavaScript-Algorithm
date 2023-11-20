// 2023.11.20(Mon)

function solution(myString, pat) {
  let lowerString = myString.toLowerCase();
  let havingString = lowerString.includes(pat.toLowerCase());

  return havingString ? 1 : 0;
}

console.log(solution("AbCdEfG", "aBc")); // 1
console.log(solution("aaAA", "aaaaa")); // 0
