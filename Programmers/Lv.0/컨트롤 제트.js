// 2022.10.20(Thurs)

// my way
function solution(s) {
  let answer = [];
  s = s.split(" ");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "Z") {
      answer.pop();
    } else {
      answer.push(Number(s[i]));
    }
  }

  answer = answer.reduce((acc, cur) => acc + cur, 0);

  return answer;
}
