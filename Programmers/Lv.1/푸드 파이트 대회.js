// 2022.11.20(Sun)
// 푸드 파이트 대회.js

// my way
function solution(food) {
  let front = ""; // 0(물) 기준으로 앞쪽 음식 배치
  let back = ""; //  0(물) 기준으로 뒤쪽 음식 배치

  //
  for (let i = 1; i < food.length; i++) {
    // 선수는 1:1 대결이므로 음식이 홀수인 경우 1만큼 음식을 사용하지 못하므로
    // 홀수인 경우 음식 -1 해주깉
    if (food[i] % 2 !== 0) food[i]--;
  }
  // food: [1, 3, 4, 6] -> [ 1, 2, 4, 6 ]

  for (let i = 1; i <= food.length; i++) {
    // i번 음식을 food[i]의 절반만큼 반복
    front += String(i).repeat(food[i] / 2);
  }
  // 뒤쪽 음식 배치는 앞쪽 음식 배치를 뒤집은 것이므로 reverse() 메소드를 통해 뒤집기
  back = [...front].reverse().join("");
  return front + 0 + back;
}

console.log(solution([1, 3, 4, 6])); // "1223330333221"
