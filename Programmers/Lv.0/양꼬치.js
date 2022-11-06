// 복습완료💫(221106)
// 2022.10.14(Fri)

function solution(n, k) {
  let dum = parseInt(n / 10); // 나눈 몫만큼 서비스
  let beverage = k - dum;
  let answer = n * 12000 + beverage * 2000;
  return answer;
}
// 양꼬치 10인분 지불 -> 음료수 1개 서비스
// 음료수 3개 - 1개 서비스 = 2개 지불

console.log(solution(10, 3)); // 124,000
