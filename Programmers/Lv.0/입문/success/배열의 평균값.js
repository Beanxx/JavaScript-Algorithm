// 복습완료💫(221106)
// 2022.10.11(Tues)

// my way1
// 배열의 모든 원소의 평균값 구하기
function solution(numbers) {
  let answer = 0;
  for (el of numbers) {
    answer += el;
  }
  return answer / numbers.length;
}

// my way2
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}
