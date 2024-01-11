// 2024.01.11(Thurs)

// my way
function solution(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    // arr1.length === arr2.length
    let arr1Sum = arr1.reduce((acc, cur) => acc + cur);
    let arr2Sum = arr2.reduce((acc, cur) => acc + cur);

    if (arr1Sum > arr2Sum) return 1;
    else if (arr1Sum < arr2Sum) return -1;
    else return 0;
  }
}

// --------------------------------------------------------------------

// other way 1
function solution(arr1, arr2) {
  let result = 0;

  if (arr1.length !== arr2.length) {
    result = arr1.length > arr2.length ? 1 : -1;
  } else {
    result =
      arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b)
        ? 1
        : arr1.reduce((a, b) => a + b) == arr2.reduce((a, b) => a + b)
        ? 0
        : -1;
  }

  return result;
}

// other way 2
function solution(arr1, arr2) {
  const funcCompare = (a, b, option) => {
    if (option === "reduce") {
      a = a.reduce((acc, cur) => acc + cur);
      b = b.reduce((acc, cur) => acc + cur);
    }

    return a > b ? 1 : a < b ? -1 : 0;
  };

  return arr1.length !== arr2.length
    ? funcCompare(arr1.length, arr2.length)
    : funcCompare(arr1, arr2, "reduce");
}

console.log(solution([49, 13], [70, 11, 2])); // -1
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36])); // 1
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3])); // 0
