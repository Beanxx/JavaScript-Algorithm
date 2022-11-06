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

// other way
function solution(num_list) {
  let evenNumber = num_list.filter((el) => {
    return el % 2 == 0;
  }).length;

  return [evenNumber, num_list.length - evenNumber];
}

// for문 대신 filter() 메소드를 사용하면 코드 더 간결쓰
