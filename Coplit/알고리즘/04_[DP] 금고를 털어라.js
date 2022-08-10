// [DP] 금고를 털어라.js
// 2022.08.10(Wed)

function ocean(target, type) {
  // bag 이라는 배열에 금액을 만들 수 있는 경우의 수를 기록
  // bag index => 만드려는 금액

  // ex) target = 5, type = [1, 2, 5] 라면,
  // bag[3] = 2  => 3을 만드는 경우의 수 = (1x3), (1x1 + 2x1)
  // bag[4] = 2  => 4를 만드는 경우의 수 = (1x4), (1x2 + 2x1)
  // bag[5] = 4  => 5를 만드는 경우의 수 = (1x5), (1x3 + 2x1), (1x1 + 2x2), (5x1)

  // 0을 만들 수 있는 경우 = 아무것도 선택 X (1가지 경우) => bag[0] = 1로 초기값 설정
  let bag = [1];

  // bag을 target 금액만큼의 길이를 가진 배열을 만들어 주고,
  // 경우의 수를 저장하기 위해 초기값은 모두 0으로 만들기
  for (let i = 1; i <= target; i++) {
    bag[i] = 0;
  } // [1, 0, 0, 0, 0]

  // 돈의 종류가 담겨있는 배열을 순차적으로 탐색
  for (let i = 0; i < type.length; i++) {
    for (let j = 1; j <= target; j++)
      // 금액 단위 종류보다 적은 금액은 만들 수 없으므로 탐색할 필요 없음
      if (type[i] <= j)
        // 기존 경우의 수에 type[i]를 뺀 금액을 만들 수 있는 경우의 수를 더해줌
        bag[j] += bag[j - type[i]];
  }
  return bag[target];
}

console.log(ocean(50, [10, 20, 50])); // 4
console.log(ocean(100, [10, 20, 50])); // 10
console.log(ocean(30, [5, 6, 7])); // 4
