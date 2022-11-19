// 복습완료💫(221119)
// 2022.06.30(Thurs)
// 같은 숫자는 싫어.js

// my way
function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // 연속되는 숫자가 아니면
    if (arr[i] !== arr[i + 1]) result.push(arr[i]); // result 배열에 넣어줌
  }
  return result;
}

// other way
function solution(arr) {
  return arr.filter((item, idx) => item != arr[idx + 1]);
}

// filter() 메서드 쓰니까 완전 간단하다ㅏ

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]
