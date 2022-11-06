// 복습완료💫(221106)
// 2022.10.12(Wed)

// my way
function solution(money) {
  let answer = [];
  let cup = parseInt(money / 5500);
  let coin = money - 5500 * cup;

  answer.push(cup, coin);
  return answer;
}

// other way
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

console.log(solution(15000)); // [2, 4000]
