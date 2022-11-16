// 복습완료💫(221116)
// 2022.10.30(Sun)

// n과 가까운 수부터 정렬 (n으로부터 거리가 같다면 더 큰 수가 앞으로 오도록)
function solution(numlist, n) {
  let sortedArr = []; // 정렬된 배열
  let result = [];

  // n과의 차이를 구해서 ex. 	[[1, 3], [ 2, 2 ] ...]
  // 이런식으로 각 원소에 해당되는 n과의 차이를 같은 배열로 묶어준다.
  for (let el of numlist) {
    sortedArr.push([el, Math.abs(n - el)]);
    // Math.abs() 메소드를 통해 절대값을 이용하여 n과의 차이를 구해줌
  }

  // 즉, 각 내부 배열의 index 0에는 정렬해야 할 원소들, index 1에는 n과의 차이가 들어있게 된다.

  // n과의 차이가 같은 경우 수가 더 큰게 앞에 와야하므로 먼저 배열을 내림차순으로 정렬한다.
  sortedArr.sort((a, b) => b[0] - a[0]);
  // 	[ [ 6, 2 ], [ 5, 1 ], [ 4, 0 ], [ 3, 1 ], [ 2, 2 ], [ 1, 3 ] ]

  // 이후, n과의 차이가 작은 것부터 정렬되도록 오름차순 정렬을 한다.
  sortedArr.sort((a, b) => a[1] - b[1]);
  // [ [ 4, 0 ], [ 5, 1 ], [ 3, 1 ], [ 6, 2 ], [ 2, 2 ], [ 1, 3 ] ]

  // 반환해야 하는 것은 기존 numlist의 원소들이므로 el[0]만 배열 안에 반환
  return sortedArr.map((el) => el[0]);
}

// other way
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
// n과의 차이를 가지고 오름차순으로(차이가 적은 것부터) 먼저 정렬한 후에, 각 원소 숫자를 비교하여 내림차순 정렬을 해준다.

console.log(solution([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]
