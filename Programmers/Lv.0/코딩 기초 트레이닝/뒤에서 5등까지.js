// 2024.01.04(Thurs)

// my way
function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10])); // [15, 32, 38, 46, 56]
