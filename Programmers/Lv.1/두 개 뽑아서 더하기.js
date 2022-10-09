// 2022.10.02(Sun)
// 월간 코드 챌린지 시즌1_Lv.1
// 두 개 뽑아서 더하기.js

// my way
function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        num = numbers[i] + numbers[j];

        if (result.includes(num) === false) {
          result.push(num);
        }
      }
    }
  }

  result.sort((a, b) => a - b);
  return result;
}

// other way
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  // set(): 중복을 제거한 값들의 집합
  // 즉, 배열에서 중복되는 값이 없도록 해줌
  const result = [...new Set(temp)];

  return result.sort((a, b) => a - b);
}
