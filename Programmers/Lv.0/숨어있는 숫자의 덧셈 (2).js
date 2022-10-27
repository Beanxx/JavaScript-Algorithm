// 2022.10.27(Thurs)

function solution(my_string) {
  let result = 0;

  for (let i = 0; i < my_string.length; i++) {
    let temp = "";

    // 숫자일때동안 반복해서 두자리 이상의 숫자를 temp에 넣어주기
    while (!isNaN(Number(my_string[i]))) {
      temp += my_string[i];
      i++;
    }
    result += +temp;
  }
  return result;
}

// 이 문젠 내 힘으로 결국 풀지 못했다,,ㅠㅠ

// other way
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

// 숫자가 아닌 문자들로 문자열을 나눈다음에 이를 더해주면 끄읏

// /\D+/: = [^0-9] 숫자가 아닌것 + 1회 이상 반복
