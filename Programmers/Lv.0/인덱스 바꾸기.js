// 2022.10.22(Sat)

// my way
function solution(my_string, num1, num2) {
  my_string = my_string.split("");

  let temp1 = my_string[num1];
  let temp2 = my_string[num2];

  my_string[num1] = temp2;
  my_string[num2] = temp1;

  // 위의 4줄을 아래 1줄로 줄일 수도 있다!
  // [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];

  return my_string.join("");
}
