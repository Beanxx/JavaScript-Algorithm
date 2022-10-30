// 2022.10.30(Sun)

function solution(chicken) {
  let service = 0;
  let coupon = chicken;

  // 쿠폰이 10개 이상이면 반복
  while (coupon >= 10) {
    service += Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10) + (coupon % 10);
    // coupon % 10 => 주문하지 못한 남은 쿠폰
  }

  return service;
}
