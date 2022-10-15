// 2022.10.15(Sat)

function solution(age) {
  let result = "";
  let ages = String(age).split("");
  let chars = "abcdefghijklmnopqrstuvwxyz".split("");

  result = ages.map((el) => chars[el]).join("");
  return result;
}
