// 2022.10.16(Sun)

function solution(hp) {
  let answer = 0;

  let five = parseInt(hp / 5);
  hp -= five * 5;

  let three = parseInt(hp / 3);
  hp -= three * 3;

  let one = hp;

  answer = five + three + one;
  return answer;
}
