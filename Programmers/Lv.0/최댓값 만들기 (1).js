// 2022.10.18(Tues)

// my way
function solution(numbers) {
  let result = 1;
  numbers = numbers.sort((a, b) => b - a);

  let one = numbers.shift();
  let two = numbers.shift();

  result = one * two;
  return result;
}

// other way
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
