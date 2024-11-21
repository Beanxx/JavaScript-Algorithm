// 복습완료💫(221106)
// 2022.10.20(Thurs)

// my way
function solution(s) {
  let answer = [];
  s = s.split(" "); // ['1', '2', 'Z', '3']

  for (let el of s) {
    if (el === "Z") answer.pop(); // 바로 전에 answer 배열에 넣었던 숫자 빼기
    else answer.push(Number(el));
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
}

// 241121
function solution(s) {
  let result = 0;
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      result -= Number(arr[i - 1]);
    } else {
      result += Number(arr[i]);
    }
  }

  return result;
}

console.log(solution("1 2 Z 3")); // 4
