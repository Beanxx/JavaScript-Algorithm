// 복습완료💫(221116)
// 2022.10.26(Wed)

function solution(numbers) {
  // sort() 메소드 사용시 굳이 변수에 할당 안해줘도 원본 배열이 정렬된 배열로 바뀌어 있음!
  numbers.sort((a, b) => a - b); // 오름차순 정렬 -> [ -5, -3, 1, 2, 4 ]
  let answer = Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
  return answer;
}

console.log(solution([1, 2, -3, 4, -5])); // 15

// 오름차순 정렬 후: 	[ -5, -3, 1, 2, 4 ]
// 곱했을 때 최댓값이 되려면 음수 2개를 곱해서 양수로 만들거나, 양수 2개를 곱해야 하므로
// 두 숫자가 모두 음수일 경우엔 배열에서 index 0과 1에 해당하는 원소를 서로 곱하면 됨 (numbers[0] * numbers[1])
// 두 숫자가 모두 양수일 경우엔 배열에서 맨 뒤 원소 2개를 서로 곱하면 됨 (numbers[numbers.length - 1] * numbers[numbers.length - 2])
