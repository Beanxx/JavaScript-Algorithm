// 2024.01.06(Sat)

// my way
function solution(n, k) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      result.push(i);
    }
  }

  return result;
}

// --------------------------------------------

// other way 1
function solution(n, k) {
  let result = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return result;
}

// for문의 조건문에 k를 활용해서 작성하면 조금이라도 덜 순회할 수 있다

// other way 2
function solution(n, k) {
  return Array(n)
    .fill(1)
    .map((el, idx) => el + idx)
    .filter((el) => el % k === 0);
}

// Array(n).fill(1): 값이 1인 n개의 원소를 갖는 배열 생성
// .map((el, idx) => el + idx): 1+0=1, 1+1=2, 1+2=3 ... -> 즉, [1, 2, 3, 4, 5, 6, ..., n] 형태의 배열이 만들어짐
// .filter((el) => el % k === 0): 배열의 원소들 중 k의 배수만 필터링

console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); //	[5, 10, 15]
