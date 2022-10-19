// 2022.10.19(Wed)

// my way
function solution(my_string) {
  const moum = "aeiou";
  my_string = my_string.split("");
  let result = my_string.filter((el) => moum.includes(el) === false);

  return result.join("");
}

// other way
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// /~/g: 안에 있는 문자들을 모두 공백으로 변환
