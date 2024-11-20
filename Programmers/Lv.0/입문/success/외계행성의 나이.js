// 복습완료💫(221106)
// 2022.10.15(Sat)

function solution(age) {
  let result = "";
  let ages = String(age).split(""); // ['5', '1']
  let chars = "abcdefghijklmnopqrstuvwxyz".split("");

  result = ages.map((el) => chars[el]).join(""); // chars[5]: f, chars[1]: b
  // ages.map((el) => chars[el]): [f, b]
  return result;
}

// 241120
// first way
function solution(age) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return [...String(age)].map((el) => alphabet[el]).join("");
}

// second way
function solution(age) {
  // 'a'의 아스키코드가 97임을 활용
  const input = [...String(age)].map((el) => Number(el) + 97);
  return input.map((el) => String.fromCharCode(el)).join("");
}

// Sring.fromCharCode(n): 아스키코드(숫자) -> 문자열 (e.g. String.fromCharCode(97) = 'a')
// str.charCodeAt(): 문자 -> 아스키 코드(숫자) (e.g. 'a'.charCodeAt() = 97)

console.log(solution(51)); // 'fb'
