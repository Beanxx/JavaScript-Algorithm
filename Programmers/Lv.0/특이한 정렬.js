// 2022.10.30(Sun)

function solution(numlist, n) {
  let sortedArr = [];
  let result = [];

  // n과의 차이를 구해서 ex. 	[[1, 3], [ 2, 2 ] ...]
  // 이런식으로 각 원소에 해당되는 n과의 차이를 같은 배열로 묶어준다.
  for (let el of numlist) {
    sortedArr.push([el, Math.abs(n - el)]);
  }

  // 즉, 각 내부 배열의 index 0에는 정렬해야 할 원소들, index 1에는 n과의 차이가 들어있게 된다.

  // n과의 차이가 같은 경우 수가 더 큰게 앞에 와야하므로 먼저 배열을 내림차순으로 정렬한다.
  sortedArr.sort((a, b) => b[0] - a[0]);

  // 이후, n과의 차이가 작은 것부터 정렬되도록 오름차순 정렬을 한다.
  sortedArr.sort((a, b) => a[1] - b[1]);

  // 반환해야 하는 것은 기존 numlist의 원소들이므로 el[0]만 배열 안에 반환
  result = sortedArr.map((el) => el[0]);
  return result;
}

// other way
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
// n과의 차이를 가지고 오름차순으로 먼저 정렬한 후에, 원소 숫자를 가지고 내림차순 정렬을 해준다.
