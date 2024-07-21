// 2024.07.21(Sun)

// my way
function solution(arr) {
  let stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0 || stk.slice(stk.length - 1) < arr[i]) {
      stk.push(arr[i]);
    } else {
      stk.pop();
      i--;
    }
  }

  return stk;
}

// -----------------------------------------------------

// other way

function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; ) {
    if (!stk.length || stk.at(-1) < arr[i]) {
      stk.push(arr[i++]);
    } else {
      stk.pop();
    }
  }

  return stk;
}

// arr.at(-1): 주어진 배열의 마지막 요소를 반환
// for문의 증감문을 따로 쓰지 않고 push 할 떄 따로 i++ 해주기

console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]
