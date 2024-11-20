// 복습완료💫(221108)
// 2022.10.29(Sat)

// my way
function solution(i, j, k) {
  let arr = [];

  for (let a = i; a <= j; a++) {
    arr.push(...[...String(a)]);
    // a = 12 -> [...String(a)] = ['1', '2']
    // arr에 [...String(a)] 자체를 push하는 경우 arr 배열 안에 또 다른 배열이 들어가게 된다.
    // so, spread 연산자로 배열을 다시 한번 풀어서 push해야 arr 자체가 ['1', '2'] 요런 형태가 됨!
  }

  // arr에 원소들은 모두 문자열 타입이므로 +를 붙여서 숫자로 비교 가능하도록 해주기
  // arr = [1, 2, 3, ..., 9, 1, 0, 1, 1, 1, 2, 1, 3]
  // k가 1이면 1만 골라내서 [1, 1, 1, 1, 1, 1]가 되고 이 배열의 길이를 구하면 끄읏-
  return arr.filter((el) => +el === +k).length;
}

// 241120
function solution(i, j, k) {
  let result = [];

  for (let n = i; n <= j; n++) {
    result.push(...String(n).split(""));
  }

  return result.filter((el) => Number(el) === k).length;
}

// other way
function solution(i, j, k) {
  let a = "";

  for (i; i <= j; i++) {
    a += i;
  }
  // a = '12345678910111213'
  // a.split(1) = ['', '23456789', '0', '', '', '2', '3']
  // 1를 기준으로 쪼갠 것이므로 각 원소 사이에 1이 있다고 생각하면 될듯!
  // 그럼 배열 길이는 7이지만 원소 사이가 몇 개인지 세보면 배열 길이에서 -1를 해줘야 한닷
  return a.split(k).length - 1;
}

console.log(solution(1, 13, 1)); // 6
