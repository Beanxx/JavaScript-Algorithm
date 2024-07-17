// 2024.07.17(Wed)

// my way
function solution(arr, queries) {
  let result = [...arr];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];

    for (let j = s; j <= e; j++) {
      if (j % k === 0) {
        result[j] += 1;
      }
    }
  }

  return result;
}

// -----------------------------------------------------

// other way 1
function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  }
  return arr;
}

// 내가 구현한 방법과 동일한 플로우지만 좀 더 깔끔하게 구현된 코드!

// other way 2
function solution(arr, queries) {
  return queries.reduce((acc, [s, e, k]) => {
    return acc.map((val, idx) => {
      if (idx >= s && idx <= e && idx % k === 0) {
        return val + 1;
      }
      return val;
    });
  }, arr);
}

// reduce, map을 이용하면 중첩 for문 안 쓰고도 구현 가능

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
); // [3, 2, 4, 6, 4]
