// my way
function solution(num_list, n) {
  let answer = [];
  let length = num_list.length / n;

  for (let i = 0; i < length; i++) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}

// other way
function solution(num_list, n) {
  let answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
