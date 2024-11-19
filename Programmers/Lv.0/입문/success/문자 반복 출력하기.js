// 복습완료💫(221106)
// 2022.10.13(Thurs)

// my way
function solution(my_string, n) {
  let answer = "";

  for (let i of my_string) {
    answer += i.repeat(n);
  }

  return answer;
}

// 241119
function solution(my_string, n) {
  return [...my_string].map((el) => el.repeat(n)).join("");
}

// [...my_string] => ['h', 'e', 'l', 'l', 'o']
// [...my_string].map((el) => el.repeat(n)) =>  ['hhh', 'eee', 'lll', 'lll', 'ooo']

// 문자열 my_string을 배열로 변환해서 map 돌려서 다시 문자열로 변환하면 코드가 더 깔끔하댜

console.log(solution("hello", 3)); // "hhheeellllllooo"
