// 복습완료💫(221106)
// 2022.10.23(Sun)

// my way
function solution(my_string) {
  my_string = my_string.split(" "); // ['8', '+', '2', '-', '3']
  let answer = Number(my_string[0]);

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === "+") {
      answer += Number(my_string[i + 1]);
    } else if (my_string[i] === "-") {
      answer -= Number(my_string[i + 1]);
    }
  }

  return answer;
}

// other way 1
function solution(my_string) {
  return eval(my_string);
}

// eval(): 문자로 표현된 코드를 실행하는 함수 (너무 간편한 함수지만 사용 지양!!!)

// other way 2
function solution(my_string) {
  const stack = [];
  let sign = 1;

  for (const ch of my_string.split(" ")) {
    if (ch === "+") sign = 1;
    else if (ch === "-") sign = -1;
    else stack.push(ch * sign);
  }

  return stack.reduce((a, b) => a + b, 0);
}

console.log(solution("8 + 2 - 3")); // 7
