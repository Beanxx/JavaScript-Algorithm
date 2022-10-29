// 2022.10.29(Sat)

// my way
function solution(i, j, k) {
  let answer = 0;
  let arr = [];

  for (let a = i; a <= j; a++) {
    arr.push(...[...String(a)]);
  }
  answer = arr.filter((el) => +el === +k).length;
  return answer;
}

// other way
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}
