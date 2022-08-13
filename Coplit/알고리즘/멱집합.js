// 멱집합

let inputSet = ["a", "b", "c"];

// 재귀함수를 이용하여 구현
function powerSet(arr) {
  const result = [];

  function recursion(subset, start) {
    result.push(subset);

    for (let i = start; i < arr.length; i++) {
      // 구조분해할당으로
      recursion([...subset, arr[i]], i + 1);

      // concat() 사용으로 위와 같은 결과를 나타냄
      // recursion(subset.concat(arr[i]), i+1);
    }
  }

  recursion([], 0);

  return result;
}

console.log(powerSet(inputSet));
/* [
  [],
  [ 'a' ],
  [ 'a', 'b' ],
  [ 'a', 'b', 'c' ],
  [ 'a', 'c' ],
  [ 'b' ],
  [ 'b', 'c' ],
  [ 'c' ]
] */
