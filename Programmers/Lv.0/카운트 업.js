// 2023.06.11(Sun)

function solution(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

console.log(solution(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]
