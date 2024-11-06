// 2024.11.05(Wed)

// my way
function solution(picture, k) {
  let result = [];
  let el = "";
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[i].length; j++) {
      el += picture[i][j].repeat(k);
    }

    result.push(...Array(k).fill(el));
    el = "";
  }

  return result;
}

// ------------------------------------------------------------------

// other way
function solution(picture, k) {
  let result = [];

  picture.forEach((line) => {
    const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), "");

    // for (let i = 0; i < k; i++) result.push(expanded);
    result.push(...Array(k).fill(expanded)); // line 28 same
  });

  return result;
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
); // ["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]

console.log(solution(["x.x", ".x.", "x.x"], 3)); // ["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]
