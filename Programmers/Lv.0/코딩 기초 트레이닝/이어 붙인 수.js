// 2024.01.06(Sat)

// my way
function solution(num_list) {
  let odd = num_list.filter((el) => el % 2 === 1).join(""); // 홀
  let even = num_list.filter((el) => el % 2 === 0).join(""); // 짝

  return +odd + +even;
}

// other way
function solution(num_list) {
  const { odds, evens } = num_list.reduce(
    ({ odds, evens }, num) => {
      num % 2 === 0 ? evens.push(num) : odds.push(num);
      return { odds, evens };
    },
    { odds: [], evens: [] }
  );

  return +odds.join("") + +evens.join("");
}

console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 	581
