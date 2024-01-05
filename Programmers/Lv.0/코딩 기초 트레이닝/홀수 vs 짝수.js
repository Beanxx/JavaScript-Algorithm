// 2024.01.05(Fri)

// my way
function solution(num_list) {
  let odd = num_list
    .filter((el, i) => (i + 1) % 2 === 1)
    .reduce((acc, cur) => acc + cur); // 홀
  let even = num_list
    .filter((el, i) => (i + 1) % 2 === 0)
    .reduce((acc, cur) => acc + cur); // 짝

  return Math.max(odd, even);
}

// other way
function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !(idx % 2) ? (even += v) : (odd += v);
  });

  return odd > even ? odd : even;
}

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8
