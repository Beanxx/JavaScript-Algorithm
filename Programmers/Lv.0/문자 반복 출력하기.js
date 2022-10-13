// 2022.10.13(Thurs)

// my way
function solution(my_string, n) {
  let answer = "";

  for (let i of my_string) {
    answer += i.repeat(n);
  }

  return answer;
}

// other way
function solution(my_string, n) {
  let answer = [...my_string].map((v) => v.repeat(n)).join("");
  return answer;
}

// 문자열 my_string을 배열로 변환해서 map 돌려서 다시 문자열로 변환하면 코드가 더 깔끔하댜
