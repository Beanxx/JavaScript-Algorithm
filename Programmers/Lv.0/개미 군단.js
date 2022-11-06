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
