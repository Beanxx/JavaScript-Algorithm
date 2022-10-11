// 2022.10.11(Tues)

function solution(numbers) {
  let answer = 0;
  for (el of numbers) {
    answer += el;
  }

  return answer / numbers.length;
}
