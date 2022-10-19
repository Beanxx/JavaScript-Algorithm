// 2022.10.19(Wed)

// my way
function solution(my_string) {
  let answer = 0;
  let arr = my_string.match(/\d/g).map((n) => Number(n));

  for (let el of arr) {
    answer += el;
  }

  return answer;
}

// other way
function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, cur) => acc + Number(cur), 0);
}
