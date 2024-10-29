// 2024.10.29(Tues)

// my way
function solution(arr, queries) {
  for (const [s, e] of queries) {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
  }

  return arr;
}

// ------------------------------------------------------------------

// other way
function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    while (s <= e) {
      arr[s++]++;
    }
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
); // [1, 3, 4, 4, 4]
