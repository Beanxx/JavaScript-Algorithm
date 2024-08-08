// 2024.08.08(Thurs)

// my way
function solution(arr) {
  const columnLength = arr.length; // 행 수
  const rowLength = arr[0].length; // 열 수

  if (columnLength > rowLength) {
    for (let i = 0; i < arr.length; i++) {
      const repeatCnt = columnLength - rowLength;
      const pushArr = new Array(repeatCnt).fill(0);
      arr[i].push(...pushArr);
    }
  } else if (rowLength > columnLength) {
    const repeatCnt = rowLength - columnLength;
    const emptyArr = new Array(rowLength).fill(0);
    const repeatedArray = Array.from({ length: repeatCnt }, () => [
      ...emptyArr,
    ]);
    arr.push(...repeatedArray);
  }

  return arr;
}

// ----------------------------------------------------------------

// other way
function solution(arr) {
  // arr 원소 길이는 모두 같으므로 열(row) 수는 index 0으로 비교 가능!
  const n = Math.max(arr.length, arr[0].length);

  arr.forEach((row) => {
    while (row.length < n) {
      row.push(0);
    }
  });

  while (arr.length < n) {
    arr.push(Array(n).fill(0));
  }

  return arr;
}

// 중첩 루프 돌아서 성능이 좋은건 모르겠지만 보기에는 좀 더 깔쌈한 이런 방법도 있다 ~.~

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);
// 	[[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]

console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);
// 	[[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]

console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
); // 	[[1, 2], [3, 4]]
