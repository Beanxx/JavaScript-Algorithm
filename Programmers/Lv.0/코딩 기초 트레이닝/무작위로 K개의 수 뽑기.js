// 2024.08.05(Mon)

// my way
function solution(arr, k) {
  let result = [];

  for (let el of arr) {
    if (!result.includes(el) && result.length < k) {
      result.push(el);
    }
  }

  if (result.length !== k) {
    return [...result, ...Array(k - result.length).fill(-1)];
  }

  return result;
}

// other way
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k
    ? [...set, ...Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}

// Set: Set의 값은 한 번만 나타날 수 있으며, Set의 컬렉션에서는 고유한 값이여야 한다
// => Set을 사용하면 중복 값을 제거할 수 있음!

console.log(solution([0, 1, 1, 2, 2, 3], 3)); // [0, 1, 2]
console.log(solution([0, 1, 1, 1, 1], 4)); // [0, 1, -1, -1]
