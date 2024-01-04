// 2024.01.03(Wed)

// my way
function solution(num_list) {
  let sum = num_list.reduce((acc, cur) => acc + cur);
  let product = num_list.reduce((acc, cur) => acc * cur);

  return product < sum ** 2 ? 1 : 0;
}

// sum ** 2 = Math.pow(sum, 2)

// other way
console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0
