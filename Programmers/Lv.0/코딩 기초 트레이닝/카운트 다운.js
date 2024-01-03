// 2024.01.03(Wed)

// my way
function solution(start, end_num) {
  let result = [];

  for (let i = start; i >= end_num; i--) {
    result.push(i);
  }

  return result;
}

// other way
function solution(start, end_num) {
  return Array(start - end_num + 1)
    .fill(start)
    .map((v, i) => v - i);
}

// Array(length): 배열 내 값의 개수를 length만큼 설정
// .fill(value): value 값으로 배열 채우기
// .map((v, i) => v - i) 배열 내 값을 해당 패턴 값들로 채우기

console.log(solution(10, 3)); // [10, 9, 8, 7, 6, 5, 4, 3]
