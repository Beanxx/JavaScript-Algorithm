// 복습완료💫(221106)
// 2022.10.18(Tues)

// my way
function solution(numbers) {
  numbers.sort((a, b) => b - a); // 내림차순 정렬

  // shift()한 후 배열에는 이에 해당하는 값이 제거되어 있음
  let one = numbers.shift();
  let two = numbers.shift();

  return one * two;
}

// 241119
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

// other way
function solution(numbers) {
  const [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
