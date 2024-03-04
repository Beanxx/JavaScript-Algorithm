// 2024.03.04(Mon)

// my way
function solution(number) {
  return number.split("").reduce((acc, cur) => +acc + +cur) % 9;
}

// other way
function solution(number) {
  return [...number].reduce((acc, cur) => +acc + +cur) % 9;
}

// number.split('') = [...number] <- e.g. ['1', '2', '3']

console.log(solution("123")); // 6
console.log(solution("78720646226947352489")); // 2
