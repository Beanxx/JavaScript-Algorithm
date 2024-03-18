// 2024.03.18(Mon)

// my way
function solution(a, d, included) {
  let length = included.length;
  let arr = [a];
  let result = 0;

  for (let i = 1; i < length; i++) {
    arr.push(a + d);
    a += d;
  }

  for (let j = 0; j < length; j++) {
    if (included[j]) {
      result += arr[j];
    }
  }

  return result;
}
// 내가 생각해도 좀 더러운 코드,, 좀 더 생각해서 풀어보쟈

// ------------------------------------------------------

// other way 1
function solution(a, d, included) {
  return included.reduce((acc, cur, i) => {
    return cur ? acc + a + d * i : acc;
  }, 0);
}

// ------------------------------------------------------

// other way 2
function solution(a, d, included) {
  let result = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      result += a + d * i;
    }
  }

  return result;
}
// 이렇게 쓰면 for문을 2번 쓸 필요가 없어서 더 효율적이겠다

// ------------------------------------------------------

// other way 3
function solution(a, d, included) {
  let result = 0;

  included.map((bool, i) => {
    if (bool) result += a + d * i;
  });

  return result;
}

console.log(solution(3, 4, [true, false, false, true, true])); // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); // 10
