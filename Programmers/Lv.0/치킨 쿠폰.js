// 복습완료💫(221116)
// 2022.10.30(Sun)

function solution(chicken) {
  let service = 0;
  let coupon = chicken; // 시킨 치킨 수 만큼 쿠폰이 발급되므로 coupon 초기값을 chicken으로 할당

  // 쿠폰이 10개 이상이면 순회
  while (coupon >= 10) {
    service += Math.floor(coupon / 10);

    // 서비스로 시킨 치킨에 대한 쿠폰 + 10장이 안되서 주문하지 못한 남은 쿠폰(coupon % 10)
    coupon = Math.floor(coupon / 10) + (coupon % 10);
  }
  return service;
}

console.log(solution(1081)); // 120

// 1번째 순회
// 1081를 시켜먹은 경우 쿠폰이 1081개 -> 108마리 치킨 서비스! -> 108장 쿠폰 발급
// service: 108
// coupon: 108 + 1 = 109

// 2번째 순회
// coupon 109장 -> 10마리 치킨 서비스 -> 10장 쿠폰 발급
// servcie: 108 + 10 = 118
// coupon: 10 + 9 = 19

// 3번째 순회
// coupon 19장 -> 1마리 치킨 서비스 -> 1장 쿠폰 발급
// service: 118 + 1 = 119
// coupon: 1 + 9 = 10

// 4번째 순회
// coupon 10장 -> 1마리 치킨 서비스 -> 1장 쿠폰 발급
// sevice: 119 + 1 = 120 <- result!!
// coupon: 1 + 0 = 1 => coupon이 10보다 작으므로 순회 끄읏-

// 남은 쿠폰에 대해서 생각하는 과정에서 중간에 퍼득 정신 안 차리면 헷갈린다,,
