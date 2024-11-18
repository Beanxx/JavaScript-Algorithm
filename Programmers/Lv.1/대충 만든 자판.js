// 2024.11.18(Mon)

// my way
function solution(keymap, targets) {
  const result = [];

  const arr = keymap
    .flatMap((el) => [...el].map((char, idx) => ({ [char]: idx + 1 })))
    .flat();

  // arr = [ { A: 1 }, { B: 2 }, { A: 3 }, { C: 4 }, { D: 5 }, { B: 1 }, { C: 2 }, { E: 3 }, { F: 4 }, { D: 5 } ]

  const uniqueObj = {};

  arr.forEach((obj) => {
    const [key, value] = Object.entries(obj)[0];

    if (!(key in uniqueObj) || uniqueObj[key] > value) {
      uniqueObj[key] = value;
    }
  });

  // uniqueObj = { A: 1, B: 1, C: 2, D: 5, E: 3, F: 4 }

  for (let el of targets) {
    let n = 0;
    let isInvalid = false;

    for (let char of el) {
      if (uniqueObj[char] === undefined) isInvalid = true;
      else n += uniqueObj[char];
    }

    result.push(isInvalid ? -1 : n);
  }

  return result;
}

// ----------------------------------------------------------

// other way
function solution(keymap, targets) {
  const result = [];
  const map = {};

  for (const items of keymap) {
    items
      .split("")
      .map((item, i) => (map[item] = map[item] < i + 1 ? map[item] : i + 1));
    // map에 이미 할당되어 있는 값이 i+1 보다 작다면 유지, 더 작은 값이 있다면 i+1 값으로 변경
  }

  for (const items of targets) {
    result.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  // 횟수 누적 계산은 reduce로 처리하면 간단!

  return result;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]
