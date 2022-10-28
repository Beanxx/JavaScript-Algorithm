// 2022.10.28(Fri)

function solution(lines) {
  let obj = {};
  let result = 0;

  for (let el of lines) {
    let max = Math.max(...el);
    let min = Math.min(...el);

    for (let i = min; i < max; i++) {
      // 이미 존재하는 숫자이면 +1, 존재하지 않는 숫자이면 객체 값을 1로 할당
      obj[i] ? obj[i]++ : (obj[i] = 1);
    }
  }

  // value 즉, 길이가 1 초과이면 겹친다는 것이므로 + 1
  for (let key in obj) {
    obj[key] > 1 && result++;
  }

  return result;
}

// 객체를 이용하여 푸는 방법을 떠올리기가 쉽지 않았다..
