// 2024.04.09(Tues)

// my way
function solution(arr, intervals) {
  let result = [];

  result.push(...arr.slice(intervals[0][0], intervals[0][1] + 1));
  result.push(...arr.slice(intervals[1][0], intervals[1][1] + 1));

  return result;
}

// -------------------------------------------

// other way
function solution(arr, intervals) {
  const [[a, b], [c, d]] = intervals;

  return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}

// 내가 푼 코드와 결론적으로는 비슷한 방법이지만 훨씬 깔꼼쓰한 풀이!

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ]
  )
); // [2, 3, 4, 1, 2, 3, 4, 5]
