// 2022.12.01(Thurs)
// 탐욕법(Greedy)
// Lv.1_체육복.js

function solution(n, lost, reserve) {
  // value: 0 => 체육복 없음, 1 => 자신이 입을 체육복 1벌만 있음, 2 => 다른 친구를 나눠줄 여벌의 체육복이 있음
  const arr = Array(n).fill(1); // [ 1, 1, 1, 1, 1 ]

  lost.map((el) => {
    arr[el - 1] = 0;
  }); // lost: [2, 4] => arr 배열에서 2, 4번째 -> index는 0부터 시작이므로 -1 해주기
  // lost는 체육복이 없는 학생을 나타내므로 0으로 값 할당해주기

  reserve.map((el) => (arr[el - 1] += 1)); // reserve: [1, 3, 5] => arr 배열에서 1, 3, 5번째
  // reserve는 여벌의 체육복이 있는 학생을 나타내므로 값 +1 해주기

  for (let i = 0; i < n; i++) {
    // 앞의 학생이 여벌의 체육복이 있을 때 빌려주는 경우
    if (arr[i] === 0 && arr[i - 1] === 2) {
      arr[i] = 1; // 빌려 받은 학생의 체육복 수: 0 -> 1
      arr[i - 1] = 1; // 빌려준 학생의 체육복 수: 2 -> 1
    } else if (arr[i] === 0 && arr[i + 1] === 2) {
      // 뒤의 학생이 여벌의 체육복이 있을 때 빌려주는 경우
      arr[i] = 1;
      arr[i + 1] = 1;
    }
  }

  return arr.filter((el) => el > 0).length; // 값이 0이 아닌 1, 2인 경우가 체육복을 입을 수 있는 학생의 수!
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
