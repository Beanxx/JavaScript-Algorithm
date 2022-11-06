// 복습완료💫(221106)
// 2022.10.20(Thurs)

// my way
function solution(s) {
  let answer = [];
  s = s.split(" "); // ['1', '2', 'Z', '3']

  for (let el of s) {
    if (el === "Z") answer.pop(); // 바로 전에 answer 배열에 넣었던 숫자 빼기
    else answer.push(Number(el));
  }

  answer = answer.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

console.log(solution("1 2 Z 3")); // 4
