// 2024.01.14(Sun)

// my way

function solution(names) {
  const result = names.filter((_, idx) => idx % 5 === 0);

  return result;
}

// --------------------------------------------------------------------------

// other way
function solution(names) {
  const result = [];

  for (let i = 0; i < names.length; i += 5) {
    result.push(names[i]);
  }

  return result;
}

// filter는 idx를 차례대로 순회하지만, 증감문이 i += 5인 for문으로 돌린다면 idx를 5씩 건너뛰어 더 시간 성능이 좋지 않을까?
// => 단순한 로직이고, for문 내 로직에 push() 메서드도 동작해서 console.time(), console.timeEnd()로 시간 측정을 해보면 막상 비슷함

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
); // ["nami", "vex"]
