// 2022.10.26(Wed)

function solution(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  let answer = Math.max(
    numbers[numbers.length - 1] * numbers[numbers.length - 2],
    numbers[0] * numbers[1]
  );
  return answer;
}

console.log(solution([1, 2, -3, 4, -5])); // 15

// 오름차순 정렬 후: 	[ -5, -3, 1, 2, 4 ]
// 곱했을 때 최댓값이 되려면 음수 2개를 곱해서 양수로 만들거나, 양수 2개를 곱해야 하므로
// 두 숫자가 모두 음수일 경우엔 배열에서 index 0과 1에 해당하는 원소를 서로 곱하면 됨 (numbers[0] * numbers[1])
// 두 숫자가 모두 양수일 경우엔 배열에서 맨 뒤 원소 2개를 서로 곱하면 됨 (numbers[numbers.length - 1] * numbers[numbers.length - 2])
