// 2024.07.12(Fri)

// my way
function solution(arr) {
  let stk = [];

  for (let el of arr) {
    if (stk.length === 0) {
      stk.push(el);
      continue;
    }

    if (stk[stk.length - 1] === el) {
      stk.pop();
      continue;
    } else {
      stk.push(el);
      continue;
    }
  }

  return stk.length === 0 ? [-1] : stk;
}

// other way
function solution(arr) {
  let stk = [];

  arr.forEach((el, i) => {
    if (el === stk[stk.length - 1]) stk.splice(-1); // stk.pop() 과 동일
    else stk.push(el);
  });

  if (stk.length === 0) stk = [-1];

  return stk;
}

// stk.length === 0 조건을 젤 나중에 처리하면 for문에서 굳이 continue 안쓰고 if-else로만 해결 가능!

console.log(solution([0, 1, 1, 1, 0])); // [0, 1, 0]
console.log(solution([0, 1, 0, 1, 0])); // [0, 1, 0, 1, 0]
console.log(solution([0, 1, 1, 0])); // [-1]
