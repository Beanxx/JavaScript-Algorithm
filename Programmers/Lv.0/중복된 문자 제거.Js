// 복습완료💫(221116)
// 2022.10.20(Thurs)

// my way
function solution(my_string) {
  let answer = "";
  for (let el of my_string) {
    // answer에 해당 원소가 없으면 더하고, 이미 있으면 pass~
    if (!answer.includes(el)) answer += el;
  }
  return answer;
}

// other way
function solution(my_string) {
  return [...new Set(my_string)].join("");
  // new Set()을 이용해서 중복 원소 제거 후, join('')으로 문자열 합쳐주기
  // [...new Set(my_string)]: [ 'p', 'e', 'o', 'l' ]
}

console.log(solution("people")); // "peol"
