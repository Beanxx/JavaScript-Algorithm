// 24.06.27(Thurs)

// my way
function solution(arr, queries) {
  // for (let el of queries) {
  //   let temp = arr[el[0]];
  //   arr[el[0]] = arr[el[1]];
  //   arr[el[1]] = temp;
  // }

  // refactor
  for (let [i, j] of queries) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

// ----------------------------------------------------------------

// other way 1
function solution(arr, queries) {
  for (let [i, j] of queries) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
// for 조건문에서 구조분해할당으로 바로 queries의 2차원 배열 원소를 뽑아내면 더 깔끔한 코드!

// other way 2
function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
); // [3, 4, 1, 0, 2]
