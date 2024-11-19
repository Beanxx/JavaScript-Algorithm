// 복습완료💫(221106)
// 2022.10.19(Wed)

// my way
function solution(my_string) {
  const moum = "aeiou";
  let result = my_string.split("").filter((el) => !moum.includes(el)); // 모음을 포함하지 않는 문자만 뽑아내기
  // ['n', 'c', ' ', 't', ' ', 'm', 't', ' ', 'y']

  return result.join("");
}

// 241119
function solution(my_string) {
  const moum = "aeiou";
  return [...my_string].filter((el) => !moum.includes(el)).join("");
}

// other way
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, ""); // aeiou가 들어가는 모든 문자들을 빈문자열로 대체하기
}

// /~/g: 안에 있는 문자들을 모두 공백으로 변환

console.log(solution("nice to meet you")); // "nc t mt y"
