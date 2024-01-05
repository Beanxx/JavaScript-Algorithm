// 2024.01.05(Fri)

// my way
function solution(arr) {
  let result = [];

  for (let el of arr) {
    if (el >= 50 && el % 2 === 0) {
      result.push(el / 2);
    } else if (el < 50 && el % 2 === 1) {
      result.push(el * 2);
    } else {
      result.push(el);
    }
  }

  return result;
}

// other way
function solution(arr) {
  return arr.map((el) => {
    if (el >= 50 && el % 2 === 0) return el / 2;
    if (el < 50 && el % 2 === 1) return el * 2;
    return el;
  });
}

console.log(solution([1, 2, 3, 100, 99, 98])); // [2, 2, 6, 50, 99, 49]
