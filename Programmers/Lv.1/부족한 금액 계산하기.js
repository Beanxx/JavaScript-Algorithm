// 복습완료💫(221117)
// 2022.09.28(Wed)
// 위클리 챌린지_Lv.1
// 부족한 금액 계산하기.js

// my way
function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += i * price;
  }
  result -= money;
  // 지불해야 하는 금액 result에서 가지고 있는 돈 money를 뺀 금액이 양수면 지불 가능하다는 의미!
  return result > 0 ? result : 0;
}

// 테스트 하나가 통과가 계속 안 되서 뭐지 했는데 문제 설명 맨 아래에
// '단, 금액이 부족하지 않으면 0을 return 하세요' 문구를 보지 못해서 따로 처리를 안해서 그런거였따,,
// 난 return 문을 if문으로 처리해서 좀 길어졌는데 삼항연산자로 처리하면 한 줄에 가능!

console.log(solution(3, 20, 4)); // 10
