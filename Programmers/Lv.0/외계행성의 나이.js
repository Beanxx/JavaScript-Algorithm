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

console.log(solution(51)); // 'fb'
