// 2024.01.06(Sat)

// my way
function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}
// --------------------------------------------

// other way
function solution(rny_string) {
  return [...rny_string].map((el) => (el === "m" ? "rn" : el)).join("");
}

console.log(solution("masterpiece")); // "rnasterpiece"
console.log(solution("programmers")); //	"prograrnrners"
console.log(solution("jerry")); //	"jerry"
