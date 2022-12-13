// // 2022.12.04(Sun)
// 이진 변환 반복하기.js

// my way
function solution(s) {
  let answer = [];
  let removeZero = 0; // 제거할 0의 개수
  let count = 0; // 이진 변환 과정 횟수

  // s가 1이 되기 전까지 반복
  while (s !== "1") {
    let newSLength = [...s].filter((el) => el === "1").length; // 0 제거한 1의 길이
    removeZero += s.length - newSLength; // 원래 길이 - 0 제거한 1의 길이 = 0의 길이
    s = newSLength.toString(2); // 1의 길이를 2진수로 변환 (이진 변환)
    count++;
  }

  answer.push(count, removeZero);

  return answer;
}

// other way
function solution(s) {
  let answer = [0, 0];
  while (s !== "1") {
    const oldLength = s.length;
    s = s.replace(/0/g, ""); // 0 제거
    const newLength = s.length; // 0을 제거한 1의 길이
    s = newLength.toString("2"); // 0을 제거한 1의 길이를 이진 변환

    answer[1] += oldLength - newLength; // 0의 개수 누적
    answer[0]++; // 이진 변환 과정 횟수 +1
  }

  return answer;
}

console.log(solution("110010101001")); // [3, 8]
console.log(solution("01110")); // [3, 3]
