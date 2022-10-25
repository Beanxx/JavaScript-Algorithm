// 2022.10.25(Tues)

function solution(my_str, n) {
  let result = [];

  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
  }

  return result;
}

// other way
function solution(my_str, n) {
  var answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.substr(i, n));
  }
  return answer;
}
