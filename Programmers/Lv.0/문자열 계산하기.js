// 2022.10.23(Sun)

// my way
function solution(my_string) {
  my_string = my_string.split(" ");
  let answer = Number(my_string[0]);

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === "+") {
      answer += Number(my_string[i + 1]);
    } else if (my_string[i] === "-") {
      answer -= Number(my_string[i + 1]);
    }
  }
  a;

  return answer;
}

// other way
function solution(my_string) {
  return eval(my_string);
}

// eval(): 문자로 표현된 코드를 실행하는 함수 (너무 간편한 함수지만 사용 지양!!!)
