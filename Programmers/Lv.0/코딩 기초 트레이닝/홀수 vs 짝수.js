// 2024.01.05(Fri)

// my way
function solution(num_list) {
  let odd = num_list
    .filter((_, i) => (i + 1) % 2 === 1)
    .reduce((acc, cur) => acc + cur); // 홀

  let even = num_list
    .filter((_, i) => (i + 1) % 2 === 0)
    .reduce((acc, cur) => acc + cur); // 짝

  return Math.max(odd, even);
}

// other way
function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !((idx + 1) % 2) ? (odd += v) : (even += v);
  });

  return Math.max(odd, even);
}

// !(idx % 2) => 값이 0이 아닌 경우 = 홀(odd)

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8
