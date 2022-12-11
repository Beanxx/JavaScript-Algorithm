// // 2022.12.11(Sun)
// 귤 고르기.js

// my way
function solution(k, tangerine) {
  let answer = 0;
  let obj = {};
  for (let i = 0; i < tangerine.length; i++) {
    if (obj[tangerine[i]] === undefined) {
      // obj 객체에 없는 key이면 1
      obj[tangerine[i]] = 1;
    } else {
      // obj 객체에 이미 있는 key이면 값에 +1
      obj[tangerine[i]]++;
    }
  }
  // obj = { '1': 1, '2': 2, '3': 2, '4': 1, '5': 2 }
  // obj 객체에 각 원소가 등장한 개수를 값으로 하는 key들을 담기

  let keys = Object.values(obj).sort((a, b) => b - a); // 객체에서 value만 뽑아서 내림차순 정렬하기
  // keys = [ 2, 2, 2, 1, 1 ]

  for (let i = 0; i < keys.length; i++) {
    // k가 양수이면 answer +1해주기
    if (k > 0) {
      k -= keys[i];
      answer++;
    }
  }

  return answer;
}

// other way
function solution(k, tangerine) {
  let answer = 0;
  let obj = {};

  tangerine.forEach((item) => (obj[item] = (obj[item] || 0) + 1));

  const sortArr = Object.values(obj).sort((a, b) => b - a);

  while (k > 0) {
    answer++;
    k -= sortArr.splice(0, 1)[0]; // [2][0] => 2
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
