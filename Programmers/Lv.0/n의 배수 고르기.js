// 2022.10.24(Mon)

// my way
function solution(n, numlist) {
  let answer = [];
  for (let el of numlist) {
    if (el % n === 0) {
      answer.push(el);
    }
  }
  return answer;
}

// other way
function solution(n, numlist) {
  return numlist.filter((el) => el % n === 0);
}
