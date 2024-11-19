// 복습완료💫(221106)
// 2022.10.21(Fri)

function solution(my_string) {
  let answer = "";

  for (let el of my_string) {
    if (el === el.toLowerCase()) answer += el.toUpperCase();
    else answer += el.toLowerCase();
  }

  return answer;
}

// 241119
function solution(my_string) {
  return [...my_string]
    .map((el) =>
      el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
    )
    .join("");
}
