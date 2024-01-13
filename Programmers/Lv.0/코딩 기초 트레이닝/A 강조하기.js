// 2024.01.13(Sat)

// my way
function solution(myString) {
  return [...myString.toLowerCase()]
    .map((el) => (el === "a" ? "A" : el))
    .join("");
}

// other way
function solution(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}

console.log(solution("abstract algebra")); // "AbstrAct AlgebrA"
console.log(solution("PrOgRaMmErS")); // "progrAmmers"
