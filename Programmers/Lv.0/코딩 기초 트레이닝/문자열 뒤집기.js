// 2024.04.21(Sun)

// my way
// function solution(my_string, s, e) {
//   return (
//     my_string.slice(0, s) +
//     [...my_string.slice(s, e + 1)].reverse().join("") +
//     my_string.slice(e + 1)
//   );
// }

// ------------------------------------------------------------------

// other way

function solution(my_string, s, e) {
  let str = my_string.substring(s, e + 1);
  let newStr = [...str].reverse().join("");

  return my_string.replace(str, newStr);
}
// 다른 사람 풀이를 내 방식대로 약간 변형해보았다

// 뭔가 내 풀이가 좀 지저분하다고 생각 들어서 다른 사람들 풀이 중에서 더 간결한 풀이가 많겠지 했는데
// 막상 다 비슷한 방식으로 푼듯,,

console.log(solution("Progra21Sremm3", 6, 12)); // "ProgrammerS123"
console.log(solution("49gh43jOIQvkSH", 5, 5)); // "49gh43jOIQvkSH"
