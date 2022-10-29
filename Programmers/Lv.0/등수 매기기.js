// 2022.10.29(Sat)

// my way
function solution(score) {
  let answer = [];
  let arr = score.map((el) => (el[0] + el[1]) / 2);
  let sortedArr = [...arr].sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    answer.push(sortedArr.indexOf(arr[i]) + 1);
  }

  return answer;
}

// other way
function solution(score) {
  let avg = score.map((el) => (el[0] + el[1]) / 2);
  let sorted = [...avg].sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}
