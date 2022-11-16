// 복습완료💫(221116)
// 2022.10.17(Mon)

function solution(numbers, direction) {
  let temp = 0;
  if (direction === "right") {
    temp = numbers.pop(); // 마지막 원소
    numbers.unshift(temp); // 마지막 원소를 맨 앞에 삽입
  } else if (direction === "left") {
    temp = numbers.shift(); // 첫번째 원소
    numbers.push(temp); // 첫번째 원소를 맨 뒤에 삽입
  }
  return numbers;
}

console.log(solution([1, 2, 3], "right")); // [3, 1, 2]
