// 2024.01.05(Fri)

// my way
function solution(arr, n) {
  let arrLength = arr.length;

  if (arrLength % 2 === 1) {
    return arr.map((el, i) => (i % 2 === 0 ? el + n : el));
  } else {
    return arr.map((el, i) => (i % 2 === 1 ? el + n : el));
  }
}

// other way
function solution(arr, n) {
  return arr.map((el, idx) => (arr.length % 2 !== idx % 2 ? el + n : el));
}

// arr.length 홀 -> 짝수 인덱스에 +n
// arr.length 짝 -> 홀수 인덱스 +n
// => arr.length % 2 !== idx % 2

console.log(solution([49, 12, 100, 276, 33], 27)); // [76, 12, 127, 276, 60]
console.log(solution([444, 555, 666, 777], 100)); // 	[444, 655, 666, 877]
