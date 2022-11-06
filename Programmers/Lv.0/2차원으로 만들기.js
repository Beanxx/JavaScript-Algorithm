// 복습완료💫(221106)
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

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
// 	[[1, 2], [3, 4], [5, 6], [7, 8]]

// num_list.splice(0, 2)하면 num_list에서 이만큼 잘라냄을 의미
// 즉, num_list = [1, 2, 3, 4] 에서 num_list.splice(0, 2)한 후
// num_list는 [3, 4] !!
