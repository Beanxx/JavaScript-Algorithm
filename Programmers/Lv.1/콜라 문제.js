// 2022.11.20(Sun)
// 콜라 문제.js

// my way
function solution(a, b, n) {
  let result = 0; // 받을 수 있는 콜라 총 개수
  let bottle = n; // 가지고 있는 병 개수
  let cola = 0; // 빈 병을 가져갈 때 마다 받을 수 있는 각 콜라의 개수

  // 보유 중인 콜라가 a개 미만이면 콜라를 받을 수 없다고 주어졌으므로 이렇게 조건식 세우기!
  while (bottle >= a) {
    cola = parseInt(bottle / a) * b; // parseInt(20 / 3) * 1 = 6개 <- 빈 병 18개를 가져가서 받을 수 있는 콜라 개수
    result += cola; // 받을 수 있는 콜라 개수 누적
    bottle = bottle - (cola * a) / b + cola; // 20 - (6 * 3) / 1 + 6 = 8개 <- 가지고 있는 콜라병 개수
    // - (cola * a / b)  => 콜라를 받기 위해 마트에 가져간 빈병 개수
    // + cola => 빈병을 주고 받은 콜라 개수
  }
  return result;
}

console.log(solution(3, 1, 20)); // 9
