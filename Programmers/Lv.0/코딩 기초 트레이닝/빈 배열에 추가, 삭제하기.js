// 2024.10.10(Sat)

// my way
function solution(arr, flag) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      result.push(...Array(arr[i] * 2).fill(arr[i]));
    } else {
      result.splice(-arr[i]); // 원본 배열이 수정되어야 하므로 splice 사용!
    }
  }

  return result;
}

// Array(cnt).fill(el): el 원소를 cnt개 만큼 배열에 할당 (e.g. Array(3).fill(1) = [1, 1, 1])
// slice: 원본 배열 수정 X vs splice: 원본 배열 수정 O

// ------------------------------------------------------------------

// other way
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) =>
      flag[i]
        ? [...prev, ...new Array(num * 2).fill(num)]
        : prev.slice(0, -num),
    []
  );
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false])); // [3, 3, 3, 3, 4, 4, 4, 4]
