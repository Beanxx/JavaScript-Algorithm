// 복습완료💫(221118)
// 2022.07.12(Tues)
// 행렬의 덧셈.js

// my way
// 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과
function solution(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let el = [];
    // 이중 배열 접근하여 순회
    for (let j = 0; j < arr1[0].length; j++) {
      el.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(el);
  }
  return result;
}

// 첨엔 결과가 이중 배열이 아닌 그냥 배열로 출력되어서 중간에 한번 다른 빈 배열에 값을 담아주고,
// 최종적으로 다시 한번 제일 큰 빈 배열에 다시 담아주었다.

// --------------------------------------------------------------

// other way
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
  // arr1.map((a, i) => a) = [[1,2],[2,3]]
  // b는 각각 [1, 2], [2, 3]
}

// example case - arr1: [[1,2],[2,3]], arr2: [[3,4],[5,6]]

// 1st
// arr1.map((a, i) => ~~): a는 arr1의 각 요소, i는 index를 뜻함
// 즉, 위의 과정까지 거치면 [1,2], [2,3] 요소에 index가 각각 0, 1이 연결

// 2nd
// a.map((b, j) => ~~): b는 a 즉, arr1 배열의 각각의 큰 덩어리의 요소, i는 내부 index를 뜻함
// a[0] = 1,2 & a[1] = 3,4

// 3rd
// b + arr2[i][j]: 즉, 앞서 언급한 b에 같은 index 위치에 있는 arr2의 요소들을 각각 더한다.

// 화살표 함수를 2번 사용해서 한 줄에 구현 가능하다니 놀랍균,,

console.log(solution([[1], [2]], [[3], [4]])); // [[4], [6]]
