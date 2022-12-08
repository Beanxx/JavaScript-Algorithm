// // 2022.12.08(Thurs)
// 행렬의 곱셉.js

// other way 1
// 3중 반복문 이용
function solution(arr1, arr2) {
  let result = [];

  // arr1 행 순회 (arr1[i])
  for (let i = 0; i < arr1.length; i++) {
    let row = [];

    // arr2 열 순회
    // arr2[0].length: 2
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      // 행렬 곱셈 연산
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum); // 행렬 곱셈 연산을 한 결과값을 row에 push하고,
    }
    result.push(row); // row를 다시 result에 push해주기
  }
  return result;
}

// (arr1[0][0] * arr2[0][0]) + (arr1[0][1] * arr2[1][0]) = result[0][0]

// other way 2
function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}

// 중고딩 때 교육 과정 개편되면서 행렬 안 배워서 행렬 곱셈 어떻게 하는지 몰라서 헤맸다..
// 행렬 곱셈 자체를 어찌 하는건지 요리조리 해봐도 물음표 투성이 ???? 이게 머지
// 풀이를 봐도 이해가 어렵쓰,,

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [[15, 15], [15, 15], [15, 15]]
