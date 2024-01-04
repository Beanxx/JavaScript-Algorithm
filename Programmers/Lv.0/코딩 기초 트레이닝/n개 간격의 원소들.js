// 2024.01.04(Thurs)

// my way
function solution(num_list, n) {
  let result = [];

  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list[i]);
  }

  return result;
}

// 포인트는 증감문 부분! 첨엔 바보같이 증감문을 (n-1)++ 로 썼다가 바로 에러,,

// ------------------------------------------------------------

// other way
function solution(num_list, n) {
  return num_list.filter((_, i) => i % n === 0);
}

// i % n
// 0 % 2 = 0
// 1 % 2 = 1
// 2 % 2 = 0
// 3 % 2 = 1
// -> i % n 결과값이 0인 인덱스 값만 필터링

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
console.log(solution([4, 2, 6, 1, 7, 6], 4)); // [4, 7]
