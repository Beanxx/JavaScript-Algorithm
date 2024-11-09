// 2024.11.09(Sat)

// my way
function solution(arr, queries) {
  let result = [];

  for (let el of queries) {
    const [s, e, k] = el;

    const filteredArr = arr
      .filter((v, idx) => s <= idx && idx <= e && v > k)
      .sort((a, b) => a - b);

    if (filteredArr.length) {
      result.push(filteredArr[0]);
      filteredArr.shift();
    } else {
      result.push(-1);
    }
  }

  return result;
}

// -----------------------------------

// other way 1
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}

// other way 2
function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const result = arr.slice(s, e + 1).filter((num) => num > k);
    return result.length > 0 ? Math.min(...result) : -1;
  });
}

// other way 3
function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    let result = -1;

    for (let i = s; i <= e; i++) {
      const v = arr[i];
      if (v <= k) continue;
      result = result === -1 ? v : Math.min(result, v);
    }

    return result;
  });
}

// 푸는 방법 so 다양.. for문 대신 map 메소드를 사용하는 방법도 생각해보자

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
); //	[3, 4, -1]
