// 241124 다시 풀어야 하는 이유: 항상 slice, splice 매개변수 위치별 기능에 대해서 서치해서 품..
// 복습완료💫(221106)
// 2022.10.22(Sat)

// my way
function solution(my_string, num1, num2) {
  my_string = my_string.split("");

  // let temp1 = my_string[num1];
  // let temp2 = my_string[num2];

  // my_string[num1] = temp2;
  // my_string[num2] = temp1;

  // 위의 4줄을 아래 1줄로 줄일 수도 있다!
  // 구조분해할당!
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];

  return my_string.join("");
}

// 241124
function solution(my_string, num1, num2) {
  let result = [...my_string];

  let [a] = result.slice(num1, num1 + 1);
  let [b] = result.slice(num2, num2 + 1);

  result.splice(num1, 1, b);
  result.splice(num2, 1, a);

  return result.join("");
}

console.log(solution("hello", 1, 2)); // 'hlelo'
