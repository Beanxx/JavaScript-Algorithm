// 복습완료💫(221116)
// 2022.10.29(Sat)

// my way
function solution(score) {
  let answer = [];
  let arr = score.map((el) => (el[0] + el[1]) / 2); // [ 75, 70, 55, 65 ]
  let sortedArr = [...arr].sort((a, b) => b - a); // [ 75, 70, 65, 55 ] <= 내림차순 정렬

  for (let i = 0; i < arr.length; i++) {
    answer.push(sortedArr.indexOf(arr[i]) + 1); // 등수 매기기
    // 내림차순으로 정렬된 배열에서 index를 구해서 +1을 해주면 등수가 된다!
  }

  return answer;
}

// other way
function solution(score) {
  let avg = score.map((el) => (el[0] + el[1]) / 2);
  let sorted = [...avg].sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
  // for문 대신 map으로 바로 등수를 반환 가능!
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
); // [1, 2, 4, 3]
