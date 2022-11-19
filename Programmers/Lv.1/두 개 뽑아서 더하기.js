// 복습완료💫(221119)
// 2022.10.02(Sun)
// 월간 코드 챌린지 시즌1_Lv.1
// 두 개 뽑아서 더하기.js

// my way
function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      // 서로 다른 인덱스에 있는 두 수를 뽑아야 하므로 i !== j
      if (i !== j) {
        let temp = numbers[i] + numbers[j];
        // 만약 result에 temp 값이 없다면 temp 값을 push
        if (!result.includes(temp)) result.push(temp);
      }
    }
  }
  return result.sort((a, b) => a - b); // 오름차순 정렬
}

// other way
function solution(numbers) {
  let temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  // set(): 중복을 제거한 값들의 집합
  // 즉, 배열에서 중복되는 값이 없도록 해줌
  let result = [...new Set(temp)];

  return result.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); // 	[2, 3, 4, 5, 6, 7]
