// 복습완료💫(221116)
// 2022.10.27(Thurs)

function solution(my_string) {
  let result = 0;

  for (let i = 0; i < my_string.length; i++) {
    let temp = "";
    // my_string에서 문자가 숫자일 때 동안 순회함으로 두자리 이상의 숫자를 temp에 넣어줌
    while (!isNaN(Number(my_string[i]))) {
      temp += my_string[i];
      i++;
    }
    result += +temp; // temp 값을 숫자로 result에 더해주기
  }
  return result;
}

// 이 문젠 내 힘으로 결국 풀지 못했다 ㅠ
// 2번 이상 연속해서 위치하는 숫자들을 묶어서 더해줘야 하는걸 어떻게 구현해야 할지 몰랐다..

// 241122
function solution(my_string) {
  let regExp = /\d+/g;

  return (my_string.match(regExp) ?? [0]).reduce((acc, cur) => acc + +cur, 0);
}

// other way
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
  // my_string.split(/\D+/): ['', '1', '2', '34', '']
}
// 숫자가 아닌 문자들로 문자열을 나눈 다음에 숫자로 타입변환 후에 모두 더해주면 끄읏-
// /\D+/: = [^0-9] 숫자가 아닌것 + 1회 이상 반복

console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("1a2b3c4d123Z")); // 133
console.log(solution("abcefg")); // 0 (edge case)
