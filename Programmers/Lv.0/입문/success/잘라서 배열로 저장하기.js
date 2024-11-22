// 복습완료💫(221106)
// 2022.10.25(Tues)

function solution(my_str, n) {
  let result = [];

  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
    // 0~3 => 0, 1, 2, 3~6 => 3, 4, 5, 6~9 => 6, 7, 8
  }

  return result;
}

// 241122
function solution(my_str, n) {
  let result = [];
  let arr = [...my_str];

  for (let i = 0; i < my_str.length; i += n) {
    result.push(arr.splice(0, n).join(""));
  }

  return result;
}

// other way
function solution(my_str, n) {
  let answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.substr(i, n));
  }
  return answer;
}
// substr(): 문자열의 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환

console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]
