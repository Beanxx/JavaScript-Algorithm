// 2024.11.18(Mon)

// my way
function solution(keymap, targets) {
  const result = [];

  const arr = keymap
    .map((el) => el.split("").map((char, idx) => ({ [char]: idx + 1 })))
    .flat();

  const minValues = {};
  arr.forEach((obj) => {
    const [key, value] = Object.entries(obj)[0];
    if (!(key in minValues) || minValues[key] > value) {
      minValues[key] = value;
    }
  });

  for (let el of targets) {
    let n = 0;
    let isInvalid = false;

    for (let char of el) {
      if (minValues[char] !== undefined) {
        n += minValues[char];
      } else {
        isInvalid = true;
        break;
      }
    }

    result.push(isInvalid ? -1 : n);
  }

  return result;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
