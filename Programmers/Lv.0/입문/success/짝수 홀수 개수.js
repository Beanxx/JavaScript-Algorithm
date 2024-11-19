// 복습완료💫(221106)
// 2022.10.13(Thurs)

// my way
function solution(num_list) {
  let answer = [];
  let even = 0; // 짝
  let odd = 0; // 홀

  for (let i of num_list) {
    if (i % 2 === 0) even++;
    else odd++;
  }
  answer.push(even, odd);
  return answer;
}

// 241119
function solution(num_list) {
  let even = num_list.filter((el) => el % 2 === 0).length;
  let odd = num_list.length - even;

  return [even, odd];
}
