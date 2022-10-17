// 2022.10.17(Mon)

function solution(numbers, direction) {
  let temp = 0;
  if (direction === "right") {
    temp = numbers.pop(numbers[numbers.length - 1]);
    numbers.unshift(temp);
  } else if (direction === "left") {
    temp = numbers.shift(numbers[0]);
    numbers.push(temp);
  }
  return numbers;
}
