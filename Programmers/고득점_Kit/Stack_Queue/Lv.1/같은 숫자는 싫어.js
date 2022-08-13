// 2022.06.30(Thurs)
// 같은 숫자는 싫어.js

// my way
function solution(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      // 연속되는 숫자가 아니면
      newArr.push(arr[i]); // 빈배열에 넣어줌
    }
  }
  return newArr;
}

// other way
function solution(arr) {
  return arr.filter((item, idx) => item != arr[idx + 1]);
}

// filter() 메서드 쓰니까 완전 간단하다ㅏ
