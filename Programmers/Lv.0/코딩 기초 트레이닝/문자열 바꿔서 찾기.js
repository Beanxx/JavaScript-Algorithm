// 2024.01.26(Fri)

// my way
function solution(myString, pat) {
  let result = "";
  for (let el of myString) {
    if (el === "A") result += "B";
    else if (el === "B") result += "A";
  }

  return result.includes(pat) ? 1 : 0;
}

// other way
function solution(myString, pat) {
  const reverseStr = [...myString]
    .map((el) => (el === "A" ? "B" : "A"))
    .join("");

  return reverseStr.includes(pat) ? 1 : 0;
}

console.log(solution("ABBAA", "AABB")); // 1
console.log(solution("ABAB", "ABAB")); // 0
