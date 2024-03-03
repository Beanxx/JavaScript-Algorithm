// 2024.03.03(Sun)

// my way
function solution(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[j][i]) {
        count += 1;
      }
    }
  }

  if (arr.flat().length === count) return 1;
  else return 0;
}

// ------------------------------------------------------------

// other way 1
function solution(arr) {
  const SIZE = arr.length;

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (arr[i][j] !== arr[j][i]) return 0;
    }
  }

  return 1;
}

// 내 풀이랑 비슷하긴 한데 for문 안에서 한번이라도 arr[i][j], arr[j][i] 값이 다르면 return 0을 하는 셈이니까
// for문을 통과했다는건 몯느 조건을 성립했다는 것이므로 이 때 1를 리턴하면 굳이 for문 밖에서 조건문을 쓰지 않아도 된다!

// other way 2
function solution(arr) {
  return arr.every((el, i) => el.every((_, j) => arr[i][j] === arr[j][i]))
    ? 1
    : 0;
}
// arr.every(): arr에 존재하는 모든 값이 특정 조건을 만족하는지 확인하는 메서드로 boolean 값 리턴

console.log(
  solution([
    [5, 192, 33],
    [192, 72, 95],
    [33, 95, 999],
  ])
); //	1

console.log(
  solution([
    [19, 498, 258, 587],
    [63, 93, 7, 754],
    [258, 7, 1000, 723],
    [587, 754, 723, 81],
  ])
); //	0
