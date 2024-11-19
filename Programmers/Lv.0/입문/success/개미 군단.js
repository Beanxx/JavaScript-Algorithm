// 복습완료💫(221106)
// 2022.10.16(Sun)

function solution(hp) {
  let five = parseInt(hp / 5); // 장군개미
  hp -= five * 5;

  let three = parseInt(hp / 3); // 병정개미
  hp -= three * 3;

  let one = hp; // 일개미

  return five + three + one;
}

// 241119
function solution(hp) {
  let a = parseInt(hp / 5);
  let b = parseInt((hp - a * 5) / 3);
  let c = hp - a * 5 - b * 3;

  return a + b + c;
}

// other way
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
// 나머지 연산을 이용함현 더 간단하게 구현 가능

// 소수점 내림할 때 parseInt(), Math.floor() 중에 미세하지만 Math.floor()가 더 빠르고 가독성도 좋음! => Math.floor() 메서드 사용 하자 ~
