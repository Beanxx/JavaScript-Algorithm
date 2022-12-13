// 2022.12.13(Tues)
// 가장 가까운 같은 글자.js

// my way
function solution(s) {
  let arr = []; // 순회한 s 문자열 담는 배열
  let answer = []; // 결과값들을 담는 배열

  for (let i = 0; i < s.length; i++) {
    // arr 배열에 s[i]가 존재하지 않다면
    if (!arr.includes(s[i])) {
      arr.push(s[i]);
      answer.push(-1);
    } else {
      // arr 배열에 s[i]가 존재한다면 'arr 길이 - arr 배열에서 s[i]가 등장한 마지막 index'
      answer.push(arr.length - arr.lastIndexOf(s[i]));
      arr.push(s[i]);
    }
  }
  return answer;
}

// other way
function solution(s) {
  const obj = {};
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    // 이미 존재한다면
    if (obj[s[i]] !== null)
      answer[i] = i - obj[s[i]]; // 현재 index - 기존 index
    else answer[i] = -1; // 객체 obj에 존재하지 않으면 -1
    obj[s[i]] = i; // 현재 index를 값으로 할당
  }
  return answer;
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); //	[-1, -1, 1, -1, -1, -1]
