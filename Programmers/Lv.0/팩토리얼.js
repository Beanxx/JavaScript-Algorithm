// 2022.10.18(Tues)

function solution(n) {
  let facto = 1;
  let result = 1;

  for (let i = 2; i <= n; i++) {
    if (facto * i > n) {
      return i - 1;
    } else {
      facto *= i;
      result = i;
    }
  }
  return result;
}

// other way
function solution(n) {
  let facto = 1;
  let i = 1;
  while (facto * i < n) {
    facto *= ++i;
  }
  return i;
}
