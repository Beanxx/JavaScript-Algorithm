// 2024.07.16(Tues)

// my way
function solution(arr) {
  let currentArray = [...arr];
  let cnt = 0;

  const transform = (arr) => {
    return arr.map((el) => {
      if (el >= 50 && el % 2 === 0) {
        return el / 2;
      } else if (el < 50 && el % 2 !== 0) {
        return el * 2 + 1;
      } else {
        return el;
      }
    });
  };

  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  };

  // [Refactoring]
  // const arraysEqual = (arr1, arr2) => {
  //   if (arr1.length !== arr2.length) return false;

  //   return arr1.every((el, index) => el === arr2[index]);
  // };

  while (true) {
    cnt++;
    let nextArray = transform(currentArray);

    if (arraysEqual(currentArray, nextArray)) {
      return cnt - 1;
    }

    currentArray = nextArray;
  }
}

// ------------------------------------------------------

// other way
function solution(arr) {
  let cnt = 0;
  let before = [-1];

  while (!arr.every((e, idx) => e === before[idx])) {
    before = [...arr];

    arr = arr.map((e) => {
      if (e >= 50 && e % 2 === 0) return e / 2;
      if (e < 50 && e % 2 !== 0) return e * 2 + 1;
      return e;
    });
    cnt++;
  }
  return cnt - 1;
}

console.log(solution([1, 2, 3, 100, 99, 98])); // 5
