// // 2022.12.20(Tues)
// 모음 사전(완전탐색).js

function solution(word) {
  const alphabet = ["A", "E", "I", "O", "U"];

  // 각 문자 길이에 따라 나올 수 있는 경우의 수
  // ex. 두 글자일 경우 AA, AE, AI, AO, AU, EA ... 총 5 * 5 = 25개의 경우의 수가 나올 수 있음
  const length = [5, 5 ** 2, 5 ** 3, 5 ** 4, 5 ** 5]; // [ 5, 25, 125, 625, 3125 ]

  // 위에서 문자 길이에 따른 경우의 수의 총합
  const sum = length.reduce((acc, cur) => acc + cur, 0); // 3905

  // position = 각 자릿수에 생길 수 있는 경우의 수들
  // 예를 들어 두번째 자리에선 156가지의 경우의 수가 발생할 수 있음
  const position = [...length].map((el) => parseInt(sum / el)); // [ 781, 156, 31, 6, 1 ]

  const result = [...word].reduce(
    (acc, cur, i) => acc + alphabet.indexOf(cur) * position[i] + 1,
    0
  );
  // word의 각 자리에 해당되는 index를 alphabet 배열에서 찾기
  // 위의 index에 position 배열에 각 자리수에 생길 수 있는 경우의 수를 곱해주는데
  // A의 경우 index가 0이라 곱하면 0이 되므로 +1를 해준다!

  return result;
}

console.log(solution("AAAAE")); // 6 = 1 + 1 + 1 + 1 + 2
console.log(solution("I")); // 1563 = 781 * 2 + 1

// 경우의 수를 생각해서 푸는 방법을 생각해내기 어려웠던 문제..
