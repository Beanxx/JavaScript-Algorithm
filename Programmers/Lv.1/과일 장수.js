// 2022.11.22(Tues)
// 과일 장수.js

// 시간 초과..
function solution(k, m, score) {
  let answer = 0;
  let arr = [];
  let length = score.length;
  score.sort((a, b) => b - a);

  for (let i = 0; i < parseInt(length / m); i++) {
    arr = score.splice(0, m);
    if (arr.length === m) {
      answer = answer + arr[m - 1] * m;
    }
  }
  return answer;
}
// splice()를 써서 그런가 이 방법대로 하면 계속 시간초과가 난다,,

// 배열 접근
function solution(k, m, score) {
  let answer = 0;
  let arr = [];
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    arr.push(score.slice(i, i + m));
    // arr = [ [ 4, 4, 4 ], [ 4, 4, 4 ], [ 2, 2, 2 ], [ 2, 1, 1 ] ]
  }

  for (let j = 0; j < arr.length; j++) {
    // arr[j] 길이 즉, 한 박스에 담기는 사과 개수가 m과 다르면 팔 수 없으므로 조건을 통해 개수가 같은 경우일 떄만!
    if (arr[j].length === m) {
      // 처음에 내림차순 정렬을 했으므로 배열 내 배열의 원소 중 마지막 원소가 가장 작은 숫자가 된다.
      // 그러므로 배열 내 배열의 마지막 원소에 m을 곱한 값을 answer 변수에 더하기
      answer += arr[j][m - 1] * m;
    }
  }
  return answer;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
