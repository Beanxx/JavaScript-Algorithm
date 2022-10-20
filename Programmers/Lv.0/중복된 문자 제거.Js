// 2022.10.20(Thurs)

// my way
function solution(my_string) {
  let answer = "";
  for (let el of my_string) {
    if (!answer.includes(el)) {
      answer += el;
    }
  }
  return answer;
}

// other way
function solution(my_string) {
  return [...new Set(my_string)].join("");
}
