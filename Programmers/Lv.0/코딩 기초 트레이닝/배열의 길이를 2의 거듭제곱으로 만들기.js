// 24.06.25.화

// my way
function solution(arr) {
  const length = arr.length; // 6
  let i = 0;

  while (true) {
    if (2 ** i >= length) {
      return arr.concat(Array(2 ** i - length).fill(0));
    }

    i++;
  }
}

// Array(3).fill(0): 배열에 0을 3개 채운다 -> [0, 0, 0]
// [1,2,3].concat([0,0]) => [1, 2, 3, 0, 0]

// ---------------------------------------------------------------

// other way
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...Array(totalLength - length).fill(0)];
}

// Math.log2(length): length의 밑이 2인 Log 반환 (e.g. Math.log2(8) => 8=2^3 이므로 return 3)
// 2 ** i이 arr.length보다 크거나 같아야 하므로, 위의 값을 Math.ceil()해주면 내가 while 반복문으로 구한 i 값을 굳이 반복문 사용하지 않고도 구할 수 있다..bb

console.log(solution([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 0, 0]
console.log(solution([58, 172, 746, 89])); // [58, 172, 746, 89]
